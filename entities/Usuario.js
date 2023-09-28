class Usuario {
    constructor(nombre, email, password, rol, calle, numerocasa, colonia, telefono){
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.rol = rol;
        this.calle = calle;
        this.numerocasa = numerocasa;
        this.colonia = colonia;
        this.telefono = telefono;
    }
}

module.exports = Usuario;