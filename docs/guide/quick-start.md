# Quick Start

Get up and running with SageUI components in minutes. This guide will help you create your first SageUI component and understand the basic concepts.

## Your First Component

Let's start with a simple button component:

```html
<button class="sage-btn sage-btn-primary">
  Hello SageUI!
</button>
```

This creates a primary-styled button using SageUI's design system.

## Basic Layout

Create a simple card layout with multiple components:

```html
<div class="sage-card">
  <div class="sage-card-body">
    <h2 class="sage-card-title">Welcome to SageUI</h2>
    <p class="text-sage-600">
      Start building beautiful interfaces with our component library.
    </p>
    
    <div class="sage-card-actions">
      <button class="sage-btn sage-btn-primary">Get Started</button>
      <button class="sage-btn sage-btn-ghost">Learn More</button>
    </div>
  </div>
</div>
```

## Form Components

Build a complete form using SageUI form components:

```html
<div class="max-w-md mx-auto space-y-4">
  <div class="sage-form-control">
    <label class="sage-label">
      <span class="sage-label-text">Name</span>
      <input type="text" class="sage-input" placeholder="Enter your name">
    </label>
  </div>
  
  <div class="sage-form-control">
    <label class="sage-label">
      <span class="sage-label-text">Email</span>
      <input type="email" class="sage-input" placeholder="your@email.com">
    </label>
  </div>
  
  <div class="sage-form-control">
    <label class="sage-label cursor-pointer">
      <input type="checkbox" class="sage-checkbox">
      <span class="sage-label-text">Subscribe to newsletter</span>
    </label>
  </div>
  
  <button class="sage-btn sage-btn-primary w-full">Submit</button>
</div>
```

## Interactive Components

Add interactive elements like modals and dropdowns:

```html
<!-- Modal trigger -->
<button class="sage-btn sage-btn-primary" onclick="modal.showModal()">
  Open Modal
</button>

<!-- Modal -->
<dialog id="modal" class="sage-modal">
  <div class="sage-modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This is a SageUI modal component.</p>
    <div class="sage-modal-action">
      <form method="dialog">
        <button class="sage-btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

<!-- Dropdown -->
<div class="sage-dropdown">
  <label tabindex="0" class="sage-btn">Options</label>
  <ul tabindex="0" class="sage-dropdown-content sage-menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 3</a></li>
  </ul>
</div>
```

## Theming with Colors

SageUI comes with a beautiful green color palette. Use semantic color classes:

```html
<!-- Primary actions -->
<button class="sage-btn sage-btn-primary">Primary</button>

<!-- Secondary actions -->
<button class="sage-btn sage-btn-secondary">Secondary</button>

<!-- Success states -->
<div class="sage-alert sage-alert-success">
  Operation completed successfully!
</div>

<!-- Warning states -->
<div class="sage-alert sage-alert-warning">
  Please review your input.
</div>

<!-- Error states -->
<div class="sage-alert sage-alert-error">
  Something went wrong.
</div>
```

## Responsive Design

SageUI components are mobile-first and responsive by default:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="sage-card">
    <div class="sage-card-body">
      <h3 class="sage-card-title">Card 1</h3>
      <p>Responsive card layout.</p>
    </div>
  </div>
  
  <div class="sage-card">
    <div class="sage-card-body">
      <h3 class="sage-card-title">Card 2</h3>
      <p>Adapts to screen size.</p>
    </div>
  </div>
  
  <div class="sage-card">
    <div class="sage-card-body">
      <h3 class="sage-card-title">Card 3</h3>
      <p>Mobile-first design.</p>
    </div>
  </div>
</div>
```

## Using TypeScript

For TypeScript projects, import and use components programmatically:

```typescript
import { Button, Card, Modal } from 'sageui';

// Create components
const button = new Button({
  variant: 'primary',
  size: 'lg',
  text: 'Click me!'
});

const card = new Card({
  title: 'My Card',
  content: 'Card content goes here'
});

// Add to DOM
document.body.appendChild(button.element);
document.body.appendChild(card.element);

// Handle events
button.onClick(() => {
  console.log('Button clicked!');
});
```

## Accessibility Features

SageUI components come with built-in accessibility features:

```html
<!-- Proper ARIA labels -->
<button 
  class="sage-btn sage-btn-primary" 
  aria-label="Submit form">
  Submit
</button>

<!-- Focus management -->
<div class="sage-form-control">
  <label for="username" class="sage-label">
    <span class="sage-label-text">Username</span>
  </label>
  <input 
    id="username" 
    type="text" 
    class="sage-input" 
    aria-required="true"
    aria-describedby="username-help">
  <div id="username-help" class="sage-label-text-alt">
    Choose a unique username
  </div>
</div>

<!-- Keyboard navigation -->
<div class="sage-tabs" role="tablist">
  <a role="tab" class="sage-tab sage-tab-active" aria-selected="true">Tab 1</a>
  <a role="tab" class="sage-tab">Tab 2</a>
  <a role="tab" class="sage-tab">Tab 3</a>
</div>
```

## Complete Example

Here's a complete example that combines multiple SageUI components:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SageUI Example</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdn.jsdelivr.net/npm/sageui@latest/dist/sageui.min.css" rel="stylesheet">
</head>
<body class="bg-gray-50 p-8">
  <div class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="sage-card mb-8">
      <div class="sage-card-body text-center">
        <h1 class="text-3xl font-bold text-sage-800">SageUI Demo</h1>
        <p class="text-sage-600 mt-2">A beautiful component library for modern web apps</p>
      </div>
    </div>
    
    <!-- Main content -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Left column -->
      <div class="space-y-6">
        <div class="sage-card">
          <div class="sage-card-body">
            <h2 class="sage-card-title">Contact Form</h2>
            <form class="space-y-4">
              <div class="sage-form-control">
                <input type="text" class="sage-input" placeholder="Name">
              </div>
              <div class="sage-form-control">
                <input type="email" class="sage-input" placeholder="Email">
              </div>
              <div class="sage-form-control">
                <textarea class="sage-textarea" placeholder="Message"></textarea>
              </div>
              <button type="submit" class="sage-btn sage-btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <!-- Right column -->
      <div class="space-y-6">
        <div class="sage-alert sage-alert-success">
          <span>Welcome to SageUI! Everything is working correctly.</span>
        </div>
        
        <div class="sage-card">
          <div class="sage-card-body">
            <h2 class="sage-card-title">Quick Actions</h2>
            <div class="flex flex-wrap gap-2">
              <button class="sage-btn sage-btn-primary">Primary</button>
              <button class="sage-btn sage-btn-secondary">Secondary</button>
              <button class="sage-btn sage-btn-outline">Outline</button>
              <button class="sage-btn sage-btn-ghost">Ghost</button>
            </div>
          </div>
        </div>
        
        <div class="sage-card">
          <div class="sage-card-body">
            <h2 class="sage-card-title">Components</h2>
            <div class="space-y-4">
              <div class="flex items-center gap-2">
                <input type="checkbox" class="sage-checkbox" checked>
                <span>Checkbox component</span>
              </div>
              <div class="flex items-center gap-2">
                <input type="radio" name="radio" class="sage-radio" checked>
                <span>Radio option 1</span>
              </div>
              <div class="flex items-center gap-2">
                <input type="radio" name="radio" class="sage-radio">
                <span>Radio option 2</span>
              </div>
              <select class="sage-select w-full">
                <option>Choose option</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

## Next Steps

Now that you understand the basics:

1. **Explore Components** - Browse our [component library](/components/) to see all available components
2. **Learn Customization** - Check out the [customization guide](/guide/customization) to tailor SageUI to your brand  
3. **Framework Integration** - See how to use SageUI with your preferred framework
4. **Advanced Features** - Learn about theming, plugins, and advanced patterns

## Need Help?

- 📖 Browse the full [documentation](/components/)
- 💬 Join our [Discord community](https://discord.gg/sageui)  
- 🐛 Report issues on [GitHub](https://github.com/sageui/sageui)
- 🐦 Follow us on [Twitter](https://twitter.com/sageui)
