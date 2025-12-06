import express from 'express';
import { loginUser, registerUser, getUser } from '../Controllers/userController.js';
import { authMiddleware, adminMiddleware } from '../Middleware/authMiddleware.js';

const router = express.Router();

router.post("/register", registerUser )
router.post("/login", loginUser)
router.get("/getuser",authMiddleware, adminMiddleware, getUser)


export default router;