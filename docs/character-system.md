# Bigfoot Character System Design

## Overview
The Bigfoot Character System is a core component of our game, allowing players to unlock, manage, and battle with various Bigfoot characters. This system leverages the extensive data provided in the `bigfoots.json` file to create a rich and diverse gameplay experience.

## Player Attributes
Players (associated with the user account) earn experience points and unlock characters. XP is earned by winning battles and completing other activities. XP is used to level up characters and is expressed in integer values. The overall player Level is calculated based on XP (e.g., 100 XP = Level 1, 200 XP = Level 2, etc.)

## Bigfoot Player Characters and Non-Player Characters (NPCs)
Players can select a Bigfoot character from their collection for battles. They can also select NPC Bigfoot characters (opponents) to battle against. Opponents are unlocked as the player progresses through the game. Players can select the difficulty of opponents based on their current level.

Player's Bigfoot Characters level up as the player earns XP, unlocking more abilities and improving stats at higher levels.

## Character Attributes
Each Bigfoot character has the following attributes:

1. Name
2. Type (e.g., Dwarf, Squatch, Giant)
3. Location
4. Habitat
5. Description
6. Attacks (Hearts, Spades, Diamonds, Clubs)
7. Special Attacks (Jack, Queen, King, Ace, and Joker cards)

## Character Stats
In addition to the attributes from `bigfoots.json`, each character has:

1. Health Points (HP)
2. Defense Points (DP)
3. Luck

## Character Progression
Characters level up through experience points gained from battles and other activities.

## Opponent Progression
NPC opponents are unlocked as players progress, with difficulty levels based on the player's level.

## Character Collection
Players can view, sort, and filter their collected Bigfoot characters, and set their active character.

## Unlocking Mechanics
Characters can be unlocked through story progression, challenges, random drops from battles, and special events.

## Character Customization
Players can customize their Bigfoot characters with special items that modify abilities.

## Integration with Combat System
The character system integrates with the combat system, influencing performance through stats, special abilities, and type advantages/disadvantages.

## Data Management
Character data is stored using:
1. Zustand for local state management
2. Vercel PostgreSQL for server-side storage and synchronization
3. Regular updates for adding new characters or balancing existing ones

## Database Schema
The character system is represented in the database with the following models:

```prisma
model User {
  id            String   @id @default(uuid())
  username      String   @unique
  email         String?  @unique
  password      String
  xp            Int      @default(0)
  level         Int      @default(1)
  characters    Character[]
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

model Character {
  id            String   @id @default(uuid())
  name          String
  type          String
  location      String
  habitat       String
  description   String
  attacks       Json
  specialAttacks Json
  hp            Int
  dp            Int
  luck          Int
  level         Int      @default(1)
  user          User     @relation(fields: [userId], references: [id])
  userId        String
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
```

This design provides a comprehensive foundation for the Bigfoot Character System, ensuring an engaging gameplay experience centered around unique Bigfoot characters.
