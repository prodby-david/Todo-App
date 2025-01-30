import User from '../model/user.js'

const signUpController =  async (req, res) => {

    const {lastname, firstname, email, password} = req.body;
 
    try{
         let findEmail = await User.findOne({email});

         if(findEmail){
             return res.status(400).json({message: 'Email already exists.'});
         }

         let newUser = new User({lastname, firstname , email, password});
         
         await newUser.save();

         res.status(200).json({message: 'Registered successfully.'});
 
    }catch(err){
         res.status(500).json({message: 'Server internal error.'});
    }
    
 }

 export default signUpController;