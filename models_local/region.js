const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    RegionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "RegionID"
    },
    Region: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Region"
    }
  };
  const options = {
    tableName: "region",
    comment: "",
    indexes: []
  };
  const RegionModel = sequelize.define("region_model", attributes, options);
  return RegionModel;
};