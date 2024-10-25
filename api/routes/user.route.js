//this is not related to the application , its just a express js thru prisma CRUD tutorial
import express from 'express'
import { deleteUser, getUser, updateUser, getUsers ,savePost, profilePosts} from '../controllers/user.controller.js';
import {verifyToken} from '../middleware/verifyToken.js'
const router = express.Router()
//this file for handling 3 post requests to 3 authorization urls
//the callback function are imp frm auth.controller file fr neatness
//getting a info abt specific user or accessing deleting or updating right would be possible after authenticating token using middleware called "verifyToken"
router.get("/",getUsers)
router.put("/:id", verifyToken,updateUser)
router.delete("/:id", verifyToken,deleteUser)
router.post("/save", verifyToken, savePost)
router.get("/profilePosts", verifyToken, profilePosts) 


export default router;
