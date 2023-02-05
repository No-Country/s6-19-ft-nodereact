import { FilterQuery } from "mongoose";
import User from "../models/user.model";

const userIdExist = async (id: string) => {
  const user = (await User.findById(id)) as FilterQuery<User>;

  if (!user) {
    throw new Error(`El id no es valido o no existe`);
  }
};

export { userIdExist };
