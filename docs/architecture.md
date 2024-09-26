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
  - `hooks/`: Custom hooks, including useAuth and useStrings

## Data Flow
- Local state managed by Zustand
- Server state and API calls handled by React Query
- Form state managed by React Hook Form

## Database Schema
The database schema has been updated to include the Character model:

```prisma
model User {
  id            String   @id @default(uuid())
  username      String   @unique
  email         String?  @unique
  password      String
  xp            Int      @default(0)
  level         Int      @default(1)
  characters    Character[]
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

model Character {
  id            String   @id @default(uuid())
  name          String
  type          String
  location      String
  habitat       String
  description   String
  attacks       Json
  specialAttacks Json
  hp            Int
  dp            Int
  luck          Int
  level         Int      @default(1)
  user          User     @relation(fields: [userId], references: [id])
  userId        String
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
```

## API Architecture
Our Next.js API routes are deployed as serverless functions on Vercel. This provides several benefits:

- Automatic scaling: Each API route scales independently based on demand.
- Isolation: API routes are isolated, improving security and reliability.
- Easy deployment: API routes are automatically deployed with the rest of the Next.js application.
- Environment variable support: Sensitive information can be securely stored and accessed.
- Performance optimization: Vercel optimizes API routes for low latency and fast cold starts.

API routes are located in the `src/app/api` directory and follow Next.js 13+ conventions for routing and handling requests.

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
