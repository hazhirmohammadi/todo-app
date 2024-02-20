const Todo = require("../model/todo");
const todoUtils = require("utils/todos");

exports.addTodo = (req, res) => {
    try {
        if (!req.body || typeof req.body.todo === 'undefined') {
            throw new Error('errorrrrrrr 111')
        } else {
            res.redirect("/");
        }
        const todo = new Todo(todoUtils.generateRandomId(), req.body.todo);
        todo.save(err => {

            if (!err) res.redirect("/");
            else console.log(err)
        })
    } catch (e) {
        console.log(e)
    }
}
exports.deleteTodo = (req, res) => {
    Todo.deleteTodo(req.params.id, (err) => {
        if (!err) res.redirect("/")
        else console.log(err)

    })
}

