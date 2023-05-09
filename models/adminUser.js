import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const db1 = mongoose.createConnection(
  "mongodb+srv://zodak:asdfg12345@cluster1.xvcohk9.mongodb.net/Admin-User?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const adminUser = db1.model("user", userSchema);
export default adminUser;
