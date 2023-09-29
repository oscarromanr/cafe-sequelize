const models = require('../models');

class CarritoDAO {
    constructor(){};

    async crearCarrito(carrito) {
        try {
            const idUsuario = carrito.idUsuario;
            const productosEnCarrito = carrito.productos;
            const total = carrito.total;

            const nuevoCarrito = await models.Carritos.create({ idUsuario, productosEnCarrito, total});
            return nuevoCarrito;
        } catch (error) {
            throw error;
        }
    }

    async obtenerCarritos() {
        try {
            const carritos = await models.Carritos.findAll();
            return carritos;
        } catch (error) {
            throw error;
        }
    }

    async obtenerCarritosPorId(id) {
        try {
            const carritos = await models.Carritos.findByPk(id);
            return carritos;
        } catch (error) {
            throw error;
        }
    }

    async actualizarCarrito(id, carrito){
        try {
            const idUsuario = carrito.idUsuario;
            const productosEnCarrito = carrito.productos;
            const total = carrito.total;

            await models.Carritos.update({ idUsuario, productosEnCarrito, total }, {where: {id}});
            const carritoActualizado = await models.Carritos.findByPk(id);
            return carritoActualizado;
        } catch (error) {
            throw error;
        }
    }

    async eliminarCarrito(id){
        try {
            const carrito = await models.Carritos.findByPk(id);
            if (!carrito){
                throw new Error('No se encontro el carrito');
            }
            await models.Carritos.destroy({where: {id}});
            return 'Se elimino el carrito';
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new CarritoDAO();