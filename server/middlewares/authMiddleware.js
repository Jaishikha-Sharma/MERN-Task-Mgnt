import jwt from "jsonwebtoken";
import User from "../models/user.js";

const protectRoute = async (req, res, next) => {
  try {
    let token = res.cookie.token;
    if (token) {
      const decodedToken = jwt.verify(token, process.env.JWT_SECERT);
      const resp = await User.findById(decodedToken.userId).select(
        "isAdmin email"
      );
      req.User = {
        email: resp.email,
        isAdmin: resp.isAdmin,
        userId: decodedToken.userId,
      };
      next();
    }
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ status: false, message: "Not authorized,Try again" });
  }
};

const isAdminRoute = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.status(401).json({
      status: false,
      message: "Not authorized,Try again",
    });
  }
};
export {isAdminRoute , protectRoute};
