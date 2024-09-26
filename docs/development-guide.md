# Development Guide

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up the database:
   - Create a Vercel PostgreSQL database
   - Set the `POSTGRES_PRISMA_URL` environment variable
   - Run migrations: `npx prisma migrate dev`
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Workflow
1. Create a new branch for your feature or bug fix
2. Implement your changes, following the project conventions
3. Write tests for your code (once testing framework is set up)
4. Run linter: `npm run lint`
5. Commit your changes with a clear message
6. Create a pull request for review

## Key Files and Directories
- `src/app/page.js`: Main entry point of the application
- `src/components/`: Reusable UI components
- `src/store/`: Zustand stores for state management
- `src/data/`: JSON files for game data
- `src/hooks/`: Custom hooks, including useAuth and useStrings

## State Management
- Use Zustand for global state management
- Create stores in `src/store/` directory
- Use hooks from `src/hooks/` to access and modify state
- Avoid using local component state for data that should be shared across components
- When creating new features, consider if the state should be local or global
- Use the `useAuth` hook for authentication-related state and actions

## Adding New Features
1. Update the game design document if necessary
2. Create new components in `src/components/`
3. Update or create new Zustand stores if needed
4. Implement the feature logic using proper state management techniques
5. Update the features list in `docs/features.md`

## Database Management
- Vercel PostgreSQL is used for database management
- Database setup:
  1. PostgreSQL database created in Vercel project settings
  2. Connection string stored in POSTGRES_PRISMA_URL environment variable
  3. Database migrations implemented using Prisma Migrate
  4. Prisma ORM used for database operations

## Implementing Character System Features
When implementing new features for the character system:

1. Use the `Character` model in Prisma for database operations
2. Create or update Zustand stores for managing character state
3. Implement API routes for character-related operations
4. Use the `useAuth` hook for user authentication in character-related features
5. Implement UI components using Chakra UI for consistent styling
6. Use the `useStrings` hook for managing text content

## Centralized Text Management
To manage text strings centrally, we use a JSON-based approach combined with a custom hook. All text strings are stored in `src/data/strings/strings.json` and accessed via the `useStrings` hook.

### Adding New Text Strings
1. Open `src/data/strings/strings.json`
2. Add your new text strings under the appropriate category (e.g., titles, labels, messages, tooltips)

### Using Text Strings in Components
1. Import the `useStrings` hook:
   ```javascript
   import useStrings from '@/hooks/useStrings';
   ```
2. Access the text strings:
   ```javascript
   const { labels, messages, tooltips } = useStrings();
   ```
3. Use the text strings in your component:
   ```javascript
   <label>{labels.username}</label>
   ```

This approach ensures that all text strings are managed centrally, making it easy to update text without changing the code.

## Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Chakra UI Documentation](https://chakra-ui.com/docs/getting-started)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Query Documentation](https://tanstack.com/query/latest/docs/react/overview)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Vercel Documentation](https://vercel.com/docs)