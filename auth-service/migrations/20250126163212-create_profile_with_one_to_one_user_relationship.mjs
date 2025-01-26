'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('profiles', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        references: {
          model: 'users',
          key: 'username'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      college: {
        type: Sequelize.STRING,
        allowNull: false
      },
      school: {
        type: Sequelize.STRING,
        allowNull: false
      },
      degree: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // Add indexes
    await queryInterface.addIndex('profiles', ['username']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('profiles');
  }
};
