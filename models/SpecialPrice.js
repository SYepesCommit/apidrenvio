import mongoose from "mongoose";

const specialPriceSchema = new mongoose.Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Users",  // Referencia a la colección de usuarios
      required: true 
    },
    articleId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "productos", // Referencia a la colección de productos
      required: true 
    },
    specialPrice: { type: Number, required: true },
    dateAssign: { type: Date, default: Date.now }
  },
  {
    timestamps: true,
    collection: "preciosEspecialesYepes13"
  }
);

export default mongoose.model("preciosEspecialesYepes13", specialPriceSchema);
