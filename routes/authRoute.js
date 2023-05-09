import express from "express";
import {
  signup,
  login,
  adminLogin,
  adminSignup,
} from "../controllers/authController.js";
import { updateProfilePicture } from "../controllers/userController.js";
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/admin/login", adminLogin);
router.post("/admin/signup", adminSignup);

// router.post("/", createTodos);
// router.patch("/:id", updateTodo);
// router.delete("/:id", deleteTodo);
export default router;
