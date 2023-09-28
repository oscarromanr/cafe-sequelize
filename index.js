const { sequelize } = require('./models');
const UsuarioDAO = require('./dataAccess/usuarioDAO');
const Usuario = require('./entities/Usuario')

async function ejecutarTransacciones() {

    try {
        await sequelize.sync()
        
        try {
            console.log('--------Pruebas de UsuariosDAO--------')
            const usuario1 = new Usuario(
                "LaPiñataLoca",
                "lapinataloca@gmail.com",
                "piñataparty",
                "Usuario",
                "Calle de los Dulces",
                "789",
                "Colonia Piñatas",
                "9995558888"
            );
            const usuario2 = new Usuario(
                "ElTacoLoco",
                "eltacoloco@gmail.com",
                "tacotac0",
                "Usuario",
                "Avenida de los Tacos",
                "123",
                "Colonia Guacamole",
                "5551234567"
            );
    
            const usuario3 = new Usuario(
                "LaChalupaFiesta",
                "lachalupafiesta@gmail.com",
                "fiesta2023",
                "Usuario",
                "Calle del Mariachi",
                "456",
                "Barrio Salsa",
                "7779876543"
            );
            await UsuarioDAO.crearUsuario(usuario1);
            await UsuarioDAO.crearUsuario(usuario2);
            await UsuarioDAO.crearUsuario(usuario3);

            console.log('-> Usuarios creados correctamente')

            console.log('---Busqueda de todos los usuarios---')
            const usuarios = await UsuarioDAO.obtenerUsuarios();
            console.log('Lista de usuarios: ', usuarios)

            console.log('---Busqueda de usuario con id 1---')
            
            const usuarioBusqueda = await UsuarioDAO.obtenerUsuarioPorID(1);

            if (usuarioBusqueda != null){
                console.log('Busqueda exitosa: ', usuarioBusqueda)

            } else {
                console.log('No se encontró el usuario con el ID especificado.')
            }

            console.log('---Actualización de usuario con id 1---')

            usuarioNuevo = new Usuario(
                "LaPiñataLoca",
                "lapinataloca777@gmail.com",
                "piñataparty321",
                "Usuario",
                "Calle de los Dulces nuevos",
                "789",
                "Colonia Piñatas",
                "9995558888"
            );

            const usuarioActualizar = await UsuarioDAO.actualizarUsuario(2, usuario2);
            console.log('Usuario actualizado: ', usuarioActualizar)

            //Falta la prueba de eliminar del usuario
        } catch (error) {
            throw error;
        }
    } catch (error) {
        console.error('Error en las transacciones: ' + error)
    } finally {
        await sequelize.close();
    }
}

ejecutarTransacciones();