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
<<<<<<< HEAD:models/ordenes.js
      Orden.belongsTo(models.Usuarios, {foreignKey: 'id'});
=======
      Orden.belongsTo(models.Usuario, {foreignKey: 'id'});
>>>>>>> fd8dd7a02281eb34cdfdf861195332d94c20fbb3:models/orden.js
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
    modelName: 'Ordenes',
  });
  return Orden;
};