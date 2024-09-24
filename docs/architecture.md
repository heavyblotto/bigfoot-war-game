# Project Architecture

## Overview
This project is a Next.js application that leverages several modern libraries and tools to create a robust, scalable, and maintainable codebase for the Bigfoot War game.

## Tech Stack
- **Frontend Framework**: Next.js
- **UI Library**: Chakra UI
- **State Management**: Zustand
- **Data Fetching**: React Query
- **Form Handling**: React Hook Form
- **Animations**: Framer Motion
- **Icons**: React Icons

## Project Structure
- `src/`
  - `components/`: Reusable UI components
  - `app/`: Page components and routing
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
(To be determined)

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




