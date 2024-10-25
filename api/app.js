import express from 'express';
import postRoute from './routes/post.route.js';
import authRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from "cors";
import testRoute from './routes/test.route.js'
import userRoute from './routes/user.route.js'


const app = express()
app.use(cors({origin: process.env.CLIENT_URL, credentials: true})) //allows client-side app to make CORS req to server-side app and include Auth header and cookies in req
app.use(express.json())
app.use(cookieParser())

app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/auth",authRoute)
app.use("/api/test",testRoute)

app.listen(9000, () =>{
    console.log("server running");
})