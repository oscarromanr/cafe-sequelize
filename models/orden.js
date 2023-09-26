'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orden extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relacion muchos a uno con Usuario
      Orden.belongsTo(models.Usuario, {foreignKey: 'idUsuario'});
    }
  }
  Orden.init({
    idUsuario: DataTypes.INTEGER,
    fechaOrden: DataTypes.DATE,
    estado: DataTypes.STRING,
    total: DataTypes.DECIMAL,
    productos: DataTypes.JSON,
    direccionEnvio: DataTypes.STRING,
    metodoPago: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orden',
  });
  return Orden;
};