import User from "../models/user.js";
import { generateToken } from "../utils/token.js";

export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = new User({ name, email, password, role });
        await user.save();  
        const token = generateToken(user);
        res.status(201).json({ token });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }       
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = generateToken(user);
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json({ message: "Server error" });
    }   
};

export const logout = async (req, res) => {
    // For JWT, logout can be handled on client side by deleting the token
    res.status(200).json({ message: "Logged out successfully" });
}
