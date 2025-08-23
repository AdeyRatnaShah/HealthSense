import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';


const protect = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Not authorized, token missing" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) return res.status(401).json({ message: "Not authorized, token invalid" });

        req.user = await User.findById(decoded.user.id)
            .select("-password")
            .select("-userVitals");

        next();
    } catch (error) {
        res.status(401).json({ message: "Token is not valid" });
    }
};

export default protect;
