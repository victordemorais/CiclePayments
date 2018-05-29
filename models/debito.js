'use strict';
module.exports = (sequelize, DataTypes) => {
  var Debito = sequelize.define('Debito', {
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
    },
    status: {
      type: DataTypes.ENUM('PAGO', 'PENDENTE', 'AGENDADO'),
      allowNull: false,
      defaultValue: "AGENDADO"
    },

  }, {});
  Debito.associate = function (models) {
    Debito.belongsTo(models.Mes, {
      foreignKey: {
        allowNull: false,
        field: "mes",
        name: "mes"
      }
    });
  };
  return Debito;
};