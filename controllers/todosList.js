const Todo = require("../model/todo");


exports.getIndex = (req, res) => {
    console.log(res)
      Todo.fetchAll((todos)=>{
          res.render('index',{
              pageTitle:"List todos",
              todos,
          })
      })
}