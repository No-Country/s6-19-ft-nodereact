import Cart from "../models/cart.model";
import User from "../models/user.model";

const getCart = async (req, res) => {
  try {
    const { _id } = req.user;

    const cart = await Cart.findOne({ owner: _id }).populate({
      path: "items",
      populate: {
        path: "item",
      },
    });

    res.status(200).send(cart);
  } catch (error) {
    res.status(501).send(error);
  }
};
