# Bigfoot Player System Design

## Overview
The Bigfoot Player System is a core component of our game, allowing players to select, manage, and battle with various Bigfoot characters. This system leverages the extensive data provided in the `bigfoots.json` file to create a rich and diverse gameplay experience.

## Implementation Details

1. Database Schema:
   - The `BigfootPlayer` model includes an `isSelected` field to track the currently selected bigfoot.
   - Added `level` and `experience` fields to the `BigfootPlayer` model.

2. BigfootSelection Component:
   - Located at `src/components/BigfootSelection.js`.
   - Displays a grid of available bigfoot characters.
   - Shows character information (image, name, type, basic stats, level, and experience).
   - Implements selection functionality.

3. Bigfoot Player Store:
   - Located at `src/store/bigfootPlayerStore.js`.
   - Manages state for available bigfoot players and the selected bigfoot.
   - Provides actions for fetching bigfoot players, updating selection, and adding experience.

4. API Endpoints:
   - GET `/api/bigfoot-players`: Fetch all available bigfoot players.
   - PUT `/api/bigfoot-players/[id]`: Update a bigfoot player's details, including selection status.
   - POST `/api/bigfoot-players/[id]/add-experience`: Add experience to a bigfoot player and handle leveling up.

5. Bigfoot Player Hook:
   - Located at `src/hooks/useBigfootPlayer.js`.
   - Provides easy access to bigfoot player functionality for components.

6. Game Flow Integration:
   - Created `src/app/character-selection/page.js` to integrate BigfootSelection into the game flow
   - BigfootSelection is now accessible as a separate route in the game flow
   - Next step: Implement navigation to this page from the Main Menu

## Next Steps
- Integrate bigfoot selection into the battle system.
- Implement bigfoot unlocking mechanics.
- Create a more detailed character stats page.
- Add visual feedback when a character levels up.
- Implement character customization features.
