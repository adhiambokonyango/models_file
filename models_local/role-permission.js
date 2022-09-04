const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    RolePermissionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "RolePermissionID"
    },
    RoleID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "RoleID",
      references: {
        key: "RoleID",
        model: "role_model"
      }
    },
    PermissionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PermissionID",
      references: {
        key: "PermissionID",
        model: "permission_model"
      }
    }
  };
  const options = {
    tableName: "role-permission",
    comment: "",
    indexes: [{
      name: "role-permission_permission_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["PermissionID"]
    }, {
      name: "role-permission_role_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["RoleID"]
    }]
  };
  const RolePermissionModel = sequelize.define("role-permission_model", attributes, options);
  return RolePermissionModel;
};