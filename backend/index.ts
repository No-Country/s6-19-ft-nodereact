import express from "express";
import cors from "cors";
import "dotenv/config.js";
import authRouter from "./routes/auth.route";
<<<<<<< HEAD
=======
import userRouter from "./routes/user.route";
import connectDataBase from "./config/mongoDB";

connectDataBase();
>>>>>>> backend-dev

const app = express();

const PORT = process.env.PORT || 5000;

// Middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes

app.use("/api/auth", authRouter);
<<<<<<< HEAD
=======
app.use("/api/user", userRouter);
>>>>>>> backend-dev

app.listen(PORT, () => {
  console.log(`Servidor escuchando al puerto ${PORT}`);
});
