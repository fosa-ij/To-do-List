const TodoTask = require("../models/todotask")

module.exports = {
    getIndex: async (req, res) => {
        try{
            const tasks = await TodoTask.find()
            res.render('index.ejs', {todoTasks: tasks});
        } catch(err){
            res.status(500).send(err)
            console.log(err.message)
        }
    },
    createTask: async (req, res) => {
        const todoTask = new TodoTask(
            {
                title: req.body.title,
                content: req.body.content
            }
        )
        try{
            await todoTask.save()
            console.log(todoTask);
            res.redirect('/')
        } catch(err){
            err ? res.status(500).send(err) : res.redirect('/')
            console.log(err.message);
        }
    }
}