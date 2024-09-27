# Bigfoot Character Selection Implementation Plan

1. Update the database schema:
   - Modify the `BigfootPlayer` model in Prisma to include an `isSelected` field.

2. Update `src/store/bigfootPlayerStore.js` using Zustand:
   - Implement actions for fetching bigfoot players and updating selection.
   - Include state for available bigfoot players and selected bigfoot.
   - Use Zustand's `create` function to create the store.

3. Update the `bigfoot-players` API route in `src/app/api/bigfoot-players/route.js`:
   - Modify GET to include the `isSelected` status.
   - Implement PUT to handle updating the `isSelected` status.

4. Create a `BigfootSelection` component in `src/components/BigfootSelection.js`:
   - Use Chakra UI components for layout and styling.
   - Implement a grid view of available bigfoot players using `Grid` and `GridItem`.
   - Display bigfoot player information (image, name, type, basic stats) using `Box`, `Image`, and `Text`.
   - Implement selection functionality with `Button`.
   - Use Framer Motion for subtle animations on hover and selection.
   - Add necessary strings to `src/data/strings/strings.json` as the component is built.
   - Utilize the `useStrings` hook for all displayed text.
   - Use the Zustand store (`useBigfootPlayerStore`) for state management.

5. Update the Lobby component in `src/components/Lobby.js`:
   - Add a "My Bigfoots" button to the existing lobby options.
   - Use Chakra UI's `Button` component with appropriate styling.
   - Implement navigation to the bigfoot selection screen.
   - Add necessary strings to `src/data/strings/strings.json`.
   - Use the `useStrings` hook for button text.

6. Create a new page for bigfoot selection in `src/app/my-bigfoots/page.js`:
   - Use the `BigfootSelection` component here.
   - Implement proper metadata and layout according to App Router conventions.
   - Add necessary strings to `src/data/strings/strings.json`.
   - Use the `useStrings` hook for page title and any additional text.

7. Update the pre-game screen (assuming it's in `src/app/game/page.js`):
   - Display the currently selected bigfoot player using the Zustand store.
   - Add an option to change the bigfoot player before starting the game.
   - Add necessary strings to `src/data/strings/strings.json`.
   - Use the `useStrings` hook for all displayed text.

8. Update the game logic in `src/app/game/[id]/page.js`:
   - Ensure the game uses the selected bigfoot player's stats and abilities from the Zustand store.
   - Add any necessary game-related strings to `src/data/strings/strings.json`.

9. Update the player profile in `src/app/profile/page.js`:
   - Display the player's current bigfoot player selection using the Zustand store.
   - Add necessary strings to `src/data/strings/strings.json`.
   - Use the `useStrings` hook for all displayed text.

10. Implement basic bigfoot unlocking logic:
    - For now, make all bigfoot players available in the Zustand store.
    - We can implement proper unlocking mechanics later.

This plan focuses on integrating the Bigfoot character selection feature into our existing app structure, ensuring consistency with our UI/UX decisions and project conventions. It leverages Zustand for state management, Chakra UI for styling, Framer Motion for animations, and our custom strings hook system for text management. By adding strings as we develop each component, we ensure that all necessary text is captured and properly aligned with the implementation. This approach provides a solid foundation that we can build upon later when we're ready to implement more advanced features like character unlocking and tutorials.
