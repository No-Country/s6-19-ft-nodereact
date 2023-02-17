import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Document, ObjectId } from "mongoose";
import User from "../models/user.model";

interface IPayload extends Request {
  id: string;
  iat: number;
  exp: number;
}

interface RequestUserId extends Request {
  user: any;
}

const verifyToken = async (
  req: RequestUserId,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(400).send({ error: "Debes tener un token" });
    }

    const { id } = jwt.verify(token, `${process.env.JWT_KEY}`) as IPayload;
    const authenticatedUser = await User.findById(id);
    req.user = authenticatedUser;

    next();
  } catch (error) {
    res.status(500).send(error);
  }
};

export default verifyToken;
