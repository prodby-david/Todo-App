import mongoose from 'mongoose';


const feedbackSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rating: {
        type: Number, min: 1, max: 5,
        required: true
    },
    comment:{
        type: String,
        maxlength: 100,
        required: true
    }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback; 