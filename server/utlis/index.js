import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connection created!");
  } catch (error) {
    console.log("DB ERROR:" + error);
  }
};

export default dbConnection;

export const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECERT, {
    expiresIn: "1d",
  });
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite : "strick",
    maxAge : 1*24*60*60*1000,
  });
};
