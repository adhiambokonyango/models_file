const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    MasterCatalogueID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "MasterCatalogueID"
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
    PartitionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PartitionID",
      references: {
        key: "PartitionID",
        model: "store-partition_model"
      }
    },
    EquipmentID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "EquipmentID",
      references: {
        key: "EquipmentID",
        model: "equipment_model"
      }
    }
  };
  const options = {
    tableName: "master-catalogue",
    comment: "",
    indexes: [{
      name: "master-catalogue_equipment_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["EquipmentID"]
    }, {
      name: "master-catalogue_store-partition_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["PartitionID"]
    }, {
      name: "master-catalogue_store_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["StoreID"]
    }]
  };
  const MasterCatalogueModel = sequelize.define("master-catalogue_model", attributes, options);
  return MasterCatalogueModel;
};