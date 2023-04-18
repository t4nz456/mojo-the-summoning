# Mojo: The Summoning

## User stories

As a **User**:

 - I can create a **Deck** with a custom name, so that I can have my own identity.

 - I can add and remove **Cards** to/from my Deck, so that I can battle against others.

 - I can increment the xp of my Deck, so that I can become more powerful.

 - I can view the Attacks my Cards have, so that I can choose which one to use.

## Non-functional Requirements

 1. The database layer is implemented in sqlite

 1. Use Sequelize ORM for database interactions

 1. Use Github for version control: commit small and often, with frequent pull requests

 1. Ready to share progress and insights on Friday PM

## Functional Requirements

It is recommended to approach these in the given order, testing as you go.

You can mark them done by changing -[ ] to -[x].

-[ ] Users can be created with username. The system provides them with an id on creation.

-[ ] A User can create a Deck with a name, and an initial default xp of 0. The deck is given an id on creation.

-[ ] The Deck and the User are associated (i.e. the user can retrieve their deck).

-[ ] The xp of a Deck can be increased.

-[ ] Cards can be created with the properties shown in the class diagram. The Card is given an id on creation.

-[ ] Attacks can be created with the properties shown in the class diagram. The Attack is given an id on creation.

-[ ] Each card may have many Attacks. Given a card, we can retrieve its attacks.

-[ ] Each Attack belongs to only one card. Given an Attack, we can retrive the Card it features on.

-[ ] Each Deck may have many Cards. Given a deck, we can retrieve its cards.

-[ ] Each card may belong to many decks. Given a card, we can retrieve the decks it belongs to.
