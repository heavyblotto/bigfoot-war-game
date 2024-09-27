# Bigfoot Player System Design

## Overview
The Bigfoot Player System is a core component of our game, allowing players to select, manage, and battle with various Bigfoot characters. This system leverages the extensive data provided in the `bigfoots.json` file to create a rich and diverse gameplay experience.

## Implementation Details

1. Database Schema:
   - The `BigfootPlayer` model includes an `isSelected` field to track the currently selected bigfoot.

2. BigfootSelection Component:
   - Located at `src/components/BigfootSelection.js`.
   - Displays a grid of available bigfoot characters.
   - Shows character information (image, name, type, basic stats).
   - Implements selection functionality.

3. Bigfoot Player Store:
   - Located at `src/store/bigfootPlayerStore.js`.
   - Manages state for available bigfoot players and the selected bigfoot.
   - Provides actions for fetching bigfoot players and updating selection.

4. API Endpoints:
   - GET `/api/bigfoot-players`: Fetch all available bigfoot players.
   - PUT `/api/bigfoot-players/[id]`: Update a bigfoot player's details, including selection status.

5. Bigfoot Player Hook:
   - Located at `src/hooks/useBigfootPlayer.js`.
   - Provides easy access to bigfoot player functionality for components.

6. Main Menu Update:
   - A "My Bigfoot" button links to the bigfoot selection screen.

## Next Steps
- Implement bigfoot unlocking mechanics.
- Integrate bigfoot selection into the battle system.
- Develop a bigfoot progression and leveling system.
