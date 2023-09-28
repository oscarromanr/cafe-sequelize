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
<<<<<<< HEAD:models/pagos.js
      Pago.belongsTo(models.Usuarios, {foreignKey: 'id'});
=======
      Pago.belongsTo(models.Usuario, {foreignKey: 'id'});
>>>>>>> fd8dd7a02281eb34cdfdf861195332d94c20fbb3:models/pago.js
    }
  }
  Pago.init({
    idUsuario: DataTypes.INTEGER,
    monto: DataTypes.DECIMAL,
    metodoPago: DataTypes.STRING,
    fechaPago: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pagos',
  });
  return Pago;
};