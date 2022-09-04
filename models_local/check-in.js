const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    CheckInID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "CheckInID"
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
    tableName: "check-in",
    comment: "",
    indexes: [{
      name: "check-in_officer_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["OfficerID"]
    }, {
      name: "check-in_store_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["StoreID"]
    }, {
      name: "check-in_storekeeper_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["StoreKeeperID"]
    }]
  };
  const CheckInModel = sequelize.define("check-in_model", attributes, options);
  return CheckInModel;
};