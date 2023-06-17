'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class submission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  submission.init({
    user_id: DataTypes.INTEGER,
    form_id: DataTypes.INTEGER,
    uploaded_file: DataTypes.TEXT,
    description: DataTypes.STRING,
    created_at: DataTypes.DATE,
    update_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'submission',
  });
  return submission;
};