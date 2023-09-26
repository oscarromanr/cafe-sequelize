class Pago {
    constructor(id, idUsuario, monto, metodoPago, fechaPago){
        this.id = id;
        this.idUsuario = idUsuario;
        this.monto = monto;
        this.metodoPago = metodoPago;
        this.fechaPago = fechaPago;
    }
}

module.exports = Pago;