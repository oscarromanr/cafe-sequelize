const models = require('../models');

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

            const nuevaOrden = await models.Ordenes.create({ idUsuario, fechaOrden, estado, total, productos, direccionEnvio, metodoPago });
            return nuevaOrden;
        } catch (error) {
            throw error;
        }
    }

    async obtenerOrdenes() {
        try {
            const ordenes = await models.Ordenes.findAll();
            return ordenes;
        } catch (error) {
            throw error;
        }
    }

    async obtenerOrdenesPorId(id) {
        try {
            const ordenes = await models.Ordenes.findByPk(id);
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

            await models.Ordenes.update({ idUsuario, fechaOrden, estado, total, productos, direccionEnvio, metodoPago }, {where: {id}});
            const ordenActualizada = await models.Ordenes.findByPk(id);
            return ordenActualizada;

        } catch (error) {
            throw error;
        }
    }

    async eliminarOrden(id){
        try {
            const orden = await models.Ordenes.findByPk(id);
            if (!orden){
                throw new Error('No se encontro la orden');
            }
            await models.Ordenes.destroy({where: {id}});
            return 'Se elimino la orden';
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new OrdenDAO();