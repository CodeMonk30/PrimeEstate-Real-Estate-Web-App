import express from 'express'
import { login, logout, register } from '../controllers/auth.controller.js';

const router = express.Router()
//this file for handling 3 post requests to 3 authorization urls
//the callback function are imp frm auth.controller file fr neatness
router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)


export default router;
