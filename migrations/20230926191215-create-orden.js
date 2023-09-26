'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ordenes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuarios',
          key: 'id'
        }
      },
      fechaOrden: {
        type: Sequelize.DATE
      },
      estado: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.DECIMAL
      },
      productos: {
        type: Sequelize.JSON,
        defaultValue: []
      },
      direccionEnvio: {
        type: Sequelize.STRING
      },
      metodoPago: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ordens');
  }
};