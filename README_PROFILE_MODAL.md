# ProfileModal Component

## Overview
The ProfileModal component is a responsive modal that displays user profile information and navigation options. It follows the same pattern as the NotificationsModal and opens when clicking on the ProfileAvatar component.

## Features

### UI Components
- **Profile Section**: Displays user avatar, name, and professional details
- **Profile Performance**: Shows performance metrics with interactive cards
- **Navigation Menu**: Quick access to subscriptions, settings, FAQs, and logout

### Responsive Design
- Mobile-first approach with responsive breakpoints
- Modal positioning adapts to screen size
- Touch-friendly interface on mobile devices

### Accessibility
- Keyboard navigation support (ESC to close)
- Focus management
- Screen reader friendly

## Usage

### Basic Implementation
```tsx
import ProfileModal from '@/components/shared/ProfileModal';

const [isModalOpen, setIsModalOpen] = useState(false);

<ProfileModal 
  isOpen={isModalOpen} 
  onClose={() => setIsModalOpen(false)}
/>
```

### With ProfileAvatar Integration
The ProfileAvatar component automatically includes the ProfileModal:

```tsx
import ProfileAvatar from '@/components/shared/ProfileAvatar';

<ProfileAvatar name="John Doe" src="/path/to/avatar.png" />
```

## Data Sources

### User Data
- Profile information from `src/data/profile.ts`
- Performance stats from `src/data/profilePerformanceStats.ts`

### Constants
- Text content from `src/constants/siteconfig.ts` (PROFILE_MODAL object)

### Styling
- Uses CSS variables from `src/app/globals.css`
- Follows the project's design system
- Purple accent colors for performance metrics

## Component Structure

```
ProfileModal
├── Header (Title + Close button)
├── Profile Section
│   ├── Avatar + Name
│   ├── Professional details
│   └── "View & Update Profile" link
├── Performance Section
│   ├── "See who searched you" card
│   └── "Connections" card
└── Navigation Items
    ├── Explore Subscriptions
    ├── Settings
    ├── FAQ's
    └── Log Out
```

## Customization

### Adding New Navigation Items
1. Add the item text to `PROFILE_MODAL` in `siteconfig.ts`
2. Add the icon and styling in the ProfileModal component

### Modifying Performance Metrics
1. Update the data in `src/data/profilePerformanceStats.ts`
2. Add corresponding SVG icons in `src/components/svgs/`

### Styling Changes
- Use CSS variables from `globals.css` for consistent theming
- Follow the existing color scheme and spacing patterns

## Technical Details

### Props Interface
```tsx
interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonRef?: React.RefObject<HTMLButtonElement | null>;
}
```

### Event Handling
- Click outside to close
- ESC key to close
- Proper cleanup of event listeners

### Performance
- Conditional rendering (only renders when open)
- Efficient re-renders with proper dependency arrays
- Optimized image loading with Next.js Image component 