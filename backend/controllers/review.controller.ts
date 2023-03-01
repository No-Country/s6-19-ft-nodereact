import { Request, Response } from "express";
import Product from "../models/product.model";
import Review from "../models/review.model";
import User from "../models/user.model";
import UserRequest from "../types";

const getAllReviewsFromProduct = async (req: UserRequest, res: Response) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id).populate({
      path: "reviews",
      populate: "commentedBy",
    });

    console.log(product);

    res.status(200).send({ data: product.reviews });
  } catch (error) {
    res.status(500).send(error);
  }
};

const createReview = async (req: UserRequest, res: Response) => {
  try {
    const { _id } = req.user;

    const { productId, comment, rating } = req.body;

    const [user, product] = await Promise.all([
      await User.findById(_id),
      await Product.findById(productId).populate({
        path: "reviews",
        populate: "commentedBy",
      }),
    ]);

    const newReview = new Review({
      comment,
      rating,
      commentedBy: user.id,
    });

    await newReview.save();

    product.reviews.push(newReview._id);

    await product.save();

    res.status(200).send(newReview);
  } catch (error) {
    res.status(500).send(error);
  }
};

type ObjectReview = {
  comment?: string;
  rating?: number;
};

const updateReview = async (req: UserRequest, res: Response) => {
  try {
    const { id } = req.params;

    const { comment, rating } = req.body;

    let obj: ObjectReview = {};

    if (comment) {
      obj.comment = comment;
    }
    if (rating) {
      obj.rating = rating;
    }

    const review = await Review.findByIdAndUpdate(id, obj, {
      new: true,
    });

    if (!review) {
      return res.status(400).send({ msg: "No se encontro un comentario" });
    }

    res.status(200).send(review);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteReview = async (req: UserRequest, res: Response) => {
  try {
    const { id } = req.params;

    const review = await Review.findByIdAndDelete(id);

    if (!review) {
      return res.status(400).send({ msg: "No se encontro un comentario" });
    }

    res.status(200).send({ msg: "Comentario borrado exitosamente" });
  } catch (error) {
    res.status(500).send(error);
  }
};

export { createReview, updateReview, deleteReview, getAllReviewsFromProduct };
