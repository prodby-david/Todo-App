import express from 'express';
import signInController from '../controller/signInController.js';


const signInRouter = express.Router();

signInRouter.post('/api/signin', signInController);

export default signInRouter;