const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    OfficeID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "OfficeID"
    },
    OfficeName: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "OfficeName"
    },
    OfficeCode: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "OfficeCode"
    },
    RegionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "RegionID",
      references: {
        key: "RegionID",
        model: "region_model"
      }
    }
  };
  const options = {
    tableName: "office",
    comment: "",
    indexes: [{
      name: "office_region_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["RegionID"]
    }]
  };
  const OfficeModel = sequelize.define("office_model", attributes, options);
  return OfficeModel;
};