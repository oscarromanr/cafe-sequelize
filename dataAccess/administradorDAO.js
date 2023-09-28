const models = require('../models');

class AdministradorDAO {
    constructor() { }

    async crearAdministrador(admin) {
        try {

            const nombre = admin.nombre;
            const email = admin.email;
            const password = admin.password;
            const rol = admin.rol;

            const nuevoAdmin = await models.Administradores.create({ nombre, email, password, rol});
            return nuevoAdmin;
        } catch (error) {
            return error;
        }
    }

    async obtenerAdministradores() {
        try {
            const admins = await models.Administradores.findAll();
            return admins;
        } catch (error) {
            return error;
        }
    }

    async obtenerAdministradorPorID(id) {
        try {
            const admin = await models.Administradores.findByPk(id);
            return admin;
        } catch (error) {
            return error;
        }
    }

    async actualizarAdministrador(id, admin) {
        try {

            const nombre = admin.nombre;
            const email = admin.email;
            const password = admin.password;
            const rol = admin.rol;

            await models.Administradores.update({ nombre, email, password, rol}, { where: { id } });
            const adminActualizado = await models.Administradores.findByPk(id);
            return adminActualizado;
            
        } catch (error) {
            return error;
        }
    }

    async eliminarAdministrador(id) {
        try {
            const adminEliminar = await models.Administradores.findByPk(id);
            if (!adminEliminar) {
                throw new Error('El admin no fue encontrado.')
            }
            await adminEliminar.destroy();
            return adminEliminar;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new AdministradorDAO();