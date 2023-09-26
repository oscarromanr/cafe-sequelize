'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pago extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relacion muchos a uno con Usuario
      Pago.belongsTo(models.Usuario, {foreignKey: 'idUsuario'});
    }
  }
  Pago.init({
    idUsuario: DataTypes.INTEGER,
    monto: DataTypes.DECIMAL,
    metodoPago: DataTypes.STRING,
    fechaPago: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pago',
  });
  return Pago;
};