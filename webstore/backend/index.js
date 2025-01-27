const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require("mongoose");
const Product = require('./models/Product');
const path = require('path');

const uri = "mongodb+srv://danber604:Tisdag0606@cluster0.o1yjf.mongodb.net/webstore?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri);
mongoose.connection
  .on("open", () => console.log("mongoose is connected"))
  .on("close", () => console.log("mongoose is disconnected"))
  .on("error", (error) => console.log(error));

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, '../frontend/react/dist')));
app.use(express.json()); 

let port = 3000;

app.listen(port, ()=>{
    console.log(`Servern är igång på ${port}`);
}); 

app.get('*', async (req,res) => {
  res.sendFile(path.join(__dirname, '../frontend/react/dist/index.html'));
});

app.get('/', async (req,res)=>{
    console.log('Hello world!');
    res.sendFile(path.join(__dirname, '../frontend/react/dist/index.html'));
 });

app.post('/form', async (req,res)=>{
    console.log(req.body);
    await Product.create({
      productNames: req.body.productNames,
    });
    res.redirect('/');
});
 
app.get('/products', async (req,res)=>{
  await Product.find();
  const productNames = products.map(product => product.productNames); 
  res.json(productNames);
});

