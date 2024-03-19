// models/User.js
import mongoose from "mongoose";

//schema design 
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const adminSchema = new mongoose.Schema({
  email:{ type: String, required: true, unique: true },
  password: { type: String, required: true},
});

module.exports = mongoose.model('User', userSchema);