const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    UnitCatalogueID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "UnitCatalogueID"
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
    MasterCatalogueID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "MasterCatalogueID",
      references: {
        key: "MasterCatalogueID",
        model: "master-catalogue_model"
      }
    },
    UnitID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UnitID",
      references: {
        key: "UnitID",
        model: "equipment-unit_model"
      }
    },
    SubPartitionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "SubPartitionID",
      references: {
        key: "SubPartitionID",
        model: "store-sub-partition_model"
      }
    }
  };
  const options = {
    tableName: "unit-catalogue",
    comment: "",
    indexes: [{
      name: "unit-catalogue_equipment-unit_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["UnitID"]
    }, {
      name: "unit-catalogue_master-catalogue_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["MasterCatalogueID"]
    }, {
      name: "unit-catalogue_store-sub-partition_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["SubPartitionID"]
    }, {
      name: "unit-catalogue_store_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["StoreID"]
    }]
  };
  const UnitCatalogueModel = sequelize.define("unit-catalogue_model", attributes, options);
  return UnitCatalogueModel;
};