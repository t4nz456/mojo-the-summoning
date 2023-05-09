const { User } = require('./User');
// import the rest of your models above

const { Card } = require('./User');
const { Deck } = require('./User');
const { Attack } = require('./User');

//set up the associations here


class User extends Model {}
User.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  xp: DataTypes.INTEGER
}, { sequelize, modelName: 'user1' });

User.hasOne(Deck);

const user1 = await User.findByPk(1);
const deck1 = await user1.getDeck();
console.log(deck1.name);

const user2 = await User.findByPk(1);
const deck2 = await Deck.create({ name: 'My Deck', xp: 0 });
await user2.setDeck(deck2);
console.log(deck2.userId); 


class Deck extends Model {}
Deck.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  xp: DataTypes.INTEGER
}, { sequelize, modelName: 'deck' });

Deck.hasMany(Card);

const deck = await Deck.findByPk(1);
const cards = await deck.getCards();
console.log(cards.length);

const deck3 = await Deck.findByPk(1);
const card = await Card.create({ name: 'My Card', mojo: 10, stamina: 20, imgUrl: 'https://example.com/image.jpg' });
await deck3.addCard(card);
console.log(card.deckId);

const CardAttack = db.define('card_attack', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });
  
  Card.belongsToMany(Attack, { through: CardAttack });
  Attack.belongsToMany(Card, { through: CardAttack });
  



  
  
  

// and then export them all below
module.exports = User;
module.exports = Deck;

