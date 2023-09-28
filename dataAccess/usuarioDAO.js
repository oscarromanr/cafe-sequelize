const { Usuario } = require('../models');

class UsuarioDAO {
    constructor() { }

    async crearUsuario(usuario) {
        try {

            const nombre = usuario.nombre;
            const correoElectronico = usuario.correoElectronico;
            const contraseña = usuario.contraseña;
            const rol = usuario.rol;
            const calle = usuario.calle;
            const numerocasa = usuario.numerocasa;
            const colonia = usuario.colonia;
            const telefono = usuario.telefono;

            const nuevoUsuario = await Usuario.create({ nombre, correoElectronico, contraseña, rol, calle, numerocasa, colonia, telefono });
            return nuevoUsuario;
        } catch (error) {
            return error;
        }
    }

    async obtenerUsuarios() {
        try {
            const usuarios = await Usuario.findAll();
            return usuarios;
        } catch (error) {
            return error;
        }
    }

    async obtenerUsuarioPorID(id) {
        try {
            const usuario = await Usuario.findByPK(id);
            return usuario;
        } catch (error) {
            return error;
        }
    }

    async actualizarUsuario(id, usuario) {
        try {

            const nombre = usuario.nombre;
            const correoElectronico = usuario.correoElectronico;
            const contraseña = usuario.contraseña;
            const rol = usuario.rol;
            const calle = usuario.calle;
            const numerocasa = usuario.numerocasa;
            const colonia = usuario.colonia;
            const telefono = usuario.telefono;

            await Usuario.update({ nombre, correoElectronico, contraseña, rol, calle, numerocasa, colonia, telefono }, { where: { id } });
            const usuarioActualizado = await Usuario.findByPk(id);
            return usuarioActualizado;
            
        } catch (error) {
            return error;
        }
    }

    async eliminarUsuario(id) {
        try {
            const usuarioEliminar = await Usuario.findByPK(id);

            if (!usuarioEliminar) {
                throw new Error('No se encontro el usuario')
            }
            await usuarioEliminar.destroy();
            return 'Usuario eliminado con éxito';
        } catch (error) {
            return error;
        }
    }

}

module.exports = new UsuarioDAO();