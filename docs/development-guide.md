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
- Vercel PostgreSQL is used for database management
- Database setup:
  1. PostgreSQL database created in Vercel project settings
  2. Connection string stored in POSTGRES_PRISMA_URL environment variable
  3. Database migrations implemented using Prisma Migrate
  4. Prisma ORM used for database operations

## Implementing New Features

When implementing new features, follow these steps:

1. Create a new branch for the feature
2. Update the relevant documentation (e.g., `docs/features.md`, `docs/game_design.md`)
3. Implement the feature, following the project conventions
4. Write tests for the new feature
5. Update the changelog in `docs/changelog.md`
6. Create a pull request for review

## Code Review Process

1. All code changes must be reviewed by at least one other developer
2. Use GitHub's pull request feature for code reviews
3. Reviewers should check for:
   - Adherence to project conventions
   - Code quality and performance
   - Proper error handling
   - Adequate test coverage
   - Documentation updates

## Performance Considerations

- Use React.memo for components that render often but rarely change
- Implement virtualization for long lists (e.g., leaderboards, card collections)
- Optimize images and assets for web delivery
- Use code splitting and lazy loading for larger features

## Accessibility Guidelines

- Ensure all interactive elements are keyboard accessible
- Use appropriate ARIA attributes for custom components
- Maintain a color contrast ratio of at least 4.5:1 for text
- Provide text alternatives for non-text content

## Localization

- Use a translation management system (e.g., i18next) for managing translations
- Keep all user-facing strings in separate localization files
- Use context for translations that may change based on gender or plurality

## Security Best Practices

- Implement proper input validation and sanitization
- Use HTTPS for all network requests
- Store sensitive information (e.g., API keys) in environment variables
- Implement rate limiting for API routes to prevent abuse

## Continuous Integration and Deployment

- Set up GitHub Actions for automated testing and linting
- Configure Vercel for automatic deployments on merges to the main branch
- Use feature flags for gradual rollout of new features

Remember to update this guide as new development processes or best practices are introduced to the project.

## Asset Management

- We prefer WebP format for images due to its superior compression and quality
- Store WebP images in `src/assets/images/`
- Use Next.js `Image` component, which automatically handles WebP serving and fallbacks
- For converting images to WebP, use [tool of choice, e.g., Sharp]

## Image Handling

Our project supports various image formats including WebP, AVIF, PNG, JPEG, GIF, and SVG. 

- Prefer using WebP or AVIF for best performance when possible.
- Use PNG for images requiring transparency.
- JPEG is suitable for photographs without transparency.
- GIF can be used for simple animations.
- SVG is great for icons and logos that need to scale.

When using the Next.js `Image` component, it will automatically optimize and serve the most appropriate format based on the browser's capabilities.

Example usage:

```
jsx
import Image from 'next/image';
import logo from '@/assets/images/ui/logo.svg';
const Header = () => (
<Image
src={logo}
alt="Bigfoot War Logo"
width={200}
height={100}
/>
);
```

For external images, make sure to add the domain to the `domains` array in `next.config.mjs`.