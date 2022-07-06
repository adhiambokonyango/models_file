const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    passport_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "passport_id"
    },
    tracking_number: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tracking_number"
    },
    pg_barcode: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "pg_barcode"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "status"
    }
  };
  const options = {
    tableName: "passport",
    comment: "",
    indexes: []
  };
  const PassportModel = sequelize.define("passport_model", attributes, options);
  return PassportModel;
};