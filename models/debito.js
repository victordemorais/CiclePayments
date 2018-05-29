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
      type: DataTypes.STRING,
      allowNull: false
    },
    ano: {
      type: DataTypes.STRING,
      allowNull: false
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {});
  Debito.associate = function (models) {
    Debito.belongsTo(models.Mes);
  };
  return Debito;
};