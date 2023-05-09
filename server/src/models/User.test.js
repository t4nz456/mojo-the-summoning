const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('.')
const db = require('../db/config')

// define in global scope
let user

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await User.create({ username: 'gandalf' })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('User', () => {
  it('has an id', async () => {
    expect(user).toHaveProperty('id')
  })

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})

const Deck = require('./User.js').Deck;

describe('Deck', () => {
  beforeAll(async () => {
    await db.sync();
  });

  afterEach(async () => {
    await Deck.destroy({ where: {} });
  });

  afterAll(async () => {
    await db.close();
  });

  it('creates a new deck with the correct attributes', async () => {
    const deck = await Deck.create({
      name: 'Test Deck',
      xp: 10
    });

    expect(deck.name).toEqual('Test Deck');
    expect(deck.xp).toEqual(10);
  });

  it('updates an existing deck with the correct attributes', async () => {
    const deck = await Deck.create({
      name: 'Test Deck',
      xp: 10
    });

    const updatedDeck = await deck.update({
      name: 'Updated Deck',
      xp: 20
    });

    expect(updatedDeck.name).toEqual('Updated Deck');
    expect(updatedDeck.xp).toEqual(20);
  });

  it('deletes an existing deck', async () => {
    const deck = await Deck.create({
      name: 'Test Deck',
      xp: 10
    });

    await deck.destroy();

    const result = await Deck.findAll();

    expect(result.length).toEqual(0);
  });
});

const Card = require('./User.js').Card;

describe('Card', () => {
  beforeAll(async () => {
    await db.sync();
  });

  afterEach(async () => {
    await Card.destroy({ where: {} });
  });

  afterAll(async () => {
    await db.close();
  });

  it('creates a new card with the correct attributes', async () => {
    const card = await Card.create({
      name: 'Test Card',
      mojo: 10,
      stamina: 5,
      imgUrl: 'https://example.com/test.jpg'
    });

    expect(card.name).toEqual('Test Card');
    expect(card.mojo).toEqual(10);
    expect(card.stamina).toEqual(5);
    expect(card.imgUrl).toEqual('https://example.com/test.jpg');
  });

  it('updates an existing card with the correct attributes', async () => {
    const card = await Card.create({
      name: 'Test Card',
      mojo: 10,
      stamina: 5,
      imgUrl: 'https://example.com/test.jpg'
    });

    const updatedCard = await card.update({
      name: 'Updated Card',
      mojo: 20,
      stamina: 10,
      imgUrl: 'https://example.com/updated.jpg'
    });

    expect(updatedCard.name).toEqual('Updated Card');
    expect(updatedCard.mojo).toEqual(20);
    expect(updatedCard.stamina).toEqual(10);
    expect(updatedCard.imgUrl).toEqual('https://example.com/updated.jpg');
  });

  it('deletes an existing card', async () => {
    const card = await Card.create({
      name: 'Test Card',
      mojo: 10,
      stamina: 5,
      imgUrl: 'https://example.com/test.jpg'
    });

    await card.destroy();

    const result = await Card.findAll();

    expect(result.length).toEqual(0);
  });
});

const Attack = require('./User.js').Attack;

describe('Attack', () => {
  beforeAll(async () => {
    await db.sync();
  });

  afterEach(async () => {
    await Attack.destroy({ where: {} });
  });

  afterAll(async () => {
    await db.close();
  });

  it('creates a new attack with the correct attributes', async () => {
    const attack = await Attack.create({
      title: 'Test Attack',
      mojoCost: 5,
      staminaCost: 2
    });

    expect(attack.title).toEqual('Test Attack');
    expect(attack.mojoCost).toEqual(5);
    expect(attack.staminaCost).toEqual(2);
  });

  it('updates an existing attack with the correct attributes', async () => {
    const attack = await Attack.create({
      title: 'Test Attack',
      mojoCost: 5,
      staminaCost: 2
    });

    const updatedAttack = await attack.update({
      title: 'Updated Attack',
      mojoCost: 10,
      staminaCost: 5
    });

    expect(updatedAttack.title).toEqual('Updated Attack');
    expect(updatedAttack.mojoCost).toEqual(10);
    expect(updatedAttack.staminaCost).toEqual(5);
  });

  it('deletes an existing attack', async () => {
    const attack = await Attack.create({
      title: 'Test Attack',
      mojoCost: 5,
      staminaCost: 2
    });

    await attack.destroy();

    const result = await Attack.findAll();

    expect(result.length).toEqual(0);
  });
});


