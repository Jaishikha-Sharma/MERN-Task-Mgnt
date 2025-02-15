import express from "express";
import { isAdminRoute, protectRoute } from "../middlewares/authMiddleware.js";
import {
  registerUser,
  loginUser,
  logoutUser,
  getTeamList,
  getNotificationsList,
  updateUserProfile,
  markNotificationRead,
  activeUserProfile,
  deleteUserProfile
//   changeUserPassword
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.get("/get-team", protectRoute, isAdminRoute, getTeamList);
router.get("/notification" , protectRoute , getNotificationsList);

router.put("/profile" , protectRoute , updateUserProfile);
router.put("/read-noti" , protectRoute , markNotificationRead);
// router.put("/change-[assword" , protectRoute , changeUserPassword);

router
.route("/:id")
.put(protectRoute , isAdminRoute , activeUserProfile)
.delete(protectRoute,isAdminRoute , deleteUserProfile);

export default router;
