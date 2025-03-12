const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require("mongoose");
const Product = require('./models/Product');
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const sharp = require("sharp");
const fs = require("fs");
const resizeImages = require("./resizeImages");

app.use(cors({
  origin: "*",  // Replace with your frontend URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

const uri = "mongodb+srv://danber604:Tisdag0606@cluster0.o1yjf.mongodb.net/webstore?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri);
mongoose.connection
  .on("open", () => console.log("mongoose is connected"))
  .on("close", () => console.log("mongoose is disconnected"))
  .on("error", (error) => console.log(error));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, '../frontend/react/dist'))); 

let port = 3000;

app.listen( port, async ()=>{
    console.log(`Servern är igång på ${port}`);
    await resizeImages();
}); 

app.get('/', async (req,res)=>{
  console.log('Hello world!');
  res.sendFile(path.join(__dirname, '../frontend/react/dist/index.html'));
});

// 🔹 Multer Setup for File Uploads
const storage = multer.diskStorage({
  destination: './uploads/', // Store images in 'uploads' folder
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 } // Allow max 10MB file size
});



/*
// 🔹 Image Upload Route
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const newProduct = await Product.create({
      productNames: req.body.productNames,
      productPrices: req.body.productPrices,
      productImages: `/uploads/${req.file.filename}`, // Store file path
    });

    res.json({ message: "Image uploaded successfully!", product: newProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }s
});*/

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
      if (!req.file) {
          return res.status(400).json({ error: "No file uploaded" });
      }

      const inputPath = req.file.path;
      const outputPath = `./uploads/${req.file.filename}`; // Keep the same name!

      await sharp(inputPath)
          .rotate()
          .resize(300, 300, { fit: "cover" })
          .toFormat("jpeg", { mozjpeg: true, quality: 100 })
          .toFile(outputPath);

      fs.unlinkSync(inputPath); // Delete original file to save space

      const newProduct = await Product.create({
          productNames: req.body.productNames,
          productPrices: req.body.productPrices,
          productImages: `/uploads/${req.file.filename}`,
      });

      res.json({ message: "Image uploaded & resized!", product: newProduct });

  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});
  
  app.get('/products', async (req, res) => {
    const products = await Product.find(); 
    console.log(products);
    res.json(products); 
  });

  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

  app.put('/products/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    product.productNames = req.body.productNames;
    product.productPrices = req.body.productPrices;
    product.productImages = req.body.productImages;
    await product.save();
    res.redirect(`/products/${product._id}`);
  })
  
  app.get('/product/:id', async (req, res) => {
    const data = {
      student: await Product.findById(req.params.id)
    };
    res.json(data);
  });
  
  app.get('*', async (req,res) => {
    res.sendFile(path.join(__dirname, '../frontend/react/dist/index.html'));
  });