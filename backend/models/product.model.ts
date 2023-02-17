import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  stock: {
    type: Number,
    require: true,
    default: 1
  },
  category: {
    type: String,
    require: true
  },
  img: {
    type: String,
  },
  rating: {
    type: Number,
    default:0
  },
  reviews: {
    type: Schema.Types.ObjectId,
    ref: 'Review'
  },
  boughtBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
}, { timestamps: true })

const Product = model('Product', ProductSchema)
export default Product

