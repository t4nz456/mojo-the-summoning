# MOJO: The Summoning

_Mojo: The Summoning_ is a card-collecting game where players battle 1 on 1 using their decks of Cards.

This is an existing codebase that your team have already been working on. You will be working in the `server` folder to set up the database layer. You will need to configure Sequelize, and then define and test models and associations.

## Connection to Sequelize

Once you have the project locally on your machine, you're ready to start work.

### Install dependencies

 - `cd` into the `server` directory
 - Then, use `npm` to install the `sqlite3`, `sequlize` and `jest` packages.

**Warning:** Make sure you `cd` into `server` first! This project has multiple folders and you do not want to install dependencies into the wrong one.

### Configure your connection

 - In `server/src/db/` create your `config.js` file and connect to your database using Sequelize.

## Define models

Work in the `server/src/models` directory.

### User

```mermaid
classDiagram
  class User {
    +int id
    +string username
  }
```

(This file has been created but is empty.)

### Decks

```mermaid
classDiagram
  class Deck {
    +int id
    +string name
    +integer xp
  }
```

(This file does not exist. You need to create it in the `models` directory.)

### Cards

```mermaid
classDiagram
  class Card {
    +int id
    +string name
    +int mojo
    +int stamina
  }
```

### Attacks

```mermaid
classDiagram
  class Attack {
    +int id
    +string title
    +int mojoCost
    +int staminaCost
  }
```

### Test

 - One test file has been started for you in `models/User.test.js`.
 - Continue to write unit tests which check that each of your models functions correctly.
 - Run the tests with `npm run test`

## Define relationships

```mermaid
classDiagram
  class User {
    +int id
    +string username
  }
  class Deck {
    +int id
    +string name
    +integer xp
  }
  class Card {
    +int id
    +string name
    +int mojo
    +int stamina
  }
  class Attack {
    +int id
    +string title
    +int mojoCost
    +int staminaCost
  }
  User "1" o-- "1" Deck : owns
  Deck "1" *-- "*" Card : contains
  Card "*" o-- "*" Attack : has
```

You should set up the associations in `models/index.js`.

### User/Deck

Each User may create and name exactly one Deck.

E.g. A User `gandalf` might create a Deck called `The Fellowship`.

 - Associate users and decks with a one-to-one relationship.
 - Add tests to check the association.

### Deck/Card

Each Deck may contain many Cards. A Card may only belong to one Deck.

E.g. `The Fellowship` might contain Cards called `Lizard Wizard` and `Bulk Brogan`. (Two Decks might contain Cards with the same name, but these are considered different Cards, and would have different IDs.)

### Card/Attack

Each Card may have many Attacks. Each Attack may belong to many Cards.

E.g. Lizard Wizard and Bulk Brogan might both have a `Charge` attack. Lizard Wizard might have a `Thunderbolt` and `Bulk Brogan` a `Piledriver`.
