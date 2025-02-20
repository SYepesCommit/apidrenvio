import Producto from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Producto.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo productos" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Producto.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo el producto" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { nombre, precio, stock } = req.body;
    const newProduct = new Producto({ nombre, precio, stock });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { nombre, precio, stock } = req.body;
    const updatedProduct = await Producto.findByIdAndUpdate(
      req.params.id,
      { nombre, precio, stock },
      { new: true }
    );
    if (!updatedProduct) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Producto.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ error: "Producto no encontrado" });
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
};
