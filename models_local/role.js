const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    RoleID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "RoleID"
    },
    Role: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Role"
    }
  };
  const options = {
    tableName: "role",
    comment: "",
    indexes: []
  };
  const RoleModel = sequelize.define("role_model", attributes, options);
  return RoleModel;
};