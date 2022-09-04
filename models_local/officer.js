const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    OfficerID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "OfficerID"
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
    tableName: "officer",
    comment: "",
    indexes: [{
      name: "officer_user-role_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["UserRoleID"]
    }, {
      name: "officer_user_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["UserID"]
    }]
  };
  const OfficerModel = sequelize.define("officer_model", attributes, options);
  return OfficerModel;
};