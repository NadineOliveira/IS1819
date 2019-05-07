var Sequelize = require('sequelize')

var sequelize = new Sequelize('hospital', 'root', 'goleador', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    define: {
      timestamps: false
    }
})
  
  
sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
})

module.exports = sequelize