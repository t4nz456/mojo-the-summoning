// create your User model here
const { db, Model, DataTypes } = require('Sequelize');
const sequelize = require('./config');

const Deck = db.define('Deck', {
    id: { type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: db.Sequelize.STRING, allowNull: false },
    xp: { type: db.Sequelize.INTEGER, defaultValue: 0 }
});
  


const Card = db.define('Card', {
    id: { type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: db.Sequelize.STRING, allowNull: false },
    mojo: { type: db.Sequelize.INTEGER, allowNull: false },
    stamina: { type: db.Sequelize.INTEGER, allowNull: false },
    imgUrl: { type: db.Sequelize.STRING, allowNull: false }
});
  

  
  

const Attack = db.define('Attack', {
    id: { type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: db.Sequelize.STRING, allowNull: false },
    mojoCost: { type: db.Sequelize.INTEGER, allowNull: false },
    staminaCost: { type: db.Sequelize.INTEGER, allowNull: false }
});
  
  

module.exports = Attack;
module.exports = Card;
module.exports = Deck;
