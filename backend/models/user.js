import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    name : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:["admin","user", "seller"],
        default:"user"
    },

    // Seller specific fields
sellerInfo: {
    storeName: String,
    storeDescription: String,
    isApproved: {
        type: Boolean,
        default: false
    },
    approvalStatus:{
        type:String,
        enum:["pending","approved","rejected"],
        default:"pending"
    },
    approvalDate: {
        type: Date
    },
    rejectionReason: {
        type: String
    }
},

adminInfo: {
    permissions: {
        type: [String],
        default: ["manage_users", "approve_sellers", "view_analytics"]
    },

    lastLogin: Date
}
} ,{timestamps:true});

const User = mongoose.model("User", userSchema);
export default User;