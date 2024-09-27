# Project Conventions

## Component Directory Structure
Ensure all reusable components are placed in the `src/components` directory.

## Page Directory Structure
Ensure all page components are placed in the `src/app` directory.

## Global Styles
Ensure global styles are defined in `src/app/globals.css`.

## Configuration Files
Ensure configuration files are in the root directory.

## CSS Class Naming
Ensure CSS classes follow BEM naming convention.

## Import Paths
Ensure import paths use aliases defined in `jsconfig.json`.

## Tailwind CSS Usage
Ensure Tailwind CSS classes are used for styling.

## Data and Content Reference Files
Ensure all data and content used in the app are placed into reference files.

## Internationalization
Ensure all text strings are internationalized.

## Chakra UI
- Wrap your application with `ChakraProvider` in `src/app.js`.
- Use Chakra UI components for building accessible and responsive user interfaces.

## Zustand
- Create stores using Zustand in the `src/store` directory.
- Use Zustand for lightweight state management.

## React Hook Form
- Use React Hook Form for efficient form state and validation management.
- Create form components in the `src/components` directory.

## Framer Motion
- Use Framer Motion for smooth animations and transitions.
- Create animated components in the `src/components` directory.

## React Query
- Wrap your application with `QueryClientProvider` in `src/app.js`.
- Use React Query for optimized data fetching, caching, and synchronization.

## React Icons
- Use React Icons for a comprehensive set of icons in reusable UI components.
- Create icon components in the `src/components` directory.

## ESLint
- Extend from `next/core-web-vitals` in `.eslintrc.json`.

## Tailwind CSS
- Configure in `tailwind.config.js`.
- Use `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;` in `src/app/globals.css`.

## Git Ignore
- Use `.gitignore` to exclude unnecessary files.
  - Example: `node_modules`, `.next`, `build`, etc.

## PostCSS
- Configure in `postcss.config.mjs`.

## Next.js Configuration
- Configure in `next.config.mjs`.

## Example: Adding a New Component

1. Create a new file in `src/components`:
```javascript:src/components/Button.js
import React from 'react';

export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="btn">
      {children}
    </button>
  );
}
```

## Coding Style
- Use functional components with hooks
- Prefer arrow functions for component definitions
- Use destructuring for props
- Use async/await for asynchronous operations
- Follow ESLint rules defined in the project

## Git Workflow
- Use feature branches for new features or bug fixes
- Write clear, concise commit messages
- Create pull requests for code review before merging to main branch

## Vercel-specific Conventions

- Use `vercel.json` for Vercel-specific configurations when needed
- Utilize Vercel's environment variables for sensitive information
- Follow Vercel's naming conventions for serverless functions
- Use Vercel's preview deployments for testing changes before merging to main

## UI Design Conventions

When creating or updating UI elements in the game, follow these guidelines:

1. Use Chakra UI components for consistent styling and responsiveness.

2. Button styling:
   - Use `size="lg"` for consistent button sizes
   - Set `width="full"` for full-width buttons
   - Apply colorful gradients using `bgGradient` prop
   - Implement hover effects with `_hover` prop
   - Ensure white text color for better contrast

3. Layout:
   - Use `VStack` for vertical layouts with consistent spacing
   - Wrap content in `Box` components with custom styling

4. Typography:
   - Use the "Press Start 2P" font for headings and button text
   - Apply appropriate text colors (usually white) for good contrast

5. Animations:
   - Implement subtle animations for interactive elements
   - Use Chakra UI's built-in transition props or Framer Motion for more complex animations

6. Consistency:
   - Maintain a consistent color scheme across related UI elements
   - Use similar styling for buttons with similar functions

Example button styling:

```javascript
<Button
  size="lg"
  width="full"
  colorScheme="blue"
  bgGradient="linear(to-r, blue.400, blue.600)"
  _hover={{
    bgGradient: "linear(to-r, blue.500, blue.700)",
  }}
  onClick={handleAction}
  color="white"
>
  Button Text
</Button>
```

Follow these conventions to ensure a cohesive and visually appealing user interface throughout the game.

## Image Implementation

When implementing images in our Next.js project, follow these guidelines:

1. Store image assets in the `src/assets/images` directory.

2. Import images in your component files using the following syntax:
   ```javascript
   import imageName from '@/assets/images/image-file-name.extension';
   ```

3. Use the Next.js `Image` component to display images:
   ```javascript
   import Image from 'next/image';

   // In your JSX:
   <Image
     src={imageName}
     alt="Descriptive alt text"
     width={width}
     height={height}
     // Or use 'fill' prop for responsive images:
     // fill
     // style={{ objectFit: 'cover' }}
   />
   ```

4. For responsive images that should fill their container:
   ```javascript
   <Box position="relative" width="100%" height="300px">
     <Image
       src={imageName}
       alt="Descriptive alt text"
       fill
       style={{ objectFit: 'cover' }}
     />
   </Box>
   ```

5. Always provide descriptive `alt` text for accessibility.

6. Use the `width` and `height` props when the image dimensions are known, or use the `fill` prop for images that should responsively fill their container.

7. Optimize images for web use before adding them to the project. Consider using WebP format for better performance.

By following these conventions, we ensure consistent and optimized image implementation across our project.

## State Management Conventions

1. Use Zustand for global state management
2. Create separate stores for different domains (e.g., userStore, gameStore)
3. Use the `create` function from Zustand to create stores
4. Implement actions within the store to modify state
5. Use the `useStore` hook to access state in components
6. Avoid using React's `useState` for global state
7. Use the `persist` middleware for stores that need to persist data
8. Keep store implementations in the `src/store/` directory
9. Use custom hooks in `src/hooks/` to encapsulate common state-related logic
10. When updating state, always use the store's actions rather than modifying state directly

## Character Image Conventions
1. Character images should be stored in the `src/assets/images/characters` directory
2. Image file names should follow the format: `character_name.png` (e.g., `sasquatch.png`)
3. Images should be in PNG format with transparent backgrounds
4. Recommended image dimensions: 256x256 pixels
5. Player character images should face right
6. NPC opponent images will be automatically flipped to face left in the game
7. When referencing images in the database, use relative paths from the project root (e.g., `/assets/images/characters/sasquatch.png`)