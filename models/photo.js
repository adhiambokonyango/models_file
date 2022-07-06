const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    PhotoID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "PhotoID"
    },
    Photo: {
      type: nvarchar(max),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Photo"
    }
  };
  const options = {
    tableName: "photo",
    comment: "",
    indexes: []
  };
  const PhotoModel = sequelize.define("photo_model", attributes, options);
  return PhotoModel;
};