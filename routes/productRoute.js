import express from "express";
import {
  createProduct,
  fetchAllProducts,
} from "../controllers/productController.js";
const router = express.Router();
router.post("/createProduct", createProduct);
router.get("/fetchAllProducts", fetchAllProducts);
export default router;
