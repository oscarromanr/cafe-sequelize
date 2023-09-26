const { Orden } = require('../models');

class OrdenDAO {
    constructor(){};

    async crearOrden(orden) {
        try {
            const idUsuario = orden.idUsuario;
            const fechaOrden = orden.fechaOrden;
            const estado = orden.estado;
            const total = orden.total;
            const productos = orden.productos;
            const direccionEnvio = orden.direccionEnvio;
            const metodoPago = orden.metodoPago;

            const nuevaOrden = await Orden.create({ idUsuario, fechaOrden, estado, total, productos, direccionEnvio, metodoPago });
            return nuevaOrden;
        } catch (error) {
            throw error;
        }
    }

    async obtenerOrdenes() {
        try {
            const ordenes = await Orden.findAll();
            return ordenes;
        } catch (error) {
            throw error;
        }
    }

    async obtenerOrdenesPorId(id) {
        try {
            const ordenes = await Orden.findByPk(id);
            return ordenes;
        } catch (error) {
            throw error;
        }
    }

    async actualizarOrden(id, orden){
        try {
            const idUsuario = orden.idUsuario;
            const fechaOrden = orden.fechaOrden;
            const estado = orden.estado;
            const total = orden.total;
            const productos = orden.productos;
            const direccionEnvio = orden.direccionEnvio;
            const metodoPago = orden.metodoPago;

            await Orden.update({ idUsuario, fechaOrden, estado, total, productos, direccionEnvio, metodoPago }, {where: {id}});
            const ordenActualizada = await Orden.findByPk(id);
            return ordenActualizada;
        } catch (error) {
            throw error;
        }
    }

    async eliminarOrden(id){
        try {
            const orden = await Orden.findByPk(id);
            if (!orden){
                throw new Error('No se encontro la orden');
            }
            await orden.destroy();
            return 'Orden eliminada';
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new OrdenDAO();