const mongoose = require("mongoose");
const Schema =mongoose.Schema
const collectionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  createAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});
const Collection =
  mongoose.models.Collection || mongoose.model("Collection", collectionSchema);
module.exports = Collection;
