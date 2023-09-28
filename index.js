const { sequelize } = require('./models');
const UsuarioDAO = require('./dataAccess/usuarioDAO');
const AdministradorDAO = require('./dataAccess/administradorDAO');
const ProductoDAO = require('./dataAccess/productoDAO');
const PagoDAO = require('./dataAccess/pagoDAO');
const OrdenDAO = require('./dataAccess/ordenDAO');
const Usuario = require('./entities/Usuario');
const Administrador = require('./entities/Administrador');
const Producto = require('./entities/Producto');
const Pago = require('./entities/Pago');
const Orden = require('./entities/Orden');

async function ejecutarTransacciones() {

    try {
        await sequelize.sync()

        // Usuarios
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

            if (usuarioBusqueda != null) {
                console.log('Busqueda exitosa: ', usuarioBusqueda)

            } else {
                console.log('No se encontró el usuario con el ID especificado.')
            }

            console.log('---Actualización del usuario con id 1---')

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

            const usuarioActualizar = await UsuarioDAO.actualizarUsuario(1, usuarioNuevo);

            if (usuarioActualizar != null) {
                console.log('Usuario actualizado: ', usuarioActualizar)
            } else {
                console.log('No se pudo actualizar al usuario especificado.')
            }

            console.log('---Eliminación del usuario con id 1---')

            const usuarioEliminar = await UsuarioDAO.eliminarUsuario(1);

            console.log('Usuario eliminado correctamente: ', usuarioEliminar)
            console.log('---> Finalización de pruebas de Usuarios <---');
        } catch (error) {
            throw error;
        }

        // Administradores
        try {
            console.log('--------Pruebas de AdministradoresDAO--------')
            const admin1 = new Administrador(
                "LaPiñataLocaAdmin",
                "lapinatalocaadmin@gmail.com",
                "piñataparty",
                "admin"
            );
            const admin2 = new Administrador(
                "ElTacoLocoAdmin",
                "eltacolocoadmin@gmail.com",
                "tacotac0",
                "admin"
            );

            const admin3 = new Administrador(
                "LaChalupaFiestaAdmin",
                "lachalupafiestaadmin@gmail.com",
                "fiesta2023",
                "superadmin"
            );
            await AdministradorDAO.crearAdministrador(admin1);
            await AdministradorDAO.crearAdministrador(admin2);
            await AdministradorDAO.crearAdministrador(admin3);

            console.log('-> Admins creados correctamente')

            console.log('---Busqueda de todos los admins---')
            const admins = await AdministradorDAO.obtenerAdministradores();
            console.log('Lista de admins: ', admins)

            console.log('---Busqueda de admin con id 1---')

            const adminBusqueda = await AdministradorDAO.obtenerAdministradorPorID(1);

            if (adminBusqueda != null) {
                console.log('Busqueda exitosa: ', adminBusqueda)

            } else {
                console.log('No se encontró el admin con el ID especificado.')
            }

            console.log('---Actualización del admin con id 1---')

            adminNuevo = new Administrador(
                "LaPiñataLocaNueva",
                "lapinataloca777admin@gmail.com",
                "piñataparty321",
                "superadmin"
            );

            const adminActualizado = await AdministradorDAO.actualizarAdministrador(1, adminNuevo);

            if (adminActualizado != null) {
                console.log('Admin actualizado: ', adminActualizado)
            } else {
                console.log('No se pudo actualizar al admin especificado.')
            }

            console.log('---Eliminación del administrador con id 1---')

            const adminEliminar = await AdministradorDAO.eliminarAdministrador(1);

            console.log('Admin eliminado correctamente: ', adminEliminar)
            console.log('---> Finalización de pruebas de Administradores <---');
        } catch (error) {
            throw error;
        }

        // Productos
        try {
            console.log('--------Pruebas de ProductosDAO--------')
            const producto1 = new Producto(
                "Cafe Organico Tostado 250 gr",
                "Presentación de 250 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.",
                199.99,
                20,
                "Cafe en grano",
                "https://example.com/imagen-producto1.jpg"
            );
            const producto2 = new Producto(
                "Cafe Organico Tostado 500 gr",
                "Presentación de 500 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.",
                379.99,
                15,
                "Cafe en grano",
                "https://example.com/imagen-producto2.jpg"
            );

            const producto3 = new Producto(
                "Cafe Organico Tostado 1 kg",
                "Presentación de 1000 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.",
                699.99,
                32,
                "Cafe en grano",
                "https://example.com/imagen-producto3.jpg"
            );

            const producto4 = new Producto(
                "Cupcakes de chocolate",
                "Pack de 12 cupcakes de chocolate con betun de queso crema y rodeado de chispas de chocolate, excelente opcion para compartir en cualquier evento familiar.",
                240,
                12,
                "Reposteria",
                "https://example.com/imagen-producto4.jpg"
            );
            await ProductoDAO.crearProducto(producto1);
            await ProductoDAO.crearProducto(producto2);
            await ProductoDAO.crearProducto(producto3);
            await ProductoDAO.crearProducto(producto4);

            console.log('-> Productos creados correctamente')

            console.log('---Busqueda de todos los productos---')
            const productos = await ProductoDAO.obtenerProductos();
            console.log('Lista de productos: ', productos)

            console.log('---Busqueda de producto con id 1---')

            const productoBusqueda = await ProductoDAO.obtenerProductoPorID(1);

            if (productoBusqueda != null) {
                console.log('Busqueda exitosa: ', productoBusqueda)

            } else {
                console.log('No se encontró el producto con el ID especificado.')
            }

            console.log('---Actualización del producto con id 1---')

            productoNuevo = new Producto(
                "Cafe Organico Tostado 250 gr",
                "Presentación de 250 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.",
                200,
                20,
                "Cafe en grano",
                "https://example.com/imagen-producto1.jpg"
            );

            const productoActualizar = await ProductoDAO.actualizarProducto(1, productoNuevo);

            if (productoActualizar != null) {
                console.log('Producto actualizado: ', productoActualizar)
            } else {
                console.log('No se pudo actualizar el producto especificado.')
            }

            console.log('---Eliminación del producto con id 4---')

            const productoEliminar = await ProductoDAO.eliminarProducto(4);

            console.log('Producto eliminado correctamente: ', productoEliminar)
            console.log('---> Finalización de pruebas de Productos <---');
        } catch (error) {
            throw error;
        }

        // Pagos
        try {
            console.log('--------Pruebas de PagosDAO--------')
            const pago1 = new Pago(
                2,
                300.50,
                "Credito",
                new Date()
            );

            const pago2 = new Pago(
                2,
                250.50,
                "Credito",
                new Date()
            );

            const pago3 = new Pago(
                3,
                699.99,
                "Debito",
                new Date()
            );

            const pago4 = new Pago(
                3,
                900.55,
                "Credito",
                new Date()
            );

            await PagoDAO.crearPago(pago1);
            await PagoDAO.crearPago(pago2);
            await PagoDAO.crearPago(pago3);
            await PagoDAO.crearPago(pago4);


            console.log('-> Pagos creados correctamente')

            console.log('---Busqueda de todos los pagos---')
            const pagos = await PagoDAO.obtenerPagos();
            console.log('Lista de pagos: ', pagos)

            console.log('---Busqueda de pago con id 1---')

            const pagoBusqueda = await PagoDAO.obtenerPagosPorId(1);

            if (pagoBusqueda != null) {
                console.log('Busqueda exitosa: ', pagoBusqueda)

            } else {
                console.log('No se encontró el pago con el ID especificado.')
            }

            console.log('---Actualización del pago con id 1---')

            pagoNuevo = new Pago(
                2,
                299.99,
                "Credito",
                new Date()
            );

            const pagoActualizar = await PagoDAO.actualizarPago(1, pagoNuevo);

            if (pagoActualizar != null) {
                console.log('Pago actualizado: ', pagoActualizar)
            } else {
                console.log('No se pudo actualizar el pago especificado.')
            }

            console.log('---Eliminación del pago con id 4---')

            const pagoEliminar = await PagoDAO.eliminarPago(4);

            console.log('Pago eliminado correctamente: ', pagoEliminar)
            console.log('---> Finalización de pruebas de Pagos <---');
        } catch (error) {
            throw error;
        }

        // Orden
        // TODO
        try {
            console.log('--------Pruebas de OrdenDAO--------');
            const producto1 = new Producto(
                "Cafe Organico Tostado 250 gr",
                "Presentación de 250 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.",
                199.99,
                20,
                "Cafe en grano",
                "https://example.com/imagen-producto1.jpg"
            );
            const producto2 = new Producto(
                "Cafe Organico Tostado 500 gr",
                "Presentación de 500 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.",
                379.99,
                15,
                "Cafe en grano",
                "https://example.com/imagen-producto2.jpg"
            );

            const producto3 = new Producto(
                "Cafe Organico Tostado 1 kg",
                "Presentación de 1000 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.",
                699.99,
                32,
                "Cafe en grano",
                "https://example.com/imagen-producto3.jpg"
            );

            const producto4 = new Producto(
                "Cupcakes de chocolate",
                "Pack de 12 cupcakes de chocolate con betun de queso crema y rodeado de chispas de chocolate, excelente opcion para compartir en cualquier evento familiar.",
                240,
                12,
                "Reposteria",
                "https://example.com/imagen-producto4.jpg"
            );

            const orden1 = new Orden(
                2,
                new Date(),
                "bueno",
                300.50,
                [{producto1, producto2}],
                "San Marcos 1890",
                "tarjeta"
            );
            const orden2 = new Orden(
                3,
                new Date(),
                "Mas o menos",
                250.50,
                [{producto1, producto2, producto3}],
                "San Luis 1890",
                "tarjeta"
            );
            const orden3 = new Orden(
                3,
                new Date(),
                "malo",
                699.90,
                [{producto1, producto2, producto3, producto4}],
                "San Lazaro 1790",
                "tarjeta"
            );

            await OrdenDAO.crearOrden(orden1);
            await OrdenDAO.crearOrden(orden2);
            await OrdenDAO.crearOrden(orden3);

            console.log('Ordenes creadas');
            
            console.log('Consultar ordenes');
            const ordenes = await OrdenDAO.obtenerOrdenes();
            console.log('Ordenes: ', ordenes);

            console.log('Obtener oren por id')
            const ordenBuscar = await OrdenDAO.obtenerOrdenesPorId(1);
            if (ordenBuscar == null){
                console.log('Error no se encontro la orden')
            }
            console.log('Orden: ', ordenBuscar);

            console.log('Actualizar Orden');
            const nuevaOrden = new Orden(
                2,
                new Date(),
                "Excelente",
                300.50,
                [{producto1, producto2}],
                "San Marcos 1690",
                "tarjeta"
            );
            await OrdenDAO.actualizarOrden(1, nuevaOrden);
            ordenBuscar = await OrdenDAO.obtenerOrdenesPorId(1);
            console.log('Nueva orden: ', ordenBuscar);

            console.log('Eliminar orden');
            await OrdenDAO.eliminarOrden(2);
            ordenes = await OrdenDAO.obtenerOrdenes();
            console.log('Ordenes actualizadas: ', ordenes);
            console.log('---> Finalización de pruebas de Ordenes <---');


        } catch (error) {
            
        }

        // Carrito
        // TODO
    } catch (error) {
        console.error('Error en la ejecución de transacciones: ', error)
    } finally {
        await sequelize.close();
    }
}

ejecutarTransacciones();