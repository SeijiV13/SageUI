# SageUI Usage Examples

## Installation

```bash
npm install sageui
# or
yarn add sageui
```

## Setup

### 1. Add to your Tailwind CSS config

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/sageui/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [
    require('sageui/plugin')
  ]
}
```

### 2. Import SageUI styles

```css
/* In your main CSS file */
@import 'sageui/dist/sageui.css';
```

### 3. Use Components

## Button Examples

### Basic Buttons
```html
<!-- Primary Button -->
<button class="btn btn-primary btn-md">Click me</button>

<!-- Secondary Button -->
<button class="btn btn-secondary btn-md">Secondary</button>

<!-- Accent Button -->
<button class="btn btn-accent btn-md">Accent</button>

<!-- Ghost Button -->
<button class="btn btn-ghost btn-md">Ghost</button>

<!-- Outline Button -->
<button class="btn btn-outline btn-md">Outline</button>
```

### Button Sizes
```html
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-md">Medium</button>
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary btn-xl">Extra Large</button>
```

### Buttons with Icons
```html
<button class="btn btn-primary btn-md">
  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
  </svg>
  Add Item
</button>
```

### Loading Button
```html
<button class="btn btn-primary btn-md" disabled>
  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Loading...
</button>
```

## Card Examples

### Basic Card
```html
<div class="card card-shadow">
  <div class="card-body">
    <h3 class="card-title">Card Title</h3>
    <p>Card content goes here.</p>
  </div>
</div>
```

### Bordered Card
```html
<div class="card card-bordered">
  <div class="card-body">
    <h3 class="card-title">Bordered Card</h3>
    <p>This card has a colored border.</p>
  </div>
</div>
```

## Alert Examples

### Success Alert
```html
<div class="alert alert-success">
  <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
  </svg>
  Success! Your action was completed.
</div>
```

### Warning Alert
```html
<div class="alert alert-warning">
  <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
  </svg>
  Warning! Please check your input.
</div>
```

## Form Examples

### Input Field
```html
<div>
  <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
  <input type="text" class="input" placeholder="Enter your name">
</div>
```

### Input with Error State
```html
<div>
  <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
  <input type="email" class="input border-red-300 text-red-900 placeholder-red-400 focus:border-red-500 focus:ring-red-500" placeholder="Enter your email">
  <p class="mt-2 text-sm text-red-600">Please enter a valid email address.</p>
</div>
```

## JavaScript/TypeScript Usage

If you're using the TypeScript components:

```typescript
import { Button } from 'sageui';

// Generate button HTML
const buttonHtml = Button.render('Click me', {
  variant: 'primary',
  size: 'md',
  disabled: false
});

// Get button classes
const buttonClasses = Button.getClasses({
  variant: 'secondary',
  size: 'lg'
});
```

## Customization

### Custom Colors

You can extend the color palette in your Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        sage: {
          // Override default sage colors
          500: '#your-custom-color',
        },
        // Add your own color palette
        'custom-green': {
          50: '#f0fdf4',
          500: '#22c55e',
          900: '#14532d',
        }
      }
    }
  },
  plugins: [
    require('sageui/plugin')
  ]
}
```

### Custom Component Styles

Override SageUI component styles:

```css
/* Override button styles */
.btn-primary {
  @apply bg-blue-500 hover:bg-blue-600;
}

/* Create custom button variant */
.btn-custom {
  @apply bg-purple-500 text-white hover:bg-purple-600;
}
```

## React Integration

For React projects, you can create wrapper components:

```jsx
import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  loading = false,
  onClick,
  ...props 
}) => {
  const baseClasses = 'btn';
  const variantClasses = `btn-${variant}`;
  const sizeClasses = `btn-${size}`;
  const loadingClasses = loading ? 'btn-loading cursor-wait' : '';
  
  const classes = [
    baseClasses,
    variantClasses,
    sizeClasses,
    loadingClasses
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={classes} 
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
```

## Vue Integration

For Vue projects:

```vue
<template>
  <button 
    :class="buttonClasses" 
    :disabled="disabled || loading"
    @click="$emit('click')"
  >
    <svg 
      v-if="loading" 
      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'SageButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'secondary', 'accent', 'ghost', 'outline'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: value => ['sm', 'md', 'lg', 'xl'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses() {
      return [
        'btn',
        `btn-${this.variant}`,
        `btn-${this.size}`,
        this.loading ? 'btn-loading cursor-wait' : ''
      ].filter(Boolean).join(' ');
    }
  },
  emits: ['click']
}
</script>
```

## Available Classes

### Buttons
- `btn` - Base button class
- `btn-primary`, `btn-secondary`, `btn-accent`, `btn-ghost`, `btn-outline` - Variants
- `btn-sm`, `btn-md`, `btn-lg`, `btn-xl` - Sizes

### Cards
- `card` - Base card class
- `card-bordered` - Card with sage border
- `card-shadow` - Card with sage shadow
- `card-body` - Card content container
- `card-title` - Card title styling

### Alerts
- `alert` - Base alert class
- `alert-success`, `alert-warning`, `alert-error`, `alert-info` - Alert variants

### Forms
- `input` - Base input styling

## Browser Support

SageUI supports all modern browsers that support CSS Grid and Flexbox:
- Chrome 57+
- Firefox 52+
- Safari 10.1+
- Edge 16+

## Accessibility

All SageUI components follow WCAG 2.1 guidelines:
- Proper focus indicators
- Keyboard navigation support  
- Screen reader friendly
- Color contrast compliant
- ARIA attributes where needed
