# Development Guide

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Workflow
1. Create a new branch for your feature or bug fix
2. Implement your changes, following the project conventions
3. Write tests for your code (once testing framework is set up)
4. Run linter: `npm run lint`
5. Commit your changes with a clear message
6. Create a pull request for review

## Key Files and Directories
- `src/app/page.js`: Main entry point of the application, implements basic authentication flow
- `src/components/`: Reusable UI components
- `src/store/`: Zustand stores for state management
- `src/data/`: JSON files for game data

## Adding New Features
1. Update the game design document if necessary
2. Create new components in `src/components/`
3. Update or create new Zustand stores if needed
4. Implement the feature logic
5. Update the features list in `docs/features.md`

## Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Chakra UI Documentation](https://chakra-ui.com/docs/getting-started)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Query Documentation](https://tanstack.com/query/latest/docs/react/overview)

## Vercel Deployment

1. Sign up for a Vercel account if you haven't already
2. Connect your GitHub repository to Vercel
3. Configure your project settings in the Vercel dashboard
4. Set up environment variables for different deployment environments
5. Deploy your application using the Vercel CLI or GitHub integration

For more details, refer to the [Vercel documentation](https://vercel.com/docs).

## Database Management
- Vercel PostgreSQL will be used for database management
- To set up the database:
  1. Create a new PostgreSQL database in your Vercel project settings
  2. Use the provided connection string in your application
  3. Implement database migrations for schema changes
  4. Use an ORM like Prisma for database operations
