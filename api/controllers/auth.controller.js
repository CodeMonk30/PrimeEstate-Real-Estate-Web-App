import bcrypt from 'bcrypt'
import prisma from '../lib/prisma.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res)=>{
   //we will test this by posting a json data to /api/auth/register
   //that data will be hence stored in req.body console.log(req.body);
   //so we destructure it

   const {username, email, password} = req.body;

   try{
   //hash pass which returns a promise to it becomes async code and we put await if front of hash func
   const hashPassword = await bcrypt.hash(password, 10)
    //console.log(hashPassword)
    //creating new 'user' record
    const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password:  hashPassword
        },
    });

    console.log(newUser);
    res.status(201).json({message: "User created successfully"})
}catch(err){
        res.status(500).json({message: "Failed to create user"})
    }
}


export const login = async (req, res)=>{
    const {username, password} = req.body;
    try{
        //check user exists or not
        const user = await prisma.user.findUnique({where: {username:username}})
        if (!user){
            return res.status(401).json({message: "Invalid Credentials"});
         }

        //check pass is correct
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) return res.status(401).json({message: "Invalid Credentials"});

        const age = 1000*60*60*24*7; //for 7 days

        //sending jwt token ins. of cookie as its more secure
        const token = jwt.sign({
            id:user.id,
            isAdmin: false
        },process.env.JWT_SECRET_KEY, {expiresIn: age}) //u need to pass env file as flag in console ninja cmd to access it, this token will exp in 7 days so change it ok

        // res.setHeader("Set-Cookie", "test="+"myValue").json("success")
        const  {password:userPassword, ...userInfo} = user; //just eliminating password from the rest of the user Info we send during login response for security
        
         res.cookie("token", token,
            {
                httpOnly:true, //cookie cant be accessed by client-side js
                //secure: true - this can be set fr https only
                maxAge: age //age of cookie can be set if don't want it to expire as soon as the session ends view cookie age in cookie section of postman after post request to login
            }   
         ).status(200).json(userInfo)
    }catch(err){
        console.log(err)
        res.status(500).json({message :"Failed to login"});
    }
}

export const logout = (req, res)=>{
    res.clearCookie("token").status(200).json({message:"Logout Successful"})
}
