# Project Architecture

## Overview
This project is a Next.js application that leverages several modern libraries and tools to create a robust, scalable, and maintainable codebase. The application is structured to ensure clear separation of concerns, ease of development, and adherence to best practices.

## Components
- **Button**: A reusable button component.
- **AnimatedBox**: A box component with animations using Framer Motion.
- **MyForm**: A form component utilizing React Hook Form for state and validation management.
- **MyIconButton**: An icon button component using Chakra UI and React Icons.

## Data Flow
The data flow in the project is managed using Zustand for state management and React Query for data fetching, caching, and synchronization. Zustand provides a simple and scalable way to manage local state, while React Query handles server state efficiently.

## Libraries

### Chakra UI
Chakra UI is used for building accessible and responsive user interfaces. It provides a set of components that follow best practices for accessibility and design.

### Zustand
Zustand is used for lightweight state management. It provides a simple and scalable way to manage state in the application.

### React Hook Form
React Hook Form is used for efficient form state and validation management. It provides a performant and easy-to-use API for handling form inputs and validation.

### Framer Motion
Framer Motion is used for smooth animations and transitions. It provides a powerful and flexible API for creating animations and transitions in the application.

### React Query
React Query is used for optimized data fetching, caching, and synchronization. It provides a set of hooks for managing server state in the application.

### React Icons
React Icons provides a comprehensive set of icons for reusable UI components. It includes a wide range of icons from popular icon libraries.

## Directory Structure
- **src/components**: Contains all reusable components.
- **src/app**: Contains all page components and global styles.
- **src/store**: Contains Zustand stores for state management.
- **src/data**: Contains reference files for data and content.
- **src/locales**: Contains files for internationalization.

## Configuration
- **jsconfig.json**: Defines import path aliases.
- **next.config.mjs**: Configuration for Next.js.
- **postcss.config.mjs**: Configuration for PostCSS.
- **.eslintrc.json**: Configuration for ESLint.

## Styling
- **Tailwind CSS**: Used for styling with utility-first classes. Configured in `tailwind.config.js` and used in `src/app/globals.css`.

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




