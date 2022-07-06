const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    rights_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "rights_id"
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name"
    }
  };
  const options = {
    tableName: "rights",
    comment: "",
    indexes: []
  };
  const RightsModel = sequelize.define("rights_model", attributes, options);
  return RightsModel;
};