const path=require("path")

const express = require("express");
const bodyParser = require("body-parser");

const {setStatics} = require("./utils/statics.js");
const adminRoutes=require("./routes/admin")
const indexRoutes =require("./routes/index")

const app = express();
//middlewares
app.use(bodyParser.urlencoded({extended:false}));

//Ejs
app.set('view engine', 'ejs');
app.set("views","views");


//statics
setStatics(app);
//Routes
app.use(indexRoutes)
app.use("/admin",adminRoutes)

app.get("/",(req, res) =>{
    console.log(102)
    // console.log("req clint=>",req)
    res.render('index',{pageTitle:"Todo "})
    console.log(103)
} )


//server
app.listen(3000, () => console.log(`Server is running.📍`))