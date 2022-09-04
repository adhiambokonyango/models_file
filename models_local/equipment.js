const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    EquipmentID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "EquipmentID"
    },
    Equipment: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Equipment"
    },
    Manufacturer: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Manufacturer"
    },
    Make: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Make"
    }
  };
  const options = {
    tableName: "equipment",
    comment: "",
    indexes: []
  };
  const EquipmentModel = sequelize.define("equipment_model", attributes, options);
  return EquipmentModel;
};