import mongoose from "mongoose";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { iCloudinary } from "../utils/cloudinary.js";

export const updateProfilePicture = async (req, res) => {
  const imageUrl = req.body.imageUrl;
  console.log(req.body);
  const user = await User.findOneAndUpdate(
    {
      email: req.body.email,
    },
    { $set: { imageUrl: imageUrl } },
    { returnOriginal: false }
  );
  if (user) {
    return res.json({ status: "ok", user: user });
  } else {
    res.json({ status: "error", user: false, body: "Error" });
  }
};

export const updateProfile = async (req, res) => {
  const username = req.body.username;
  const profession = req.body.profession;
  const location = req.body.location;
  const bio = req.body.bio;
  console.log(req.body);
  const user = await User.findOneAndUpdate(
    {
      email: req.body.email,
    },
    {
      $set: {
        username: username,
        profession: profession,
        location: location,
        bio: bio,
      },
    },
    { returnOriginal: false }
  );
  if (user) {
    return res.json({ status: "ok", user: user });
  } else {
    res.json({ status: "error", user: false, body: "Error" });
  }
};
