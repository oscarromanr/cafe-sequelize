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
      Carrito.hasOne(models.Usuario, {foreignKey: 'id'});
    }
  }
  Carrito.init({
    idUsuario: DataTypes.INTEGER,
    productosEnCarrito: DataTypes.JSON,
    total: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Carrito',
  });
  return Carrito;
};