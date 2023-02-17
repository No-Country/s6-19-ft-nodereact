import { Request, Response } from "express";
import Cart from "../models/cart.model";
import User from "../models/user.model";
import Product from "../models/product.model";

interface UserRequest extends Request {
  user: any;
}

const getCart = async (req: UserRequest, res: Response) => {
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

const addProductToCart = async (req: UserRequest, res: Response) => {
  try {
    const owner = req.user._id;
    const { product, quantity } = req.body;

    const cart = await Cart.findOne({ owner }).populate({
      path: "items",
      populate: {
        path: "item",
      },
    });

    const foundProduct = await Product.findById(product);

    console.log(foundProduct);

    //   const user = await User.findById(owner)

    console.log(owner);

    // const [cart, user] = await Promise.all([
    //   await Cart.findOne({ owner }).populate({
    //     path: "items",
    //     populate: {
    //       path: "item",
    //     },
    //   }),
    //   await User.findById(owner),
    // ]);

    if (cart) {
      res.status(401).send(cart);
    } else {
      res.status(401).send({ msg: "no se encontro un carrito" });
    }
  } catch (error) {
    console.log("errror");
    res.status(501).send(error);
  }
};

export { getCart, addProductToCart };
