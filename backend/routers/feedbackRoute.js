import express from 'express';
import authToken from '../middleware/authToken.js';
import Feedback from '../model/feedback.js';

const feedbackRouter = express.Router();


feedbackRouter.post('/api/user-feedback-form', authToken, async (req, res) => {

    try{

        const { rating, comment } = req.body;
        const userId = req.user.userId;

        if(!rating || !comment){
            return res.status(400).json({message: 'Rating and comment are required.'});
        }

        const userFeedback = new Feedback({
            userId,
            rating,
            comment
        });

        await userFeedback.save();

        res.status(201).json({message: 'Feedback submitted successfully.'});
    }catch(error){
        console.error('Error submitting feedback:', error);
        res.status(500).json({error: 'Server error'});
    }

});

feedbackRouter.get('/api/feedback-dashboard', async (req, res) => {
    try {
      const feedbacks = await Feedback.find().populate('userId', 'firstname lastname '); 
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching feedbacks' });
    }
  });

export default feedbackRouter;