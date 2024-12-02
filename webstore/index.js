const express = require('express');
const morgan = require('morgan');
const app = express();

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

