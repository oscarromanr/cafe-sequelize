class Orden {
    constructor(idUsuario, fechaOrden, estado, total, productos, direccionEnvio, metodoPago){
        this.idUsuario = idUsuario;
        this.fechaOrden = fechaOrden;
        this.estado = estado;
        this.total = total;
        this.productos = productos;
        this.direccionEnvio = direccionEnvio;
        this.metodoPago = metodoPago;
    }
}

module.exports = Orden;