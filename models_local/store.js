const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    StoreID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "StoreID"
    },
    Store: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Store"
    },
    OfficeID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "OfficeID",
      references: {
        key: "OfficeID",
        model: "office_model"
      }
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
    tableName: "store",
    comment: "",
    indexes: [{
      name: "store_office_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["OfficeID"]
    }, {
      name: "store_region_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["RegionID"]
    }]
  };
  const StoreModel = sequelize.define("store_model", attributes, options);
  return StoreModel;
};