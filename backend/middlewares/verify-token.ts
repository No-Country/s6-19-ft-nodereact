import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface RequestUser extends Request {
  user: any;
}

const verifyToken = async (
  req: RequestUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(400).send({ error: "Debes tener un token" });
    }

    const payload = jwt.verify(token, `${process.env.JWT_KEY}`);
    req.user = payload;

    next();
  } catch (error) {
    res.status(500).send(error);
  }
};

export { verifyToken };
