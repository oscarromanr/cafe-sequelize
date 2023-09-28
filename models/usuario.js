'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relacion uno a muchos con Orden, Pago y uno a uno con Carrito
      Usuario.hasMany(models.Orden, {foreignKey: 'idUsuario'});
      Usuario.hasOne(models.Carrito, {foreignKey: 'idUsuario'});
      Usuario.hasMany(models.Pago, {foreignKey: 'idUsuario'});

    }
  }
  Usuario.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING,
    correoElectronico: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    rol: DataTypes.STRING,
    calle: DataTypes.STRING,
    numerocasa: DataTypes.STRING,
    colonia: DataTypes.STRING,
    telefono: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};