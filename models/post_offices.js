const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "post_id"
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name"
    },
    office_code: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "office_code"
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "category"
    },
    region: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "region"
    }
  };
  const options = {
    tableName: "post_offices",
    comment: "",
    indexes: []
  };
  const PostOfficesModel = sequelize.define("post_offices_model", attributes, options);
  return PostOfficesModel;
};