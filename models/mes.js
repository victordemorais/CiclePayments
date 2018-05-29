'use strict';
module.exports = (sequelize, DataTypes) => {
  var Mes = sequelize.define('Mes', {
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
    }
  }, {});
  Mes.associate = function (models) {
    Mes.hasMany(models.Credito);
    Mes.hasMany(models.Debito);
  };
  return Mes;
};