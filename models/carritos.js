'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relacion uno a uno con Usuario
<<<<<<< HEAD:models/carritos.js
      Carrito.hasOne(models.Usuarios, {foreignKey: 'id'});
=======
      Carrito.hasOne(models.Usuario, {foreignKey: 'id'});
>>>>>>> fd8dd7a02281eb34cdfdf861195332d94c20fbb3:models/carrito.js
    }
  }
  Carrito.init({
    idUsuario: DataTypes.INTEGER,
    productosEnCarrito: DataTypes.JSON,
    total: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Carritos',
  });
  return Carrito;
};