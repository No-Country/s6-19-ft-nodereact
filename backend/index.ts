import express from "express";
import cors from "cors";
import "dotenv/config.js";
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";
import connectDataBase from "./config/mongoDB";

connectDataBase();

const app = express();

const PORT = process.env.PORT;

// Middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando al puerto ${PORT}`);
});
