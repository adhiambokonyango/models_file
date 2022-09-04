const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    CheckOutID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "CheckOutID"
    },
    StoreID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "StoreID",
      references: {
        key: "StoreID",
        model: "store_model"
      }
    },
    StoreKeeperID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "StoreKeeperID",
      references: {
        key: "StorekeeperID",
        model: "storekeeper_model"
      }
    },
    OfficerID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "OfficerID",
      references: {
        key: "OfficerID",
        model: "officer_model"
      }
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Date"
    },
    AdditionalInfo: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "AdditionalInfo"
    }
  };
  const options = {
    tableName: "check-out",
    comment: "",
    indexes: [{
      name: "check-out_officer_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["OfficerID"]
    }, {
      name: "check-out_store_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["StoreID"]
    }, {
      name: "check-out_storekeeper_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["StoreKeeperID"]
    }]
  };
  const CheckOutModel = sequelize.define("check-out_model", attributes, options);
  return CheckOutModel;
};