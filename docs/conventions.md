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