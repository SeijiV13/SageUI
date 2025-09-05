# Avatar

Avatars display user profile pictures, initials, or placeholder images. They're essential for user interfaces and can show online status, user roles, and more.

## Basic Usage

The most basic avatar uses the `.avatar` class with an image or initials.

<div class="demo-container">
  <div class="flex items-center gap-4">
    <div class="avatar">
      <div class="w-12 rounded-full">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="Avatar">
      </div>
    </div>
    <div class="avatar placeholder">
      <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
        <span class="text-lg">JD</span>
      </div>
    </div>
  </div>
</div>

```html
<!-- Image avatar -->
<div class="avatar">
  <div class="w-12 rounded-full">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="Avatar">
  </div>
</div>

<!-- Avatar with initials -->
<div class="avatar placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
    <span class="text-lg">JD</span>
  </div>
</div>
```

## Variants

### Sizes

SageUI avatars support multiple sizes from extra small to extra large.

<div class="demo-container">
  <div class="demo-title">Avatar Sizes</div>
  <div class="flex items-center gap-4">
    <div class="avatar">
      <div class="w-6 rounded-full">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="Avatar">
      </div>
    </div>
    <div class="avatar">
      <div class="w-8 rounded-full">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="Avatar">
      </div>
    </div>
    <div class="avatar">
      <div class="w-12 rounded-full">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="Avatar">
      </div>
    </div>
    <div class="avatar">
      <div class="w-16 rounded-full">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="Avatar">
      </div>
    </div>
    <div class="avatar">
      <div class="w-20 rounded-full">
        <img src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="Avatar">
      </div>
    </div>
  </div>
</div>

```html
<!-- Extra small -->
<div class="avatar">
  <div class="w-6 rounded-full">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Avatar">
  </div>
</div>

<!-- Small -->
<div class="avatar">
  <div class="w-8 rounded-full">
    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Avatar">
  </div>
</div>

<!-- Medium -->
<div class="avatar">
  <div class="w-12 rounded-full">
    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Avatar">
  </div>
</div>

<!-- Large -->
<div class="avatar">
  <div class="w-16 rounded-full">
    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Avatar">
  </div>
</div>

<!-- Extra large -->
<div class="avatar">
  <div class="w-20 rounded-full">
    <img src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Avatar">
  </div>
</div>
```

### Shapes

```html
<!-- Round (default) -->
<div class="sage-avatar">
  <div class="w-12 rounded-full">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Avatar">
  </div>
</div>

<!-- Square -->
<div class="sage-avatar">
  <div class="w-12 rounded">
    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Avatar">
  </div>
</div>

<!-- Rounded square -->
<div class="sage-avatar">
  <div class="w-12 rounded-lg">
    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Avatar">
  </div>
</div>
```

## Placeholder Avatars

### With Initials

```html
<!-- Single initial -->
<div class="sage-avatar placeholder">
  <div class="bg-primary text-primary-content rounded-full w-12">
    <span class="text-xl font-semibold">J</span>
  </div>
</div>

<!-- Multiple initials -->
<div class="sage-avatar placeholder">
  <div class="bg-secondary text-secondary-content rounded-full w-12">
    <span class="text-sm font-semibold">JD</span>
  </div>
</div>

<!-- With different colors -->
<div class="flex gap-2">
  <div class="sage-avatar placeholder">
    <div class="bg-success text-success-content rounded-full w-12">
      <span>AB</span>
    </div>
  </div>
  
  <div class="sage-avatar placeholder">
    <div class="bg-warning text-warning-content rounded-full w-12">
      <span>CD</span>
    </div>
  </div>
  
  <div class="sage-avatar placeholder">
    <div class="bg-error text-error-content rounded-full w-12">
      <span>EF</span>
    </div>
  </div>
</div>
```

### With Icons

```html
<!-- User icon -->
<div class="sage-avatar placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  </div>
</div>

<!-- Company/organization icon -->
<div class="sage-avatar placeholder">
  <div class="bg-info text-info-content rounded-full w-12">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  </div>
</div>
```

## Status Indicators

### Online Status

```html
<!-- Online -->
<div class="sage-avatar online">
  <div class="w-16 rounded-full">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Avatar">
  </div>
</div>

<!-- Offline -->
<div class="sage-avatar offline">
  <div class="w-16 rounded-full">
    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Avatar">
  </div>
</div>

<!-- Custom status badge -->
<div class="relative">
  <div class="sage-avatar">
    <div class="w-16 rounded-full">
      <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Avatar">
    </div>
  </div>
  <div class="absolute bottom-0 right-0">
    <div class="sage-badge sage-badge-xs sage-badge-success border-2 border-base-100"></div>
  </div>
</div>
```

## Avatar Groups

### Stacked Avatars

```html
<div class="sage-avatar-group -space-x-6">
  <div class="sage-avatar border-2 border-base-100">
    <div class="w-12 rounded-full">
      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Avatar 1">
    </div>
  </div>
  <div class="sage-avatar border-2 border-base-100">
    <div class="w-12 rounded-full">
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Avatar 2">
    </div>
  </div>
  <div class="sage-avatar border-2 border-base-100">
    <div class="w-12 rounded-full">
      <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Avatar 3">
    </div>
  </div>
  <div class="sage-avatar placeholder border-2 border-base-100">
    <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
      <span class="text-xs">+2</span>
    </div>
  </div>
</div>
```

### Avatar List

```html
<div class="space-y-3">
  <div class="flex items-center gap-3">
    <div class="sage-avatar">
      <div class="w-10 rounded-full">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Avatar">
      </div>
    </div>
    <div>
      <div class="font-semibold">John Doe</div>
      <div class="text-sm text-base-content/70">Software Engineer</div>
    </div>
  </div>
  
  <div class="flex items-center gap-3">
    <div class="sage-avatar">
      <div class="w-10 rounded-full">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Avatar">
      </div>
    </div>
    <div>
      <div class="font-semibold">Jane Smith</div>
      <div class="text-sm text-base-content/70">Product Manager</div>
    </div>
  </div>
</div>
```

## Interactive Avatars

```html
<!-- Clickable avatar -->
<button class="sage-avatar hover:scale-105 transition-transform">
  <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Profile">
  </div>
</button>

<!-- Avatar with dropdown -->
<div class="dropdown dropdown-end">
  <label tabindex="0" class="sage-avatar cursor-pointer">
    <div class="w-10 rounded-full">
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Menu">
    </div>
  </label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Profile</a></li>
    <li><a>Settings</a></li>
    <li><a>Logout</a></li>
  </ul>
</div>
```

## TypeScript Usage

```typescript
import { Avatar } from 'sageui';

// Create an avatar instance
const avatar = new Avatar({
  src: 'path/to/avatar.jpg',
  alt: 'User Avatar',
  size: 'md',
  shape: 'circle',
  fallback: 'JD', // Initials fallback
  status: 'online'
});

// Render to container
avatar.render(document.getElementById('avatar-container'));

// Update properties
avatar.setSrc('new-avatar.jpg');
avatar.setSize('lg');
avatar.setStatus('offline');
avatar.setFallback('JS');

// Handle image loading errors
avatar.onError(() => {
  console.log('Avatar image failed to load, showing fallback');
});

avatar.onLoad(() => {
  console.log('Avatar image loaded successfully');
});

// Click handling for interactive avatars
avatar.onClick((event) => {
  console.log('Avatar clicked');
  // Show profile menu, navigate to profile, etc.
});

// Create avatar group
const avatarGroup = new AvatarGroup({
  avatars: [
    { src: 'avatar1.jpg', alt: 'User 1' },
    { src: 'avatar2.jpg', alt: 'User 2' },
    { src: 'avatar3.jpg', alt: 'User 3' }
  ],
  max: 3,
  size: 'sm',
  spacing: 'tight'
});

avatarGroup.render(document.getElementById('avatar-group-container'));
```

## Accessibility

- Always provide meaningful `alt` text for avatar images
- Use proper contrast for text overlays on colored backgrounds
- Ensure interactive avatars are keyboard accessible
- Use ARIA labels for status indicators
- Consider screen reader users when using avatars in lists
- Provide fallback content when images fail to load

## CSS Classes

| Class | Description |
|-------|-------------|
| `sage-avatar` | Base avatar container |
| `sage-avatar-group` | Container for multiple avatars |
| `placeholder` | Styles for text/icon avatars |
| `online` | Online status indicator |
| `offline` | Offline status indicator |

## Examples

### User Profile Header

```html
<div class="card w-full max-w-md bg-base-100 shadow-xl">
  <div class="card-body items-center text-center">
    <div class="relative">
      <div class="sage-avatar online">
        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=96&q=80" alt="User Profile">
        </div>
      </div>
      <button class="absolute bottom-0 right-0 sage-btn sage-btn-circle sage-btn-sm sage-btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </button>
    </div>
    
    <div class="text-center">
      <h2 class="card-title">Sarah Johnson</h2>
      <p class="text-base-content/70">UX Designer</p>
      <div class="flex items-center gap-1 justify-center mt-1">
        <div class="sage-badge sage-badge-xs sage-badge-success"></div>
        <span class="text-sm text-success">Available</span>
      </div>
    </div>
    
    <div class="card-actions">
      <button class="sage-btn sage-btn-primary">Message</button>
      <button class="sage-btn sage-btn-outline">View Profile</button>
    </div>
  </div>
</div>
```

### Team Members List

```html
<div class="card w-full bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Team Members</h2>
    
    <div class="space-y-4">
      <div class="flex items-center justify-between p-3 rounded-lg hover:bg-base-200 transition-colors">
        <div class="flex items-center gap-3">
          <div class="sage-avatar online">
            <div class="w-12 rounded-full">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Team Member">
            </div>
          </div>
          <div>
            <div class="font-semibold">Alex Chen</div>
            <div class="text-sm text-base-content/70">Frontend Developer</div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="sage-badge sage-badge-primary sage-badge-sm">Admin</div>
          <button class="sage-btn sage-btn-ghost sage-btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div class="flex items-center justify-between p-3 rounded-lg hover:bg-base-200 transition-colors">
        <div class="flex items-center gap-3">
          <div class="sage-avatar">
            <div class="w-12 rounded-full">
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Team Member">
            </div>
          </div>
          <div>
            <div class="font-semibold">Maria Rodriguez</div>
            <div class="text-sm text-base-content/70">Backend Developer</div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="sage-badge sage-badge-secondary sage-badge-sm">Member</div>
          <button class="sage-btn sage-btn-ghost sage-btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div class="flex items-center justify-between p-3 rounded-lg hover:bg-base-200 transition-colors opacity-60">
        <div class="flex items-center gap-3">
          <div class="sage-avatar offline">
            <div class="w-12 rounded-full">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Team Member">
            </div>
          </div>
          <div>
            <div class="font-semibold">David Kim</div>
            <div class="text-sm text-base-content/70">Designer • Last seen 2h ago</div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="sage-badge sage-badge-ghost sage-badge-sm">Offline</div>
        </div>
      </div>
    </div>
    
    <div class="card-actions justify-center mt-6">
      <button class="sage-btn sage-btn-outline sage-btn-sm">
        Invite Members
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </div>
  </div>
</div>
```
