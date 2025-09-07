# Dropdown

Dropdowns display a list of options when triggered, perfect for menus, select alternatives, and action lists. They provide a clean way to present multiple options without taking up permanent screen space.

## Basic Usage

```html
<!-- Basic dropdown -->
<div class="dropdown">
  <label tabindex="0" class="btn">Dropdown</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 3</a></li>
  </ul>
</div>
```

## Dropdown Positioning

```html
<div class="flex gap-4 flex-wrap">
  <!-- Default (bottom-left) -->
  <div class="dropdown">
    <label tabindex="0" class="btn">Bottom</label>
    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
  
  <!-- Bottom-right -->
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn">Bottom End</label>
    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
  
  <!-- Top -->
  <div class="dropdown dropdown-top">
    <label tabindex="0" class="btn">Top</label>
    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
  
  <!-- Top-right -->
  <div class="dropdown dropdown-top dropdown-end">
    <label tabindex="0" class="btn">Top End</label>
    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
  
  <!-- Left -->
  <div class="dropdown dropdown-left">
    <label tabindex="0" class="btn">Left</label>
    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
  
  <!-- Right -->
  <div class="dropdown dropdown-right">
    <label tabindex="0" class="btn">Right</label>
    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
</div>
```

## Dropdown States

```html
<!-- Always open -->
<div class="dropdown dropdown-open">
  <label tabindex="0" class="btn">Always Open</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 3</a></li>
  </ul>
</div>

<!-- Hover to open -->
<div class="dropdown dropdown-hover">
  <label tabindex="0" class="btn">Hover</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 3</a></li>
  </ul>
</div>
```

## Menu Content Variations

### Simple Menu

```html
<div class="dropdown">
  <label tabindex="0" class="btn">Menu</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Profile</a></li>
    <li><a>Settings</a></li>
    <li><a>Logout</a></li>
  </ul>
</div>
```

### Menu with Icons

```html
<div class="dropdown">
  <label tabindex="0" class="btn btn-circle btn-ghost">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        Profile
      </a>
    </li>
    <li>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Settings
      </a>
    </li>
    <li>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Logout
      </a>
    </li>
  </ul>
</div>
```

### Menu with Badges and Status

```html
<div class="dropdown dropdown-end">
  <label tabindex="0" class="btn btn-ghost">
    <div class="indicator">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
      </svg>
      <span class="badge badge-xs badge-primary indicator-item">3</span>
    </div>
  </label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-80">
    <li class="menu-title">
      <span>Notifications</span>
    </li>
    <li>
      <a class="flex justify-between">
        <div>
          <div class="font-medium">New message</div>
          <div class="text-sm opacity-70">From John Doe</div>
        </div>
        <div class="badge badge-primary badge-sm">New</div>
      </a>
    </li>
    <li>
      <a class="flex justify-between">
        <div>
          <div class="font-medium">System update</div>
          <div class="text-sm opacity-70">2 hours ago</div>
        </div>
        <div class="badge badge-success badge-sm">Info</div>
      </a>
    </li>
    <li>
      <a class="flex justify-between">
        <div>
          <div class="font-medium">Payment received</div>
          <div class="text-sm opacity-70">1 day ago</div>
        </div>
      </a>
    </li>
  </ul>
</div>
```

### Dropdown with Search

```html
<div class="dropdown">
  <label tabindex="0" class="btn">Select Framework</label>
  <div tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64">
    <input type="text" class="input input-bordered input-sm mb-2" placeholder="Search frameworks..." id="framework-search">
    <ul class="max-h-48 overflow-y-auto">
      <li><a data-value="react">React</a></li>
      <li><a data-value="vue">Vue</a></li>
      <li><a data-value="angular">Angular</a></li>
      <li><a data-value="svelte">Svelte</a></li>
      <li><a data-value="solid">SolidJS</a></li>
      <li><a data-value="qwik">Qwik</a></li>
    </ul>
  </div>
</div>

<script>
document.getElementById('framework-search').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const items = this.parentElement.querySelectorAll('li a');
  
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.parentElement.style.display = text.includes(searchTerm) ? '' : 'none';
  });
});
</script>
```

## Card-style Dropdown

```html
<div class="dropdown">
  <label tabindex="0" class="btn">User Menu</label>
  <div tabindex="0" class="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content">
    <div class="card-body">
      <div class="flex items-center gap-3 mb-4">
        <div class="avatar">
          <div class="w-12 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar">
          </div>
        </div>
        <div>
          <div class="font-semibold">Sarah Johnson</div>
          <div class="text-sm opacity-80">sarah@example.com</div>
        </div>
      </div>
      
      <div class="card-actions">
        <button class="btn btn-primary btn-block">View Profile</button>
      </div>
      
      <div class="menu">
        <li><a class="text-primary-content">Account Settings</a></li>
        <li><a class="text-primary-content">Billing</a></li>
        <li><a class="text-primary-content">Help Center</a></li>
        <li><a class="text-primary-content">Sign Out</a></li>
      </div>
    </div>
  </div>
</div>
```

## TypeScript Usage

```typescript
import { Dropdown } from 'sageui';

// Create a dropdown instance
const dropdown = new Dropdown({
  trigger: document.getElementById('dropdown-trigger'),
  content: document.getElementById('dropdown-content'),
  position: 'bottom-left',
  closeOnClick: true,
  openOn: 'click' // 'click', 'hover', 'focus'
});

// Control dropdown state
dropdown.open();
dropdown.close();
dropdown.toggle();

// Event handling
dropdown.onOpen(() => {
  console.log('Dropdown opened');
});

dropdown.onClose(() => {
  console.log('Dropdown closed');
});

dropdown.onSelect((item, value) => {
  console.log('Item selected:', item, value);
});

// Dynamic content
dropdown.setItems([
  { label: 'Profile', value: 'profile', icon: 'user' },
  { label: 'Settings', value: 'settings', icon: 'cog' },
  { label: 'Logout', value: 'logout', icon: 'logout' }
]);

// Update position
dropdown.setPosition('top-right');

// Searchable dropdown
const searchableDropdown = new Dropdown({
  trigger: document.getElementById('search-trigger'),
  searchable: true,
  placeholder: 'Search options...',
  items: [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' }
  ],
  onFilter: (items, query) => {
    return items.filter(item => 
      item.label.toLowerCase().includes(query.toLowerCase())
    );
  }
});
```

## Accessibility

- Use proper ARIA attributes (`aria-haspopup`, `aria-expanded`)
- Ensure keyboard navigation works (Arrow keys, Enter, Escape)
- Manage focus correctly when opening/closing
- Provide screen reader friendly labels
- Use semantic HTML structure
- Support tab navigation within dropdown items

## CSS Classes

| Class | Description |
|-------|-------------|
| `dropdown` | Base dropdown container |
| `dropdown-content` | Dropdown content container |
| `dropdown-end` | Align dropdown to the right |
| `dropdown-top` | Open dropdown above trigger |
| `dropdown-left` | Open dropdown to the left |
| `dropdown-right` | Open dropdown to the right |
| `dropdown-hover` | Open on hover |
| `dropdown-open` | Always open state |

## Examples

### Navigation Dropdown

```html
<div class="navbar bg-base-100 shadow">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li>
          <a class="justify-between">
            Products
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2">
            <li><a>Web Development</a></li>
            <li><a>Mobile Apps</a></li>
            <li><a>Design</a></li>
          </ul>
        </li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
  </div>
  
  <div class="navbar-center">
    <a class="btn btn-ghost normal-case text-xl">SageUI</a>
  </div>
  
  <div class="navbar-end">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
```

### Action Dropdown

```html
<div class="flex items-center gap-2">
  <span class="text-lg font-semibold">Project Alpha</span>
  
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
      </svg>
    </label>
    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>Edit</a></li>
      <li><a><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>Duplicate</a></li>
      <li><a><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" /></svg>Share</a></li>
      <li><a><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>Download</a></li>
      <li class="menu-title"><span>Danger Zone</span></li>
      <li><a class="text-error"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>Delete</a></li>
    </ul>
  </div>
</div>
```
