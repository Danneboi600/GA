const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require("mongoose");
const Product = require('./models/Product');

const uri = "mongodb+srv://danber604:Tisdag0606@cluster0.o1yjf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri);
mongoose.connection
  .on("open", () => console.log("mongoose is connected"))
  .on("close", () => console.log("mongoose is disconnected"))
  .on("error", (error) => console.log(error));

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static("public"));

let port = 3000;

app.listen(port, ()=>{
    console.log(`Servern är igång på ${port}`);
}); 

app.get('/', (req,res)=>{
    console.log('Hello world!');
 });
/*
 app.get('/api', (req,res)=>{
  res.json({'users': ['userOne', 'userTwo', 'userThree']});
 });
*/
 

