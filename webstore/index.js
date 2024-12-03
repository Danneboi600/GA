const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require("mongoose");

const uri = "mongodb+srv://Daber06:Tisdag0606@cluster0.bj6nm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri);
mongoose.connection
  .on("open", () => console.log("mongoose is connected"))
  .on("close", () => console.log("mongoose is disconnected"))
  .on("error", (error) => console.log(error));

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static("public"));

let port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.listen(port, ()=>{
    console.log(`Servern är igång på ${port}`);
}); 

app.get('/', (req,res)=>{
    res.render('index');
 });

 app.get('/cart', (req,res)=>{
    res.render('cart');
 })

