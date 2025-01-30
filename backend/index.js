import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import signUpRouter from './routers/signupAuth.js';
import signInRouter from './routers/signInAuth.js';
import cookieParser from 'cookie-parser';
import TodoRouter from './routers/todoRoute.js';


const app = express();
app.use(cookieParser());
dotenv.config();

app.use(cors({ 
    origin: 'http://localhost:5173',
    credentials: true
 }));
 
app.use(express.json());
app.use(signUpRouter);
app.use(signInRouter);
app.use(TodoRouter);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT: ${process.env.PORT}`);
    connectDB();
});