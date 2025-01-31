import User from '../model/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
 
 const signInController = async (req,res) => {

    console.log('Received request:', req.body);

    const { email, password } = req.body;

    try{

        const user =  await User.findOne({ email });

        if(!user){
            return res.status(400).json({message: "Email doesn't exist."})
        }  
        
        const passwordMatch = await bcrypt.compare(password, user.password);
    
        if(!passwordMatch){
            return res.status(400).json({message: "Incorrect password."})
        }

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY, {expiresIn: '1h'})

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600000,
            sameSite: 'Strict'
        });

        console.log('Login: SUCCESS');
        
        return res.status(200).json({
            message: 'Login successful!',
            user: {
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
            },
        });

    }
    catch(err){
        console.error('Server error:', err);
        res.status(500).json({message: 'Please try again later.'});
    }

}

export default signInController;