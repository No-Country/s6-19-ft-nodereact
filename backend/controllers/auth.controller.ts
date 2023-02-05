import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import generateToken from "../helpers/generateToken";
import otpGenerator from "otp-generator";

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

interface Options {}

const generateOTP = async (req: Request, res: Response) => {
  req.app.locals.OTP = await otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  res.status(201).send({ code: req.app.locals.OTP });
};

const verifyOTP = (req: Request, res: Response) => {
  const { code }: any = req.query;
  if (parseInt(req.app.locals.OTP) === parseInt(code)) {
    req.app.locals.OTP = null;
    req.app.locals.resetSession = true;
    return res.status(200).send({ msg: "Verificaion exitosa" });
  }
  return res.status(400).send({ error: "Codigo de verificacion invalido" });
};

const createResetSession = async (req: Request, res: Response) => {
  if (req.app.locals.resetSession) {
    req.app.locals.resetSession = false;
    return res.status(201).send({ msg: "Acceso permitido" });
  }
  return res.status(440).send({ error: "La sesion expiro" });
};

const resetPassword = async (req: Request, res: Response) => {
  try {
    if (!req.app.locals.resetSession) {
      return res.status(440).send({ error: "La sesion expiro" });
    }
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).send({ error: "No se encontro el usuario" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    await User.findOneAndUpdate({ username }, { password: hash });

    req.app.locals.resetSession = false;
    return res.status(201).send({ msg: "Contraseña actualizada con existo" });
  } catch (error) {
    return res.status(401).send({ error });
  }
};

export {
  login,
  register,
  generateOTP,
  verifyOTP,
  createResetSession,
  resetPassword,
};
