module.exports = function(sequelize, DataTypes) {
  const BudgetLineItem = sequelize.define("BudgetLineItem", {
    desc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vendor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estimated_cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    actual_cost: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  BudgetLineItem.associate = function(models) {
    models.BudgetLineItem.belongsTo(models.BudgetCategory, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    models.BudgetLineItem.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return BudgetLineItem;
};
