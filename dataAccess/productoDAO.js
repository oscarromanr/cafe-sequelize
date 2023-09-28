const models = require('../models');

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

            const nuevoProducto = await models.Productos.create({ nombre, descripcion, precio, stock, categoria, imagenurl });
            return nuevoProducto;
        } catch (error) {
            return error;
        }
    }

    async obtenerProductos() {
        try {
            const productos = await models.Productos.findAll();
            return productos;
        } catch (error) {
            return error;
        }
    }

    async obtenerProductoPorID(id) {
        try {
            const producto = await models.Productos.findByPk(id);
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

            await models.Productos.update({ nombre, descripcion, precio, stock, categoria, imagenurl }, { where: { id } });
            const productoActualizar = await models.Productos.findByPk(id);
            return productoActualizar;

        } catch (error) {
            return error;
        }
    }

    async eliminarProducto(id) {
        try {
            const productoEliminar = await models.Productos.findByPk(id);

            if (!productoEliminar) {
                throw new Error('El producto no fue encontrado.')
            }
            await productoEliminar.destroy();
            return productoEliminar;
        } catch (error) {
            return error;
        }
    }

}

module.exports = new ProductoDAO();