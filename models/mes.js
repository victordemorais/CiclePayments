'use strict';
module.exports = (sequelize, DataTypes) => {
  var Mes = sequelize.define('Mes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome_mes: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ano: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Mes.associate = function (models) {

  };
  return Mes;
};