import { model, Schema } from "mongoose";

const CartSchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    items: [
      {
        item: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          required: true,
        },
        total: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
    subTotal: {
      type: Number,
      default: 0,
    },
    totalQty: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const Cart = model("Cart", CartSchema);

export default Cart;
