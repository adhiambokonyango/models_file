const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    rights_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "rights_id",
      references: {
        key: "rights_id",
        model: "rights_model"
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "role_id",
      references: {
        key: "role_id",
        model: "roles_model"
      }
    }
  };
  const options = {
    tableName: "role_right",
    comment: "",
    indexes: [{
      name: "rights_id",
      unique: false,
      type: "BTREE",
      fields: ["rights_id"]
    }, {
      name: "role_id",
      unique: false,
      type: "BTREE",
      fields: ["role_id"]
    }]
  };
  const RoleRightModel = sequelize.define("role_right_model", attributes, options);
  return RoleRightModel;
};