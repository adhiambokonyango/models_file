const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    AdminID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "AdminID"
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
    UserRoleID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserRoleID",
      references: {
        key: "UserRoleID",
        model: "user-role_model"
      }
    }
  };
  const options = {
    tableName: "admin",
    comment: "",
    indexes: [{
      name: "admin_user-role_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["UserRoleID"]
    }, {
      name: "admin_user_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["UserID"]
    }]
  };
  const AdminModel = sequelize.define("admin_model", attributes, options);
  return AdminModel;
};