import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    await mongoose.connect(`${process.env.MONGOCNN}`);
    console.log("base de datos conectada ");
  } catch (error) {
    console.log(error);
  }
};

export default connectDatabase;
