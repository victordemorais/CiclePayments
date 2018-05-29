'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Creditos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mes: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ano: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nome:{
        allowNull:false,
        type:Sequelize.STRING
      },
      valor:{
        allowNull:false,
        type:Sequelize.FLOAT
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Creditos');
  }
};