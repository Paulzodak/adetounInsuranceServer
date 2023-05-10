import mongoose from "mongoose";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import adminUser from "../models/adminUser.js";
export const signup = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  console.log("initiated");
  const password = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    password: password,
  });
  try {
    await user.save();
    res.status(201).json(user);
    // console.log(user);
  } catch (error) {
    res.status(409).json({
      error: error.message,
    });
    // console.log(error);
  }
};
export const login = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  // const password = await bcrypt.hash(req.body.password, 10);
  // console.log(req.body);
  const user = await User.findOne({
    email: req.body.email,
    // password: req.body.password,
  });
  if (user) {
    // console.log(user);
    // console.log(req.body.password);
    const passwordIsValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (passwordIsValid) {
      const token = jwt.sign(
        {
          fullname: user.fullname,
          password: passwordIsValid,
          email: user.email,
          imageUrl: user.imageUrl,
        },
        "secretadgjl13579"
      );
      // console.log(token);

      return res.status(201).json({ status: "ok", user: token });
    } else {
      return res
        .status(400)
        .json({ status: "error", body: "password incorrect" });
    }
  } else {
    // res.status(409).json({ message: "invalid" });
    return res.status(400).json({ status: "error", body: "Error" });
  }
};
//

export const adminSignup = async (req, res) => {
  // console.log("initiated");
  const password = await bcrypt.hash(req.body.password, 10);
  const user = new adminUser({
    fullname: req.body.fullname,
    email: req.body.email,
    password: password,
  });
  try {
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(409).json({
      error: error.message,
    });
  }
};
export const adminLogin = async (req, res) => {
  // const password = await bcrypt.hash(req.body.password, 10);
  // console.log(req.body);
  const user = await adminUser.findOne({
    email: req.body.email,
    // password: req.body.password,
  });
  if (user) {
    // console.log(user);
    // console.log(req.body.password);
    const passwordIsValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (passwordIsValid) {
      const token = jwt.sign(
        {
          fullname: user.fullname,
          password: passwordIsValid,
          email: user.email,
          imageUrl: user.imageUrl,
        },
        "secretadgjl13579"
      );
      // console.log(token);

      return res.json({ status: "ok", user: token });
    }
  } else {
    res.json({ status: "error", user: false, body: "password incorrect" });
  }
};
