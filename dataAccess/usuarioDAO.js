const models = require('../models');

class UsuarioDAO {
    constructor() { }

    async crearUsuario(usuario) {
        try {

            const nombre = usuario.nombre;
            const email = usuario.email;
            const password = usuario.password;
            const rol = usuario.rol;
            const calle = usuario.calle;
            const numerocasa = usuario.numerocasa;
            const colonia = usuario.colonia;
            const telefono = usuario.telefono;

            const nuevoUsuario = await models.Usuarios.create({ nombre, email, password, rol, calle, numerocasa, colonia, telefono });
            return nuevoUsuario;
        } catch (error) {
            return error;
        }
    }

    async obtenerUsuarios() {
        try {
            const usuarios = await models.Usuarios.findAll();
            return usuarios;
        } catch (error) {
            return error;
        }
    }

    async obtenerUsuarioPorID(id) {
        try {
            const usuario = await models.Usuarios.findByPk(id);
            return usuario;
        } catch (error) {
            return error;
        }
    }

    async actualizarUsuario(id, usuario) {
        try {

            const nombre = usuario.nombre;
            const email = usuario.email;
            const password = usuario.password;
            const rol = usuario.rol;
            const calle = usuario.calle;
            const numerocasa = usuario.numerocasa;
            const colonia = usuario.colonia;
            const telefono = usuario.telefono;

            await models.Usuarios.update({ nombre, email, password, rol, calle, numerocasa, colonia, telefono }, { where: { id } });
            const usuarioActualizado = await models.Usuarios.findByPk(id);
            return usuarioActualizado;
            
        } catch (error) {
            return error;
        }
    }

    async eliminarUsuario(id) {
        try {
            const usuarioEliminar = await models.Usuarios.findByPk(id);
            if (!usuarioEliminar) {
                throw new Error('El usuario no fue encontrado.')
            }
            await usuarioEliminar.destroy();
            return usuarioEliminar;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new UsuarioDAO();