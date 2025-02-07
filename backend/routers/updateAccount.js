import express from 'express';
import User from '../model/user.js';
import bcrypt from 'bcryptjs';

const UpdateAccount = express.Router();


UpdateAccount.put('/api/account', async (req, res) => {

    const { userId, field, value } = req.body;

    if(!userId){
       return res.status(400).json({message: 'Unknown user. Try again'});
    }

    try {

        const updatedData = {[field] : value};

        if (field === 'password') {
            const saltRounds = 10;
            updatedData.password = await bcrypt.hash(value, saltRounds);
        } else {
            updatedData[field] = value;
        }
        

        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ ok: true, updatedUser });


    } catch(err){
        console.error('Unexpected error occured.', err);
        res.status(500).json({message: 'An error occured while updating.'});
    }


});

export default UpdateAccount;