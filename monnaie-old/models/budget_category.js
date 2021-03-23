module.exports = function(sequelize, DataTypes) {
  const BudgetCategory = sequelize.define('BudgetCategory', {
    desc: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  BudgetCategory.associate = function (models) {
    models.BudgetCategory.hasMany(models.BudgetLineItem);
    models.BudgetCategory.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: true // Note: We will allow null because we have default categories which are not customized by user
      }
    });
  };

  return BudgetCategory;
};
