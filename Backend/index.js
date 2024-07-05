const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const { User, Todo } = require('./db');
const TodoRouter = require("./Routes/Todo")

app.use('/todo', TodoRouter);
app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.post('/signup', async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const user = await User.create({
            username: username,
            password: password
        })

        res.status(200).json({
            msg: "User Created Succesfully!"
        })
        
    }
    catch (err) {
        res.status(500).send('Internal Server Error!')
    }
});

app.post(`/login`, async(req,res) => {
    try{
        const username = req.body.username;
        const password = req.body.password;

        const user = await User.findOne({
            username: username,
            password: password
        })

        if(user){
            res.status(200).json({
                msg: "Logged In Succesfully!",
                user_id: user._id
            })
        }
        else{
            res.status(404).json({
                msg: "User not found!",
                user_id: 0
            })
        }
    }
    catch(err){
        res.status(500).send("Internal Server Error!")
    }
})

app.get('/:id', async (req, res) => {
    try{
        const user_id = req.params.id

        const user = await User.findOne({
            _id: user_id
        })

        const all_todos = await Todo.find({
            _id: {"$in" : user.todo_ids}
        })

        res.status(200).json({
            name: user.username,
            user_todos : all_todos
        })
    }
    catch(err){

    }
})

app.listen(3000)