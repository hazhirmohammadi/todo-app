const path=require("path")

const express = require("express");
const bodyParser = require("body-parser");
const {setStatics} = require("./utils/statics.js");

const app = express();
//middlewares
app.use(bodyParser.urlencoded({extended:false}));

//Ejs
app.set('view engine', 'ejs');
app.set("views","views");


//statics
setStatics(app);
//Routes

app.get("/",(req, res) =>{
    res.render('index',{pageTitle:"Todo "})
} )


//server
app.listen(3000, () => console.log(`Server is running.📍`))