import express from "express";
import {
  getSpecialPrices,
  getSpecialPriceById,
  createSpecialPrice,
  updateSpecialPrice,
  getSpecialPricesByUser,
  deleteSpecialPrice
} from "../controllers/specialPriceController.js";

const router = express.Router();

router.get("/", getSpecialPrices);
router.get("/:id", getSpecialPriceById);
router.post("/create", createSpecialPrice);
router.put("/:id", updateSpecialPrice);
router.delete("/:id", deleteSpecialPrice);
router.get("/user/:userId", getSpecialPricesByUser);

export default router;
