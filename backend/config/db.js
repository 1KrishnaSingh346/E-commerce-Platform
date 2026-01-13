import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.MONGODB_URL;
const connectDB = async () =>{
     try{
        await mongoose.connect(URL);
        console.log("MongoDB connected successfully");
     }catch(err){
        console.error("MongoDB connection failed:", err);
     }
}

export default connectDB;
