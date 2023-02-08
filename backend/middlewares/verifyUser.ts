import { NextFunction, Request, Response } from "express";
import { FilterQuery } from "mongoose";
import User from "../models/user.model";

const userIdExist = async (id: string) => {
  const user = (await User.findById(id)) as FilterQuery<User>;

  if (!user) {
    throw new Error(`El id no es valido o no existe`);
  }
};

export { userIdExist };

export async function verifyUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { username } = req.method == "GET" ? req.query : req.body;

    // check the user existance
    let exist = await User.findOne({ username });
    if (!exist)
      return res
        .status(404)
        .send({ error: "No se pudo encontrar este usuario" });
    next();
  } catch (error) {
    return res.status(404).send({ error: "Error de autenticacion" });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> backend-dev
