import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Please add a username'],
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please add a password'],
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },
        token: {
            type: String,
        }
    },
);




const User = mongoose.model("User", userSchema);

export default User;