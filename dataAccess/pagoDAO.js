const models = require('../models');

class PagoDAO {
    constructor() { };

    async crearPago(pago) {
        try {
            const idUsuario = pago.idUsuario;
            const monto = pago.monto;
            const metodoPago = pago.metodoPago;
            const fechaPago = pago.fechaPago;

            const nuevoPago = await models.Pagos.create({ idUsuario, monto, metodoPago, fechaPago });
            return nuevoPago;
        } catch (error) {
            throw error;
        }
    }

    async obtenerPagos() {
        try {
            const pagos = await models.Pagos.findAll();
            return pagos;
        } catch (error) {
            throw error;
        }
    }

    async obtenerPagosPorId(id) {
        try {
            const pagos = await models.Pagos.findByPk(id);
            return pagos;
        } catch (error) {
            throw error;
        }
    }

    async actualizarPago(id, pago) {
        try {
            const idUsuario = pago.idUsuario;
            const monto = pago.monto;
            const metodoPago = pago.metodoPago;
            const fechaPago = pago.fechaPago;

            await models.Pagos.update({ idUsuario, monto, metodoPago, fechaPago }, { where: { id } });
            const pagoActualizado = await models.Pagos.findByPk(id);
            return pagoActualizado;
        } catch (error) {
            throw error;
        }
    }

    async eliminarPago(id) {
        try {
            const pagoEliminar = await models.Pagos.findByPk(id);

            if (!pagoEliminar) {
                throw new Error('El pago no fue encontrado.');
            }
            await pagoEliminar.destroy();
            return pagoEliminar;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new PagoDAO();