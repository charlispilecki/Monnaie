module.exports = function(sequelize, DataTypes) {
    const Task = sequelize.define("Task", {
      taskDesc: {
        type: DataTypes.STRING,
        allowNull: false
        },
      dueDate: {
        type: DataTypes.STRING,
        allowNull: false
      },
      completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    });
  
    Task.associate = function (models) {
      models.Task.belongsTo(models.User, {
        onDelete: 'CASCADE',
        foreignKey: {
          allowNull: false 
        }
      });
    };
  
    return Task;
  };