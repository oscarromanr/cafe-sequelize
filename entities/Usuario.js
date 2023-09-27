class Usuario {
    constructor(id, nombre, correoElectronico, contraseña, rol, calle, numerocasa, colonia, telefono){
        this.id = id;
        this.nombre = nombre;
        this.correoElectronico = correoElectronico;
        this.contraseña = contraseña;
        this.rol = rol;
        this.calle = calle;
        this.numerocasa = numerocasa;
        this.colonia = colonia;
        this.telefono = telefono;
    }
}

module.exports = Usuario;