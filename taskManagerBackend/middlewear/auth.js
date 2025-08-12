import jwt from 'jsonwebtoken';
import User from '../models/userModel.js'

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_here'

export default async function authMiddlewear(req, res, next) {
    // GRAB THE BEARER TOKEN FROM AUTHORIZATION HEADER
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res
            .status(401)
            .json({ success: false, message: "Not Authorized, taken missing" })
    }

    const token = authHeader.split(' ')[1];

    // VERIFY & ATTACH USER OBJECT
    try {
        const playload = jwt.verify(token, JWT_SECRET)
        const user = await User.findById(playload.id).select('-password')

        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" })
        }

        req.user = user
        next()
    }
    catch (err) {
        console.log("JWT verification failed", err)
        return res.status(401).json({ success: false, message: "Token invalid or expired" })
    }
}