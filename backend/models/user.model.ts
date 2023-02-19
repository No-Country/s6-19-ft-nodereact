import mongoose from "mongoose";

interface DocumentNode {
  _doc: any;
}

interface User extends DocumentNode {
  username: string;
  email: string;
  password: string;
  picture?: string;
  state: Boolean;
  isAdmin: Boolean;
}

const userSchema = new mongoose.Schema(
  {
    picture: {
      type: String,
    },
    username: {
      type: String,
      required: [true, "El nombre de usuario es obligatorio"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "El email es obligatorio"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
      unique: true,
    },
    cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    state: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

interface UserDocument extends Document {
  id: string;
  username: string;
  picture?: string;
  email: string;
  password: string;
  cart: any;
  isAdmin: boolean;
  state: boolean;
  _doc: any;
  createdAt: number;
}

const User = mongoose.model<UserDocument>("User", userSchema);
export default User;
