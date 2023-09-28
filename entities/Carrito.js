class Carrito {
    constructor(idUsuario, productosEnCarrito, total){
        this.idUsuario = idUsuario;
        this.productosEnCarrito = productosEnCarrito;
        this.total = total;
    }
}

module.exports = Carrito;