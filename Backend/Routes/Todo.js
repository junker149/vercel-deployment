const {Router} = require("express");
const { Todo, User } = require("../db");
const router = Router();
const cors = require('cors');
router.use(cors());
const bodyParser = require('body-parser');

router.use(bodyParser.json())

router.post('/newTodo', async (req, res) =>{
    try{
        const title = req.body.title;
        const user_id = req.body.user_id;

        const newTodo = await Todo.create({
            title: title,
            status: false
        })

        await User.updateOne(
            {_id: user_id},
            {"$push" : {todo_ids: newTodo._id}}
        )

        res.status(200).json({
            msg: "Todo Created!"
        })
    }
    catch(err){
        res.status(500).send("Internal Server Error")
    }
})

router.post('/delTodo', async (req, res) => {
    try{
        const todo_id = req.body.id;
        const user_id = req.body.user_id;

        await Todo.findOneAndDelete({
            _id: todo_id
        })

        await User.updateOne(
            {_id: user_id},
            {"$pull" : {todo_ids : todo_id}}
        );

        res.status(200).json({
            msg: 'Todo Deleted!'
        })
    }
    catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error!")
    }
})

module.exports = router;