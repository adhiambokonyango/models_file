const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    PermissionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "PermissionID"
    },
    Permission: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Permission"
    }
  };
  const options = {
    tableName: "permission",
    comment: "",
    indexes: []
  };
  const PermissionModel = sequelize.define("permission_model", attributes, options);
  return PermissionModel;
};