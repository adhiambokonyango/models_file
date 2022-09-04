const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    DepartmentID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "DepartmentID"
    },
    Department: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Department"
    },
    OfficeID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "OfficeID",
      references: {
        key: "OfficeID",
        model: "office_model"
      }
    }
  };
  const options = {
    tableName: "department",
    comment: "",
    indexes: [{
      name: "department_office_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["OfficeID"]
    }]
  };
  const DepartmentModel = sequelize.define("department_model", attributes, options);
  return DepartmentModel;
};