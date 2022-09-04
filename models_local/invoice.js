const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    InvoiceID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "InvoiceID"
    },
    Invoice: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Invoice"
    }
  };
  const options = {
    tableName: "invoice",
    comment: "",
    indexes: []
  };
  const InvoiceModel = sequelize.define("invoice_model", attributes, options);
  return InvoiceModel;
};