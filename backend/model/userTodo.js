import mongoose from 'mongoose';

const userTodoSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const Todo = new mongoose.model('Todo', userTodoSchema);

export default Todo;