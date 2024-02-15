const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();
try {
    console.log("r=",70)
    console.log(router)
    router.post("/add-todo",adminController.addTodo)
}catch (err){
    console.log("r",'admin route error')
    console.log(err)
}



module.exports = router;