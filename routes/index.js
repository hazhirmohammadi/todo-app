const express = require("express");

const todosController = require("../controllers/todosList");

const router = express.Router();

router.get("/", todosController.getIndex)


module.exports = router;