import { Request, Response } from "express";
import Cart from "../models/cart.model";
import User from "../models/user.model";
import Product from "../models/product.model";
import { ObjectId, Schema } from "mongoose";

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

    if (!cart) {
      return res.status(400).json({
        msg: "This user does not have a cart yet",
      });
    }

    res.status(200).send(cart);
  } catch (error) {
    res.status(501).send(error);
  }
};
interface QueryObject {
  item?: any;
  quantity?: number;
  total?: number;
}

const addProductToCart = async (req: UserRequest, res: Response) => {
  try {
    const owner = req.user._id;
    const { product, quantity } = req.body;

    //   const user = await User.findById(owner)

    let object: QueryObject = {};

    let items: QueryObject[] = [];

    const [cart, user, foundProduct] = await Promise.all([
      await Cart.findOne({ owner }).populate({
        path: "items",
        populate: {
          path: "item",
        },
      }),
      await User.findById(owner),
      await Product.findById(product),
    ]);

    if (cart) {
      const duplicatedProduct = cart.items.find((product) => {
        return foundProduct.id === product.item.id;
      });
      if (duplicatedProduct) {
        duplicatedProduct.quantity += quantity;
        duplicatedProduct.total =
          duplicatedProduct.total + duplicatedProduct.item.price;

        let cartTotal = 0;

        cart.items.forEach((item) => {
          cartTotal += item.total;
        });

        cart.subTotal = cartTotal;
        cart.totalQty += quantity;
      }

      await cart.save();

      res.status(401).send(cart);
    } else {
      object.item = foundProduct._id;
      object.quantity = quantity;
      object.total = foundProduct.price * quantity;

      items.push(object);
      let subTotal = 0;

      items.forEach((item) => {
        subTotal = subTotal + item.total;
      });

      let totalQty = 0;

      items.forEach((item) => {
        totalQty = totalQty + item.quantity;
      });

      const newCart = new Cart({
        owner,
        items,
        subTotal,
        totalQty,
      });
      const savedCart = await newCart.save();

      user.cart = savedCart._id;

      await user.save();

      return res.status(200).json({
        savedCart,
      });
    }
  } catch (error) {
    console.log("errror");
    res.status(501).send(error);
  }
};

const updateProductQty = async (req: UserRequest, res: Response) => {
  try {
    const owner = req.user._id;
    const { id } = req.params;
    const { value } = req.body;

    const [cart, product] = await Promise.all([
      await Cart.findOne({ owner }).populate({
        path: "items",
        populate: {
          path: "item",
        },
      }),
      await Product.findById(id),
    ]);
    const findProduct = cart.items.find((item) => {
      return product.id === item.item.id;
    });

    if (value == "asc") {
      findProduct.quantity += 1;
      findProduct.total += findProduct.item.price;

      let cartTotal = 0;

      cart.items.forEach((item) => {
        cartTotal += item.total;
      });

      cart.subTotal = cartTotal;
      cart.totalQty += 1;
    } else {
      findProduct.quantity -= 1;
      findProduct.total -= findProduct.item.price;

      cart.subTotal -= findProduct.item.price;
      cart.totalQty -= 1;

      if (findProduct.quantity === 0) {
        console.log("el producto llego a 0");
        const newArray = cart.items.filter((item) => {
          return findProduct.item.id !== item.item.id;
        });

        cart.items = newArray;
      }
    }

    await cart.save();

    res.status(200).send({ msg: "Product Updated" });
  } catch (error) {
    console.log(error);
    res.status(501).send(error);
  }
};

export { getCart, addProductToCart, updateProductQty };
