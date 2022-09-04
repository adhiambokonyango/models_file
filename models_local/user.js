const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    FirstName: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "FirstName"
    },
    MiddleName: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "MiddleName"
    },
    LastName: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "LastName"
    },
    UserID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "UserID"
    },
    PFNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PFNumber"
    },
    MobileNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "MobileNumber"
    },
    Gender: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Gender"
    },
    Email: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Email"
    },
    IDNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "IDNumber"
    },
    Scale: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Scale"
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
    },
    SectionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "SectionID",
      references: {
        key: "SectionID",
        model: "section_model"
      }
    },
    RegionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "RegionID",
      references: {
        key: "RegionID",
        model: "region_model"
      }
    }
  };
  const options = {
    tableName: "user",
    comment: "",
    indexes: [{
      name: "user_department_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["DepartmentID"]
    }, {
      name: "user_office_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["OfficeID"]
    }, {
      name: "user_region_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["RegionID"]
    }, {
      name: "user_section_null_fk",
      unique: false,
      type: "BTREE",
      fields: ["SectionID"]
    }]
  };
  const UserModel = sequelize.define("user_model", attributes, options);
  return UserModel;
};