const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    SubPartitionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "SubPartitionID"
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
    SubPartition: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "SubPartition"
    }
  };
  const options = {
    tableName: "store-sub-partition",
    comment: "",
    indexes: [{
      name: "store-sub-partition_store-partition_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["PartitionID"]
    }]
  };
  const StoreSubPartitionModel = sequelize.define("store-sub-partition_model", attributes, options);
  return StoreSubPartitionModel;
};