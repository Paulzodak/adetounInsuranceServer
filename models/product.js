import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productCategory: {
      type: String,
      required: true,
    },
    productBrand: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productPurpose: {
      type: String,
      required: true,
    },
    productDou: {
      type: String,
      required: true,
    },
    productIngredients: {
      type: String,
      required: true,
    },
    productImages: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const db = mongoose.createConnection(
  "mongodb+srv://zodak:asdfg12345@cluster1.xvcohk9.mongodb.net/Products?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const Product = db.model("product", productSchema);
export default Product;
