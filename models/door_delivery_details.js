const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    booking_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "booking_id",
      references: {
        key: "booking_id",
        model: "booking_model"
      }
    },
    delivery_location: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "delivery_location"
    },
    delivery_location_description: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "delivery_location_description"
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "amount"
    }
  };
  const options = {
    tableName: "door_delivery_details",
    comment: "",
    indexes: [{
      name: "booking_id",
      unique: false,
      type: "BTREE",
      fields: ["booking_id"]
    }]
  };
  const DoorDeliveryDetailsModel = sequelize.define("door_delivery_details_model", attributes, options);
  return DoorDeliveryDetailsModel;
};