import express from 'express'
import { getCurrentUser, registerUser, updatePassword, updateProfile, userLogin } from '../controllers/userController.js'
import authMiddlewear from '../middlewear/auth.js';


const userRouter = express.Router();

// PUBLIC LINKS

userRouter.post('/register', registerUser);
userRouter.post('/login', userLogin);

// PRIVATE LINKSA PROTECT ALSO
userRouter.get('/me', authMiddlewear, getCurrentUser);
userRouter.put('/profile', authMiddlewear, updateProfile);
userRouter.put('/password', authMiddlewear, updatePassword);

export default userRouter;