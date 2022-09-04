const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    SectionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "SectionID"
    },
    Section: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Section"
    },
    DepartmentID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "DepartmentID",
      references: {
        key: "DepartmentID",
        model: "department_model"
      }
    }
  };
  const options = {
    tableName: "section",
    comment: "",
    indexes: [{
      name: "section_department_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["DepartmentID"]
    }]
  };
  const SectionModel = sequelize.define("section_model", attributes, options);
  return SectionModel;
};