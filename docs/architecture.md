# Project Architecture

## Overview
This project is a Next.js application that leverages several modern libraries and tools to create a robust, scalable, and maintainable codebase for the Bigfoot War game. It is deployed and hosted on Vercel for optimal performance and ease of management.

## Tech Stack
- **Frontend Framework**: Next.js
- **UI Library**: Chakra UI
- **State Management**: Zustand
- **Data Fetching**: React Query
- **Form Handling**: React Hook Form
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment Platform**: Vercel
- **Database**: Vercel PostgreSQL

## Project Structure
- `src/`
  - `components/`: Reusable UI components
  - `app/`: Page components and routing, including the main authentication flow
  - `store/`: Zustand stores for state management
  - `data/`: JSON files for game data (e.g., bigfoots.json)
  - `styles/`: Global styles and Chakra UI theme customization

## Data Flow
- Local state managed by Zustand
- Server state and API calls handled by React Query
- Form state managed by React Hook Form

## Conventions
- Component naming: PascalCase
- File naming: kebab-case
- CSS: Chakra UI props and Tailwind CSS classes

## Testing Strategy
(To be implemented)

## Deployment
The project is deployed on Vercel, which provides the following benefits:
- Automatic deployments triggered by pushes to the main branch
- Preview deployments for pull requests
- Serverless functions for backend logic
- Environment variable management
- Custom domain setup
- Analytics and monitoring
- Global CDN for improved performance

### Deployment Process
1. Code is pushed to the GitHub repository
2. Vercel automatically detects changes and initiates the build process
3. Next.js build is executed (`next build`)
4. Vercel deploys the built assets to its global edge network
5. The new version of the site is instantly available worldwide

### Environment Variables
Sensitive configuration values are stored as environment variables in the Vercel dashboard, ensuring they're kept secure and separate from the codebase.

### Monitoring and Analytics
Vercel provides built-in analytics and monitoring tools to track the application's performance, user behavior, and overall health.

## Example Usage
### Adding a New Component
1. Create a new file in `src/components`:
```
// src/components/MyNewComponent.js
import React from 'react';

const MyNewComponent = () => {
  return <div>My New Component</div>;
};

export default MyNewComponent;
```

### Adding a New Page
1. Create a new file in `src/app`:
```
// src/app/my-new-page.js
import React from 'react';

const MyNewPage = () => {
  return <div>My New Page</div>;
};
```

### Adding a New Store
1. Create a new file in `src/store`:
```
// src/store/my-new-store.js
import { create } from 'zustand';

const useMyNewStore = create((set) => ({
  myState: 'initialValue',  
  setMyState: (value) => set({ myState: value }),
}));

export default useMyNewStore;
```

### Adding a New Data File
1. Create a new file in `src/data`:
```
// src/data/my-new-data.js
const myNewData = {
  key: 'value',
};

export default myNewData;
```

### Adding a New Locale
1. Create a new file in `src/locales`:
```
// src/locales/en.js
const en = {
  translation: {
    myNewKey: 'My New Value',
  },
};

export default en;
```

### Adding a New Icon
1. Create a new file in `src/icons`:
``` 
// src/icons/my-new-icon.js
import { Icon } from '@chakra-ui/react';
import { MyNewIcon } from 'react-icons/my-new-icon';

const MyNewIconButton = () => {
  return <Icon as={MyNewIcon} />;
};

export default MyNewIconButton; 
```

## Vercel-specific Configuration
The `next.config.mjs` file includes Vercel-specific optimizations:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['your-image-domain.com'], // Add any domains you're loading images from
  },
};

export default nextConfig;
```

This configuration enables React strict mode, uses SWC for minification, and sets up image optimization for any external domains used for images.


## API Architecture

Our Next.js API routes are deployed as serverless functions on Vercel. This provides several benefits:

- Automatic scaling: Each API route scales independently based on demand.
- Isolation: API routes are isolated, improving security and reliability.
- Easy deployment: API routes are automatically deployed with the rest of the Next.js application.
- Environment variable support: Sensitive information can be securely stored and accessed.
- Performance optimization: Vercel optimizes API routes for low latency and fast cold starts.

API routes are located in the `src/app/api` directory and follow Next.js 13+ conventions for routing and handling requests.

## Database Schema
(To be implemented)
- User table: Stores user credentials and profile information
- Game data tables: For storing game-related information (e.g., character data, game sessions)
