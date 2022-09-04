const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    PartitionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "PartitionID"
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
    PartitionName: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PartitionName"
    }
  };
  const options = {
    tableName: "store-partition",
    comment: "",
    indexes: [{
      name: "store-partition_store_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["StoreID"]
    }]
  };
  const StorePartitionModel = sequelize.define("store-partition_model", attributes, options);
  return StorePartitionModel;
};