import express from 'express';
import signUpController from '../controller/signUpController.js';

const signUpRouter = express.Router();

signUpRouter.post('/api/signup', signUpController );

export default signUpRouter;