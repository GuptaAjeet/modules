const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mhrdprabandh', 'postgres', 'postgres', {
  dialect: 'postgres',
  host: '10.23.252.74',
  port: 5433,
});

module.exports = sequelize;
