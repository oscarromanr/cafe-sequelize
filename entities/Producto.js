class Producto {
    constructor(id, nombre, descripcion, precio, stock, categoria, imagenurl){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.categoria = categoria;
        this.imagenurl = imagenurl;
    }
}

module.exports = Producto;