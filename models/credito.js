'use strict';
module.exports = (sequelize, DataTypes) => {
  var Credito = sequelize.define('Credito', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    mes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {});
  Credito.associate = function (models) {
    Credito.belongsTo(models.Mes, {
      foreignKey: {
        allowNull: false,
        field: "mes",
        name: "mes"
      }
    });
  };
  return Credito;
};