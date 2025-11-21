import express from 'express';
import { getAllUsers, getUserProfile, loginUser, registerUser, sendOtp, updateUserProfile, verifyOtp } from '../Controllers/userControllers';
import { admin } from '../Middlewares/userAuth';


const userRouter = express.Router();

// Public routes
userRouter.post('/send-otp', sendOtp);
userRouter.post('/verify-otp', verifyOtp);
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

// Protected routes
userRouter.get('/profile', protect, getUserProfile);
userRouter.put('/profile', protect, updateUserProfile);

// Admin routes
userRouter.get('/all', protect, admin, getAllUsers);

export default userRouter;