import bcrypt from "bcryptjs";
import { Type } from "lucide-react";
import mongoose, { Schema, Types } from "mongoose";
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    isAdmin: { type: Schema, Types: ObjectId, ref: "Task" },
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

userSchema.pre('Save' , async function (next) {
    if (!this.isModified('Password')){
        next();
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt(this.password , salt);
});

userSchema.method.matchPassword = async function (enterdPassword) {
    return await bcrypt.compare(enterdPassword , this.password);
};

const User = mongoose.model('User', userSchema);
export default User;