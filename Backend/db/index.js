const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb+srv://admin:knkEOHQ0MqyKy7ZM@cluster0.xiwahgu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    todo_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }] 
});

const TodoSchema = new mongoose.Schema({
    title: String,
    status: Boolean
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo
}