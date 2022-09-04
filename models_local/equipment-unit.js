const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    UnitID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "UnitID"
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
    },
    SerialNumber: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "SerialNumber"
    },
    InvoiceID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "InvoiceID",
      references: {
        key: "InvoiceID",
        model: "invoice_model"
      }
    }
  };
  const options = {
    tableName: "equipment-unit",
    comment: "",
    indexes: [{
      name: "equipment-unit_equipment_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["EquipmentID"]
    }, {
      name: "equipment-unit_invoice_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["InvoiceID"]
    }]
  };
  const EquipmentUnitModel = sequelize.define("equipment-unit_model", attributes, options);
  return EquipmentUnitModel;
};