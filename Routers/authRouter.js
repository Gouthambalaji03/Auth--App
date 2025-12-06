import express from 'express';
import { loginUser, registerUser, getUser } from '../Controllers/userController.js';
import { authMiddleware } from '../Middleware/authMiddleware.js';
import { adminMiddleware } from '../Middleware/adminMiddleware.js';

const router = express.Router();

router.post("/register", registerUser )
router.post("/login", loginUser)
router.get("/getuser",authMiddleware, adminMiddleware, getUser)


export default router;