import mongoose from 'mongoose';

const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, default: 0 },
}, {
  collection: 'productos'
});

const Producto = mongoose.model('productos', ProductoSchema);
export default Producto;
