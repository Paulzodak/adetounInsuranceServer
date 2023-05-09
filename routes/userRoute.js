import express from "express";
import {
  updateProfilePicture,
  updateProfile,
} from "../controllers/userController.js";
const router = express.Router();
router.post("/updateProfileImage", updateProfilePicture);
router.post("/updateProfile", updateProfile);
export default router;
