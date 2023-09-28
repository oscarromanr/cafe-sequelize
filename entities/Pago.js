class Pago {
    constructor(idUsuario, monto, metodoPago, fechaPago){
        this.idUsuario = idUsuario;
        this.monto = monto;
        this.metodoPago = metodoPago;
        this.fechaPago = fechaPago;
    }
}

module.exports = Pago;