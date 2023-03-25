import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers
} from "../controllers/userController.js";
import { protect ,admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", authUser);
router.route('/').post(registerUser).get(protect, admin, getUsers)
router.route("/profile").get(protect, getUserProfile);
router.route("/profile").put(protect, updateUserProfile);
export default router;
