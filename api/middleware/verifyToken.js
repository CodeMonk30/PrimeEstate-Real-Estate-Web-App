import jwt from "jsonwebtoken"
//this func is basically Middleware/intercepting a process , verifying the token and allowing it to continue the next process
export const verifyToken = (req, res, next)=>{
    const token = req.cookies.token;

    if(!token) return res.status(401).json({message :"Not Authenticated!"})
   
   jwt.verify(token, process.env.JWT_SECRET_KEY, async(err,payload)=>{
       if(err) return res.status(403).json({message: "Token is not Valid!"})
        req.userId = payload.id; //return auth. user id for carrying out his auth. actions like deleting his posts or editing them, by comp the user id of the post with this logged in userid returned

       next(); //will run shouldbeLoggedIn or shouldbeAdmin
   })
}