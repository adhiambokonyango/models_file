const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    booking_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "booking_id"
    },
    passport_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "passport_id",
      references: {
        key: "passport_id",
        model: "passport_model"
      }
    },
    client_name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "client_name"
    },
    client_email: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "client_email"
    },
    client_phone: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "client_phone"
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "post_id",
      references: {
        key: "post_id",
        model: "post_offices_model"
      }
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "amount"
    },
    booking_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "booking_type"
    }
  };
  const options = {
    tableName: "booking",
    comment: "",
    indexes: [{
      name: "passport_id",
      unique: false,
      type: "BTREE",
      fields: ["passport_id"]
    }, {
      name: "post_id",
      unique: false,
      type: "BTREE",
      fields: ["post_id"]
    }]
  };
  const BookingModel = sequelize.define("booking_model", attributes, options);
  return BookingModel;
};