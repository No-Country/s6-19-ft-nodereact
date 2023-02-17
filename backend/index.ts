import express from "express";
import cors from "cors";
import "dotenv/config.js";
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";
import cartRouter from "./routes/cart.route";
import productRouter from "./routes/product.route";
import connectDataBase from "./config/mongoDB";
import fileUpload from "express-fileupload";

connectDataBase();

const app = express();

const PORT = process.env.PORT || 5000;

// Middlewares

app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    createParentPath: true,
  })
);

// Routes

app.use("/api/auth", authRouter);

app.use("/api/user", userRouter);

app.use("/api/cart", cartRouter);

app.use("/api/product", productRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando al puerto ${PORT}`);
});
