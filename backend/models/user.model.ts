import mongoose from "mongoose";

interface User {
  username: string;
  email: string;
  password: string;
  profile?: string;
}

const userSchema = new mongoose.Schema(
  {
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
    profile: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
