import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoute.js";
import userRoutes from "./routes/userRoute.js";
import productRoutes from "./routes/productRoute.js";
import multer from "multer";
const app = express();
dotenv.config();
app.use(express.json({ extended: true }));
app.use(express.json({ urlencoded: true }));
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.get("/api", (req, res) => {
  res.send("Welcome to server");
});
const PORT = process.env.PORT || 5000;
mongoose
  .connect(
    `mongodb+srv://zodak:adetoun1234@cluster1.bes5zxp.mongodb.net/User-Data?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(PORT, () => {
      console.log("server started");
    })
  )
  .catch((err) => console.log(err));
