const User = require('./User');
const Deck = require('./Deck');

describe('User and Deck association', () => {
  beforeAll(async () => {
    await db.sync();
  });

  afterEach(async () => {
    await User.destroy({ where: {} });
    await Deck.destroy({ where: {} });
  });

  afterAll(async () => {
    await db.close();
  });

  it('creates a new user with a deck', async () => {
    const user = await User.create({
      name: 'John',
      xp: 0,
      deck: {
        name: 'My Deck',
        xp: 0
      }
    }, {
      include: Deck
    });

    expect(user.name).toEqual('John');
    expect(user.xp).toEqual(0);
    expect(user.deck.name).toEqual('My Deck');
    expect(user.deck.xp).toEqual(0);
  });

  it('retrieves a user with their deck', async () => {
    const user = await User.create({
      name: 'John',
      xp: 0
    });

    const deck = await Deck.create({
      name: 'My Deck',
      xp: 0,
      userId: user.id
    });

    const userWithDeck = await User.findByPk(user.id, { include: Deck });

    expect(userWithDeck.name).toEqual('John');
    expect(userWithDeck.xp).toEqual(0);
    expect(userWithDeck.deck.name).toEqual('My Deck');
    expect(userWithDeck.deck.xp).toEqual(0);
  });
});

const Deck = require('./Deck');
const Card = require('./Card');

describe('Deck and Card association', () => {
  beforeAll(async () => {
    await db.sync();
  });

  afterEach(async () => {
    await Deck.destroy({ where: {} });
    await Card.destroy({ where: {} });
  });

  afterAll(async () => {
    await db.close();
  });

  it('creates a new deck with cards', async () => {
    const deck = await Deck.create({
      name: 'My Deck',
      xp: 0,
      cards: [
        { name: 'Card 1', mojo: 10, stamina: 20, imgUrl: 'https://example.com/image1.jpg' },
        { name: 'Card 2', mojo: 20, stamina: 30, imgUrl: 'https://example.com/image2.jpg' }
      ]
    }, {
      include: Card
    });

    expect(deck.name).toEqual('My Deck');
    expect(deck.xp).toEqual(0);
    expect(deck.cards.length).toEqual(2);
    expect(deck.cards[0].name).toEqual('Card 1');
    expect(deck.cards[0].mojo).toEqual(10);
    expect(deck.cards[0].stamina).toEqual(20);
    expect(deck.cards[0].imgUrl).toEqual('https://example.com/image1.jpg');
    expect(deck.cards[1].name).toEqual('Card 2');
    expect(deck.cards[1].mojo).toEqual(20);
    expect(deck.cards[1].stamina).toEqual(30);
    expect(deck.cards[1].imgUrl).toEqual('https://example.com/image2.jpg');
  });

  it('retrieves a deck with its cards', async () => {
    const deck = await Deck.create({
      name: 'My Deck',
      xp: 0
    });

    const card1 = await Card.create({
      name: 'Card 1',
      mojo: 10,
      stamina: 20,
      imgUrl: 'https://example.com/image1.jpg',
      deckId: deck.id
    });

    const card2 = await Card.create({
      name: 'Card 2',
      mojo: 20,
      stamina: 30,
      imgUrl: 'https://example.com/image2.jpg',
      deckId: deck.id
    });

    const deckWithCards = await Deck.findByPk(deck.id, { include: Card });

    expect(deckWithCards.name).toEqual('My Deck');
    expect(deckWithCards.xp).toEqual(0);
    expect(deckWithCards.cards.length).toEqual(2);
    expect(deckWithCards.cards[0].name).toEqual('Card 1');
    expect(deckWithCards.cards[0].mojo).toEqual(10);
    expect(deckWithCards.cards[0].stamina).toEqual(20);
    expect(deckWithCards.cards[0].imgUrl).toEqual('https://example.com/image1.jpg');
    expect(deckWithCards.cards[1].name).toEqual('Card 2');
    expect(deckWithCards.cards[1].mojo).toEqual(20);
    expect(deckWithCards.cards[1].stamina).toEqual(30);
    expect(deckWithCards.cards[1].imgUrl).toEqual('https://example.com/image2.jpg');
  });
});


const Card = require('./Card');
const Attack = require('./Attack');
const CardAttack = require('./CardAttack');

describe('Card and Attack association', () => {
  beforeAll(async () => {
    await db.sync();
  });

  afterEach(async () => {
    await Card.destroy({ where: {} });
    await Attack.destroy({ where: {} });
    await CardAttack.destroy({ where: {} });
  });

  afterAll(async () => {
    await db.close();
  });

  it('creates a card with attacks', async () => {
    const card = await Card.create({
      name: 'My Card',
      mojo: 10,
      stamina: 20,
      imgUrl: 'https://example.com/image.jpg',
      attacks: [
        { title: 'Attack 1', mojoCost: 5, staminaCost: 10 },
        { title: 'Attack 2', mojoCost: 10, staminaCost: 15 }
      ]
    }, {
      include: Attack
    });

    expect(card.name).toEqual('My Card');
    expect(card.mojo).toEqual(10);
    expect(card.stamina).toEqual(20);
    expect(card.imgUrl).toEqual('https://example.com/image.jpg');
    expect(card.attacks.length).toEqual(2);
    expect(card.attacks[0].title).toEqual('Attack 1');
    expect(card.attacks[0].mojoCost).toEqual(5);
    expect(card.attacks[0].staminaCost).toEqual(10);
    expect(card.attacks[1].title).toEqual('Attack 2');
    expect(card.attacks[1].mojoCost).toEqual(10);
    expect(card.attacks[1].staminaCost).toEqual(15);
  });

  it('retrieves a card with its attacks', async () => {
    const card = await Card.create({
      name: 'My Card',
      mojo: 10,
      stamina: 20,
      imgUrl: 'https://example.com/image.jpg'
    });

    const attack1 = await Attack.create({
      title: 'Attack 1',
      mojoCost: 5,
      staminaCost: 10
    });

    const attack2 = await Attack.create({
      title: 'Attack 2',
      mojoCost: 10,
      staminaCost: 15
    });

    await card.addAttack(attack1);
    await card.addAttack(attack2);

    const cardWithAttacks = await Card.findByPk(card.id, { include: Attack });

    expect(cardWithAttacks.name).toEqual('My Card');
    expect(cardWithAttacks.mojo).toEqual(10);
    expect(cardWithAttacks.stamina).toEqual(20);
    expect(cardWithAttacks.imgUrl).toEqual('https://example.com/image.jpg');
    expect(cardWithAttacks.attacks.length).toEqual(2);
    expect(cardWithAttacks.attacks[0].title).toEqual('Attack 1');
    expect(cardWithAttacks.attacks[0].mojoCost).toEqual(5);
    expect(cardWithAttacks.attacks[0].staminaCost).toEqual(10);
    expect(cardWithAttacks.attacks[1].title).toEqual('Attack 2');
    expect(cardWithAttacks.attacks[1].mojoCost).toEqual(10);
    expect(cardWithAttacks.attacks[1].staminaCost).toEqual(15);
  });
});
