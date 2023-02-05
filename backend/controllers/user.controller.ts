import { Request, Response } from "express";
import User from "../models/user.model";

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(400).send({ error: "Este usuario no existe" });
    }

    if (!user.state) {
      return res.status(401).send({ error: "Este usuario ya no esta activo" });
    }

    const { password, ...rest } = user._doc;

    res.status(201).send(rest);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({ state: true });

    if (!users) {
      return res.status(404).send({ error: "No se encontraron usuarios" });
    }

    res.status(201).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const user = await User.findByIdAndUpdate(id, body, { new: true });

    if (!user) {
      return res.status(400).send({ error: "Este usuario no existe" });
    }

    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, {
      state: false,
    });

    if (!user) {
      return res.status(400).send({ error: "Este usuario no existe" });
    }

    res.status(201).send({ msg: "Usuario borrado  con exito" });
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getUser, updateUser, deleteUser, getAllUsers };
