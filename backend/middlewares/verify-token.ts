import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface IPayload extends Request {
  _id: string;
  iat: number;
  exp: number;
}

interface RequestUserId extends Request {
  userId: string;
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

    const payload = jwt.verify(token, `${process.env.JWT_KEY}`) as IPayload;
    req.userId = payload._id;

    next();
  } catch (error) {
    res.status(500).send(error);
  }
};

export default verifyToken;
