const { Producto } = require('../models');

class ProductoDAO {
    constructor() { }

    async crearProducto(producto) {
        try {

            const nombre = producto.nombre;
            const descripcion = producto.descripcion;
            const precio = producto.precio;
            const stock = producto.stock;
            const categoria = producto.categoria;
            const imagenurl = producto.imagenurl;

            const nuevoProducto = await Producto.create({ nombre, descripcion, precio, stock, categoria, imagenurl });
            return nuevoProducto;
        } catch (error) {
            return error;
        }
    }

    async obtenerProductos() {
        try {
            const productos = await Producto.findAll();
            return productos;
        } catch (error) {
            return error;
        }
    }

    async obtenerProductoPorID(id) {
        try {
            const producto = await Producto.findByPK(id);
            return producto;
        } catch (error) {
            return error;
        }
    }

    async actualizarProducto(id, producto) {
        try {

            const nombre = producto.nombre;
            const descripcion = producto.descripcion;
            const precio = producto.precio;
            const stock = producto.stock;
            const categoria = producto.categoria;
            const imagenurl = producto.imagenurl;

            const productoActualizar = await Producto.findByPK(id);

            if (!productoActualizar) {
                throw new Error('Producto no encontrado.')
            }

            await productoActualizar.update({ nombre, descripcion, precio, stock, categoria, imagenurl }, { where: { id } })
            return 'Producto actualizado con éxito';

        } catch (error) {
            return error;
        }
    }

    async eliminarProducto(id) {
        try {
            const productoEliminar = await Producto.findByPK(id);

            if (!productoEliminar) {
                throw new Error('No se encontro el producto')
            }
            await productoEliminar.destroy();
            return 'Producto eliminado con éxito';
        } catch (error) {
            return error;
        }
    }

}

module.exports = new ProductoDAO();