import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import generateToken from "../helpers/generateToken";

const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(404)
        .send({ error: `${username} no es un usuario registrado` });
    }

    // Comparo si la contraseña  es igual a la contraseña encryptada en la base de datos

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(404).send({ error: "La contraseña es incorrecta" });
    }

    // genero el jwt token

    const token = generateToken(user.id);

    res.status(201).json({
      msg: "Usuario logeado con exito",
      username,
      token,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password, profile } = req.body;

    const [existUser, existEmail] = await Promise.all([
      await User.findOne({ username }),
      await User.findOne({ email }),
    ]);

    if (existUser) {
      return res.status(401).send({ error: "Este usuario ya existe" });
    }

    if (existEmail) {
      return res.status(401).send({ error: "Este email ya esta en uso" });
    }

    // Encripto la contraseña para guardarla en la db

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = new User({
      username,
      email,
      password: hash,
      profile,
    });

    await user.save();

    res.status(201).json({
      msg: "Usuario registrado con exito",
      user,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export { login, register };
