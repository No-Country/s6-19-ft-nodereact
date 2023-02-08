var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));

const cors_1 = __importDefault(require("cors"));
require("dotenv/config.js");
const app = (0, express_1.default)();
const PORT = process.env.PORT;
// Middlewares
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Routes

app.listen(PORT, () => {
  console.log(`Servidor escuchando al puerto ${PORT}`);
});
