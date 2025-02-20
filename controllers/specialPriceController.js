import SpecialPrice from "../models/SpecialPrice.js";



export const getSpecialPrices = async (req, res) => {
  try {
    const specialPrices = await SpecialPrice.find()
      .populate("userId", "name")
      .populate("articleId", "name price stock");
    res.json(specialPrices);
  } catch (error) {
    console.error("Error al obtener precios especiales:", error);
    res.status(500).json({ message: "Error al obtener precios especiales" });
  }
};

export const getSpecialPriceById = async (req, res) => {
  try {
    const price = await SpecialPrice.findById(req.params.id)
      .populate("userId")
      .populate("articleId");
    if (!price) return res.status(404).json({ error: "Precio especial no encontrado" });

    res.json(price);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el precio especial" });
  }
};

export const createSpecialPrice = async (req, res) => {
  try {
    const { userId, articleId, specialPrice } = req.body;

    const newPrice = new SpecialPrice({
      userId,
      articleId,
      specialPrice
    });

    await newPrice.save();
    res.status(201).json(newPrice);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el precio especial" });
  }
};

export const updateSpecialPrice = async (req, res) => {
  try {
    const updatedPrice = await SpecialPrice.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: new Date() },
      { new: true }
    );

    if (!updatedPrice) return res.status(404).json({ error: "Precio especial no encontrado" });

    res.json(updatedPrice);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el precio especial" });
  }
};

export const deleteSpecialPrice = async (req, res) => {
  try {
    const deletedPrice = await SpecialPrice.findByIdAndDelete(req.params.id);
    if (!deletedPrice) return res.status(404).json({ error: "Precio especial no encontrado" });

    res.json({ message: "Precio especial eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el precio especial" });
  }
};

export const getSpecialPricesByUser = async (req, res) => {
  try {
    const prices = await SpecialPrice.find({ userId: req.params.userId })
      .populate("userId", "name")
      .populate("articleId", "name price stock sku");
    if (!prices || prices.length === 0)
      return res.status(404).json({ error: "No se encontraron precios especiales para el usuario" });

    res.json(prices);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los precios especiales" });
  }
};

