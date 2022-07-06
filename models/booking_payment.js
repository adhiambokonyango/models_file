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
    payment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "payment_id",
      references: {
        key: "payment_id",
        model: "payments_model"
      }
    }
  };
  const options = {
    tableName: "booking_payment",
    comment: "",
    indexes: [{
      name: "booking_id",
      unique: false,
      type: "BTREE",
      fields: ["booking_id"]
    }, {
      name: "payment_id",
      unique: false,
      type: "BTREE",
      fields: ["payment_id"]
    }]
  };
  const BookingPaymentModel = sequelize.define("booking_payment_model", attributes, options);
  return BookingPaymentModel;
};