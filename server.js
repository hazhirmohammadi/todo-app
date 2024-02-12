const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//middlewares
app.use(bodyParser.urlencoded({extended:false}));



//Routes








//server
app.listen(3000, () => console.log(`Server is running.📍`))