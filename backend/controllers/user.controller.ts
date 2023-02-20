import { UploadApiResponse } from "cloudinary";
import { Request, Response } from "express";
import cloudinary from "../config/cloudinary";
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

interface RequestFile extends Request {
  files: any;
}

type Query = {
  username?: string;
  email?: string;
  profile?: UploadApiResponse;
};

const updateUser = async (req: RequestFile, res: Response) => {
  try {
    const { id } = req.params;
    const { username, email } = req.body;
    const picture = req.files;
    console.log(picture);

    const query: Query = {};

    if (username) {
      query.username = username;
    }
    if (email) {
      query.email = email;
    }

    const user = await User.findByIdAndUpdate(id, query, { new: true });
    if (!user) {
      return res.status(400).send({ error: "Este usuario no existe" });
    }

    if (picture) {
      if (user.picture) {
        const imgArray = user.picture.split("/");
        const name = imgArray[imgArray.length - 1];
        const [public_id] = name.split(".");

        cloudinary.uploader.destroy(public_id);
      }
      const { tempFilePath } = req.files.picture;
      const { secure_url } = await cloudinary.uploader.upload(tempFilePath);

      user.picture = secure_url;

      await user.save();
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
