const mongoose = require("mongoose");
const Schema=mongoose.Schema
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: [
    {
      type: String,
      required: true,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  description: { type: String },
  tags: [{ type: String }],
  collections: [{ type: Schema.Types.ObjectId, ref: 'Collection' }],
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },

});
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
module.exports = Product;
