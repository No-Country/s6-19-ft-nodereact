import express from "express";
import cors from "cors";
import "dotenv/config.js";
import authRouter from "./routes/auth.route";

const app = express();

const PORT = process.env.PORT;

// Middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando al puerto ${PORT}`);
});
