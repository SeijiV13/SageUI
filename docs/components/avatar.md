# Avatar

Avatars display user profile pictures, initials, or placeholder images. They're essential for user interfaces and can show online status, user roles, and more.

## Basic Usage

The most basic avatar uses the `.avatar` class with an image or initials.

<div class="demo-container">
  <div class="flex items-center gap-4">
    <div class="avatar">
      <div class="w-12 rounded-full">
        <img src="/assets/avatar1.jpg" alt="Avatar">
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
    <img src="/assets/avatar1.jpg" alt="Avatar">
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
        <img src="/assets/avatar1.jpg" alt="Avatar">
      </div>
    </div>
    <div class="avatar">
      <div class="w-8 rounded-full">
        <img src="/assets/avatar1.jpg" alt="Avatar">
      </div>
    </div>
    <div class="avatar">
      <div class="w-12 rounded-full">
        <img src="/assets/avatar1.jpg" alt="Avatar">
      </div>
    </div>
    <div class="avatar">
      <div class="w-16 rounded-full">
        <img src="/assets/avatar1.jpg" alt="Avatar">
      </div>
    </div>
    <div class="avatar">
      <div class="w-20 rounded-full">
        <img src="/assets/avatar1.jpg" alt="Avatar">
      </div>
    </div>
  </div>
</div>

```html
<!-- Extra small -->
<div class="avatar">
  <div class="w-6 rounded-full">
    <img src="/assets/avatar1.jpg" alt="Avatar">
  </div>
</div>

<!-- Small -->
<div class="avatar">
  <div class="w-8 rounded-full">
    <img src="/assets/avatar1.jpg" alt="Avatar">
  </div>
</div>

<!-- Medium -->
<div class="avatar">
  <div class="w-12 rounded-full">
    <img src="/assets/avatar1.jpg" alt="Avatar">
  </div>
</div>

<!-- Large -->
<div class="avatar">
  <div class="w-16 rounded-full">
    <img src="/assets/avatar1.jpg" alt="Avatar">
  </div>
</div>

<!-- Extra large -->
<div class="avatar">
  <div class="w-20 rounded-full">
    <img src="/assets/avatar1.jpg" alt="Avatar">
  </div>
</div>
```

### Shapes

<div class="demo-container">
<div class="avatar">
  <div class="w-12 rounded-full">
    <img src="/assets/avatar1.jpg" alt="Avatar">
  </div>
</div>

<!-- Square -->
<div class="avatar">
  <div class="w-12 square-full">
    <img src="/assets/avatar1.jpg" alt="Avatar">
  </div>
</div>

<!-- Rounded square -->
<div class="avatar">
  <div class="w-12 rounded-lg">
    <img src="/assets/avatar1.jpg" alt="Avatar">
  </div>
</div>

</div>

```html
<!-- Round (default) -->
<div class="avatar">
  <div class="w-12 rounded-full">
    <img src="avatar.jpg" alt="Avatar">
  </div>
</div>

<!-- Square -->
<div class="avatar">
  <div class="w-12 rounded">
    <img src="avatar.jpg" alt="Avatar">
  </div>
</div>

<!-- Rounded square -->
<div class="avatar">
  <div class="w-12 rounded-lg">
    <img src="avatar.jpg" alt="Avatar">
  </div>
</div>
```


## Status Indicators

### Online Status

<div class="demo-container">
<!-- Online -->
<div class="avatar">
  <div class="online"></div>
  <div class="w-16 rounded-full">
    <img src="/assets/avatar2.jpg" alt="Avatar">
  </div>
</div>
 &nbsp;
<!-- Offline -->
<div class="avatar">
  <div class="offline"></div>
  <div class="w-16 rounded-full">
    <img src="/assets/avatar2.jpg" alt="Avatar">
  </div>
</div>

</div>

```html
<!-- Online -->
<!-- Online -->
<div class="avatar">
  <div class="online"></div>
  <div class="w-16 rounded-full">
    <img src="/assets/avatar2.jpg" alt="Avatar">
  </div>
</div>

<!-- Offline -->
<div class="avatar">
  <div class="offline"></div>
  <div class="w-16 rounded-full">
    <img src="/assets/avatar2.jpg" alt="Avatar">
  </div>
</div>
```


## Interactive Avatars

<div class="demo-container">
<!-- Clickable avatar -->
<button class="avatar hover:scale-105 transition-transform">
  <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="/assets/avatar1.jpg" alt="Profile">
  </div>
</button>
</div>

```html
<!-- Clickable avatar -->
<button class="avatar hover:scale-105 transition-transform">
  <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="avatar.jpg" alt="Profile">
  </div>
</button>
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
| `avatar` | Base avatar container |
| `avatar-group` | Container for multiple avatars |
| `placeholder` | Styles for text/icon avatars |
| `online` | Online status indicator |
| `offline` | Offline status indicator |

## Examples

### User Profile Header


<div class="demo-container">
<div class="card w-full max-w-md bg-base-100 shadow-xl">
  <div class="card-body items-center text-center">
    <div class="relative">
      <div class="avatar">
        <div class="online"></div>
        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="/assets/avatar1.jpg" alt="User Profile">
        </div>
      </div>
      <button class="absolute bottom-0 right-0 btn btn-circle btn-sm btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </button>
    </div>
    <div class="text-center">
      <h2 class="card-title">Sarah Johnson</h2>
      <p class="text-base-content/70">UX Designer</p>
      <div class="flex items-center gap-1 justify-center mt-1">
        <div class="badge badge-xs badge-success"></div>
        <span class="text-sm text-success">Available</span>
      </div>
    </div>
    <div class="card-actions">
      <button class="btn btn-primary">Message</button>
      <button class="btn btn-outline">View Profile</button>
    </div>
  </div>
</div>
</div>

```html
<div class="card w-full max-w-md bg-base-100 shadow-xl">
  <div class="card-body items-center text-center">
    <div class="relative">
      <div class="avatar">
        <div class="online"></div>
        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="user-avatar.jpg" alt="User Profile">
        </div>
      </div>
      <button class="absolute bottom-0 right-0 btn btn-circle btn-sm btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </button>
    </div>
    
    <div class="text-center">
      <h2 class="card-title">Sarah Johnson</h2>
      <p class="text-base-content/70">UX Designer</p>
      <div class="flex items-center gap-1 justify-center mt-1">
        <div class="badge badge-xs badge-success"></div>
        <span class="text-sm text-success">Available</span>
      </div>
    </div>
    
    <div class="card-actions">
      <button class="btn btn-primary">Message</button>
      <button class="btn btn-outline">View Profile</button>
    </div>
  </div>
</div>
```

### Team Members List

<div class="demo-container">
<div class="card w-full bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Team Members</h2>
    <div class="space-y-4">
      <div class="flex items-center justify-between p-3 rounded-lg hover:bg-base-200 transition-colors">
        <div class="flex items-center gap-3">
          <div class="avatar">
            <div class="online"></div>
            <div class="w-12 rounded-full">
              <img src="/assets/avatar1.jpg" alt="Team Member">
            </div>
          </div>
          <div>
            <div class="font-semibold">Alex Chen</div>
            <div class="text-sm text-base-content/70">Frontend Developer</div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="badge badge-primary badge-sm">Admin</div>
          <button class="btn btn-ghost btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex items-center justify-between p-3 rounded-lg hover:bg-base-200 transition-colors">
        <div class="flex items-center gap-3">
          <div class="avatar">
            <div class="w-12 rounded-full">
              <img src="/assets/avatar2.jpg" alt="Team Member">
            </div>
          </div>
          <div>
            <div class="font-semibold">Maria Rodriguez</div>
            <div class="text-sm text-base-content/70">Backend Developer</div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="badge badge-secondary badge-sm">Member</div>
          <button class="btn btn-ghost btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex items-center justify-between p-3 rounded-lg hover:bg-base-200 transition-colors opacity-60">
        <div class="flex items-center gap-3">
          <div class="avatar offline">
            <div class="w-12 rounded-full">
              <img src="/assets/avatar2.jpg" alt="Team Member">
            </div>
          </div>
          <div>
            <div class="font-semibold">David Kim</div>
            <div class="text-sm text-base-content/70">Designer • Last seen 2h ago</div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="badge badge-ghost badge-sm">Offline</div>
        </div>
      </div>
    </div>
    <div class="card-actions justify-center mt-6">
      <button class="btn btn-outline btn-sm">
        Invite Members
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </div>
  </div>
</div>
</div>

```html
<div class="card w-full bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Team Members</h2>
    
    <div class="space-y-4">
      <div class="flex items-center justify-between p-3 rounded-lg hover:bg-base-200 transition-colors">
        <div class="flex items-center gap-3">
          <div class="avatar online">
            <div class="w-12 rounded-full">
              <img src="member1.jpg" alt="Team Member">
            </div>
          </div>
          <div>
            <div class="font-semibold">Alex Chen</div>
            <div class="text-sm text-base-content/70">Frontend Developer</div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="badge badge-primary badge-sm">Admin</div>
          <button class="btn btn-ghost btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div class="flex items-center justify-between p-3 rounded-lg hover:bg-base-200 transition-colors">
        <div class="flex items-center gap-3">
          <div class="avatar">
            <div class="w-12 rounded-full">
              <img src="member2.jpg" alt="Team Member">
            </div>
          </div>
          <div>
            <div class="font-semibold">Maria Rodriguez</div>
            <div class="text-sm text-base-content/70">Backend Developer</div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="badge badge-secondary badge-sm">Member</div>
          <button class="btn btn-ghost btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div class="flex items-center justify-between p-3 rounded-lg hover:bg-base-200 transition-colors opacity-60">
        <div class="flex items-center gap-3">
          <div class="avatar offline">
            <div class="w-12 rounded-full">
              <img src="member3.jpg" alt="Team Member">
            </div>
          </div>
          <div>
            <div class="font-semibold">David Kim</div>
            <div class="text-sm text-base-content/70">Designer • Last seen 2h ago</div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="badge badge-ghost badge-sm">Offline</div>
        </div>
      </div>
    </div>
    
    <div class="card-actions justify-center mt-6">
      <button class="btn btn-outline btn-sm">
        Invite Members
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </div>
  </div>
</div>
```
