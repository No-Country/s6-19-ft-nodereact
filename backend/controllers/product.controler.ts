import { Request, Response } from "express";
import cloudinary from "../config/cloudinary";
import Product from "../models/product.model";
import User from "../models/user.model";

interface RequestFiles extends Request {
  user: any;
  files: any;
}

const createProduct = async (req: RequestFiles, res: Response) => {
  let { title, category, stock, description, price } = req.body;

  const { _id } = req.user;
  const { picture } = req.files;

  try {
    const [userInDb, productInDb] = await Promise.all([
      await User.findById(_id),
      await Product.findOne({ title }),
    ]);

    price = parseInt(price);
    stock = parseInt(stock);

    console.log(price);

    if (productInDb) {
      return res.status(400).json({
        msg: `Product ${title} already exist`,
      });
    }

    if (picture) {
      const { tempFilePath } = req.files.picture;

      const { secure_url } = await cloudinary.uploader.upload(tempFilePath);

      if (secure_url) {
        const product = new Product({
          title,
          price,
          stock,
          category,
          description,
          img: secure_url,
          owner: _id,
        });

        const savedProduct = await product.save();

        // userInDB.products.push(savedProduct._id);

        await userInDb.save();

        res.status(200).json(savedProduct);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
    });
  }
};

export { createProduct };
