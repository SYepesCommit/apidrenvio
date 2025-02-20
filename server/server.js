import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "../routes/productRoutes.js";
import specialPriceRoutes from "../routes/specialPriceRoutes.js";
import userRoutes from "../routes/userRoutes.js";



dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);
app.use("/api/special-prices", specialPriceRoutes);
app.use("/api/users", userRoutes);


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connect"))
  .catch((err) => console.error("Error:", err));

app.listen(3000, () => {
  console.log("Servidor corriendo en https://localhost:3000");
});
