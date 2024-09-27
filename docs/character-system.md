# Bigfoot Character System Design

## Overview
The Bigfoot Character System is a core component of our game, allowing players to select, manage, and battle with various Bigfoot characters. This system leverages the extensive data provided in the `bigfoots.json` file to create a rich and diverse gameplay experience.

## Implementation Plan

1. Database Schema Update:
   - Add a `selectedCharacterId` field to the `User` model in Prisma.

2. CharacterSelection Component:
   - Create a new component for displaying and selecting characters.
   - Implement a grid or carousel view of available characters.
   - Display character information (image, name, type, basic stats).
   - Implement selection functionality.

3. Character Store Update:
   - Update `src/store/characterStore.js` to include:
     - State for available characters and selected character.
     - Actions for fetching characters and updating selection.

4. New API Endpoints:
   - GET `/api/characters`: Fetch all available characters.
   - PUT `/api/users/[id]/selected-character`: Update user's selected character.

5. Main Menu Update:
   - Add a "Characters" or "My Bigfoot" button linking to the character selection screen.

6. Character Selection Page:
   - Create a new page at `/characters` or `/my-bigfoot`.
   - Utilize the `CharacterSelection` component.

7. Pre-game Screen Update:
   - Display the currently selected character.
   - Add an option to change the character before starting the game.

8. Basic Character Unlocking:
   - Initially, make all characters available.
   - Implement proper unlocking mechanics in future iterations.

9. Game Logic Update:
   - Ensure the game uses the selected character's stats and abilities.

10. Player Profile Update:
    - Display the player's current character selection.

## Character Attributes
Each Bigfoot character has the following attributes:

1. Name
2. Type (e.g., Dwarf, Squatch, Giant)
3. Location
4. Habitat
5. Description
6. Attacks (Hearts, Spades, Diamonds, Clubs)
7. Special Attacks (Jack, Queen, King, Ace, and Joker cards)
8. Image URL (for visual representation in the game)

## Character Stats
In addition to the attributes from `bigfoots.json`, each character has:

1. Health Points (HP)
2. Defense Points (DP)
3. Luck

## Character Visuals
Each character has an associated image:
- Player characters use an image facing right
- NPC opponents use the same image flipped horizontally (facing left)
- Images are stored in the `src/assets/images/characters` directory
- The image path is stored in the `imageUrl` field of the `BigfootPlayer` and `NPCOpponent` models

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
Update the User model in the database schema:

```prisma
model User {
  id                  String   @id @default(uuid())
  username            String   @unique
  email               String?  @unique
  password            String
  xp                  Int      @default(0)
  level               Int      @default(1)
  characters          Character[]
  selectedCharacterId String?
  selectedCharacter   Character? @relation("SelectedCharacter", fields: [selectedCharacterId], references: [id])
  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt
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
  selectedByUser User?   @relation("SelectedCharacter")
  imageUrl      String
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
```

This design provides a comprehensive foundation for implementing the Bigfoot Character Selection system, ensuring an engaging gameplay experience centered around unique Bigfoot characters.
