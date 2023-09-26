const { Pago } = require('../models');

class PagoDAO {
    constructor() { };

    async crearPago(pago) {
        try {
            const idUsuario = pago.idUsuario;
            const monto = pago.monto;
            const metodoPago = pago.metodoPago;
            const fechaPago = pago.fechaPago;

            const nuevoPago = await Pago.create({ idUsuario, monto, metodoPago, fechaPago });
            return nuevoPago;
        } catch (error) {
            throw error;
        }
    }

    async obtenerPagos() {
        try {
            const pagos = await Pago.findAll();
            return pagos;
        } catch (error) {
            throw error;
        }
    }

    async obtenerPagosPorId(id) {
        try {
            const pagos = await Pago.findByPk(id);
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

            await Pago.update({ idUsuario, monto, metodoPago, fechaPago }, { where: { id } });
            const pagoActualizado = await Pago.findByPk(id);
            return pagoActualizado;
        } catch (error) {
            throw error;
        }
    }

    async eliminarPago(id) {
        try {
            const pago = await Pago.findByPk(id);
            if (!pago) {
                throw new Error('Pago no encontrado');
            }
            await pago.destroy();
            return 'Pago eliminado con exito';
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new PagoDAO();