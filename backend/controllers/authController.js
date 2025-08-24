import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import UserVitals from '../models/userVitalsModel.js';

const login = async (req, res) => {
    const { email, password } = req.body;
    // Here you would typically check the credentials against a database
    try {
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all fields" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        // Create a payload with user information
        const payload = {
            user: { id: user._id }
        };

        // Sign and return the token along with user data
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "40h" }, (err, token) => {
            if (err) throw err;

            // Send the user token along with user data
            res.status(201).json({
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                },
                token
            });
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
}
const signup = async (req, res) => {
    const { name, email, password } = req.body;
    // Here you would typically check the credentials against a database
    try {
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please fill all fields" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = new User({
            name,
            email,
            password
        });

        await user.save();
        // Create a payload with user information
        const payload = {
            user: { id: user._id }
        };
        // Sign and return the token along with user data
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "40h" }, (err, token) => {
            if (err) throw err;

            // Send the user token along with user data
            res.status(201).json({
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                },

                token
            });
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
}

const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        const userVitals = await UserVitals.findOne({ userId: user._id });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({
            user,
            userVitals,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
};

export {
    login,
    signup,
    getProfile
};