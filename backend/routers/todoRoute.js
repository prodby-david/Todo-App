import express from 'express';
import authToken from '../middleware/authToken.js'
import Todo from '../model/userTodo.js';

const TodoRouter = express.Router();


TodoRouter.post('/api/dashboard', authToken, async (req,res) => {

    try{
        const { text } = req.body;

        const userId = req.user.userId;

        if (!text) {
            return res.status(400).json({ message: "Text is required for the task" });
          }

        const newTodo = new Todo({
            userId,
            text,
        });

        const saveTodo = await newTodo.save();
        
        res.status(201).json({message: 'Todo created successfully.', saveTodo});

    }catch(err){
        res.status(500).json({error: 'Server error'});
    }

});

TodoRouter.get('/api/dashboard', authToken, async (req,res) => {

    try{
        const userId = req.user.userId;

        if (!userId) {
          return res.status(401).json({ error: 'Unauthorized' });
      }

        console.log('Fetching todos for user:', userId);

        const todos = await Todo.find({ userId }).sort({ createdAt: -1 });

        console.log('Todos found:', todos); 

        res.status(200).json({todos});

    }catch(err){

        console.error('Error fetching todos:', err);

        res.status(500).json({error: 'Error fetching todos'});
    }

});

TodoRouter.delete('/api/dashboard/:id', authToken, async (req, res) => {

    const { id } = req.params;

    console.log('Deleting task with ID:', req.params.id);

    try {
      const todo = await Todo.findByIdAndDelete(id);
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      res.json({ message: 'Task deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error deleting task' });
    }
  });
  





export default TodoRouter;