# Bigfoot Character Selection Implementation Plan

1. Update the database schema:
   - Modify the `BigfootPlayer` model in Prisma to include an `isSelected` field.

2. Update `src/data/strings/strings.json`:
   - Add new strings for the Bigfoot selection feature, including labels, button text, and messages.

3. Update `src/store/bigfootPlayerStore.js` using Zustand:
   - Implement actions for fetching bigfoot players and updating selection.
   - Include state for available bigfoot players and selected bigfoot.
   - Use Zustand's `create` function to create the store.

4. Create a `BigfootSelection` component in `src/components/BigfootSelection.js`:
   - Use Chakra UI components for layout and styling.
   - Implement a grid view of available bigfoot players using `Grid` and `GridItem`.
   - Display bigfoot player information (image, name, type, basic stats) using `Box`, `Image`, and `Text`.
   - Implement selection functionality with `Button`.
   - Use Framer Motion for subtle animations on hover and selection.
   - Utilize the `useStrings` hook for all displayed text.
   - Use the Zustand store (`useBigfootPlayerStore`) for state management.

5. Update the `bigfoot-players` API route in `src/app/api/bigfoot-players/route.js`:
   - Modify GET to include the `isSelected` status.
   - Implement PUT to handle updating the `isSelected` status.

6. Update the Lobby component in `src/components/Lobby.js`:
   - Add a "My Bigfoots" button to the existing lobby options.
   - Use Chakra UI's `Button` component with appropriate styling.
   - Implement navigation to the bigfoot selection screen.
   - Use the `useStrings` hook for button text.

7. Create a new page for bigfoot selection in `src/app/my-bigfoots/page.js`:
   - Use the `BigfootSelection` component here.
   - Implement proper metadata and layout according to App Router conventions.
   - Use the `useStrings` hook for page title and any additional text.

8. Update the pre-game screen (assuming it's in `src/app/game/page.js`):
   - Display the currently selected bigfoot player using the Zustand store.
   - Add an option to change the bigfoot player before starting the game.
   - Use the `useStrings` hook for all displayed text.

9. Update the game logic in `src/app/game/[id]/page.js`:
   - Ensure the game uses the selected bigfoot player's stats and abilities from the Zustand store.

10. Update the player profile in `src/app/profile/page.js`:
    - Display the player's current bigfoot player selection using the Zustand store.
    - Use the `useStrings` hook for all displayed text.

11. Implement basic bigfoot unlocking logic:
    - For now, make all bigfoot players available in the Zustand store.
    - We can implement proper unlocking mechanics later.

This plan focuses on integrating the Bigfoot character selection feature into our existing app structure, ensuring consistency with our UI/UX decisions and project conventions. It leverages Zustand for state management, Chakra UI for styling, Framer Motion for animations, and our custom strings hook system for text management. The plan provides a solid foundation that we can build upon later when we're ready to implement more advanced features like character unlocking and tutorials.
