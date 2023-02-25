import mongoose from "mongoose";


interface DocumentNode {
  _doc: any;
}
interface FormContact extends DocumentNode {
  name: String,
  userName: String,
  email: String,
  message: String
}
const formContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true,'El nombre es obligatorio']
    },
    userName: {
      type: String,
      required: [true,'El nombre de usuario es obligatorio']
    },
    email: {
      type: String,
      required: [true,'El email es obligatorio' ]
    },
    message: {
      type: String,
      required: [true, 'El mensaje es obligatorio']
    },
  },
  { timestamps:true }
);

export default FormContact;