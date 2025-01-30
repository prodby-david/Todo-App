import jwt from 'jsonwebtoken';

const authToken = (req,res,next) => {

    console.log('Cookies: ', req.cookies); 

    const token = req.cookies.token;

    if(!token){
        return res.status(403).json({message: 'No token provided. Authorization denied.'});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
    
        next();
    }
    catch(err){
        return res.status(400).json({message: 'Invalid or expired token.'});
    }  
}

export default authToken;