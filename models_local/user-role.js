const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    UserRoleID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "UserRoleID"
    },
    UserID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserID",
      references: {
        key: "UserID",
        model: "user_model"
      }
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
    }
  };
  const options = {
    tableName: "user-role",
    comment: "",
    indexes: [{
      name: "user_role_role_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["RoleID"]
    }, {
      name: "user_role_user_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["UserID"]
    }]
  };
  const UserRoleModel = sequelize.define("user-role_model", attributes, options);
  return UserRoleModel;
};