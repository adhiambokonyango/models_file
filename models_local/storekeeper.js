const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    StorekeeperID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "StorekeeperID"
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
    tableName: "storekeeper",
    comment: "",
    indexes: [{
      name: "storekeeper_user-role_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["UserRoleID"]
    }, {
      name: "storekeeper_user_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["UserID"]
    }]
  };
  const StorekeeperModel = sequelize.define("storekeeper_model", attributes, options);
  return StorekeeperModel;
};