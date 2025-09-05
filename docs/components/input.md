# Text Input

Text inputs are essential form elements for collecting user text data. SageUI provides various input styles and states to match your design needs.

## Basic Usage

The most basic input uses the `.input` class.

<div class="demo-container">
  <input type="text" class="input" placeholder="Basic input">
</div>

```html
<input type="text" class="input" placeholder="Basic input">
```

### With Label

<div class="demo-container">
  <div class="form-control">
    <label class="label">
      <span class="label-text">Username</span>
    </label>
    <input type="text" class="input" placeholder="Enter username">
  </div>
</div>

```html
<div class="form-control">
  <label class="label">
    <span class="label-text">Username</span>
  </label>
  <input type="text" class="input" placeholder="Enter username">
</div>
```

## Variants

### Sizes

<div class="demo-container">
  <div class="demo-title">Input Sizes</div>
  <div class="demo-section">
    <h4>Extra Small</h4>
    <input type="text" class="input input-xs" placeholder="Extra small">
  </div>
  <div class="demo-section">
    <h4>Small</h4>
    <input type="text" class="input input-sm" placeholder="Small">
  </div>
  <div class="demo-section">
    <h4>Medium (Default)</h4>
    <input type="text" class="input" placeholder="Medium">
  </div>
  <div class="demo-section">
    <h4>Large</h4>
    <input type="text" class="input input-lg" placeholder="Large">
  </div>
</div>

```html
<!-- Extra small -->
<input type="text" class="input input-xs" placeholder="Extra small">

<!-- Small -->
<input type="text" class="input input-sm" placeholder="Small">

<!-- Medium (default) -->
<input type="text" class="input" placeholder="Medium">

<!-- Large -->
<input type="text" class="input input-lg" placeholder="Large">
```

### Colors

<div class="demo-container">
  <div class="demo-title">Input Variants</div>
  <div class="demo-section">
    <h4>Primary</h4>
    <input type="text" class="input input-primary" placeholder="Primary input">
  </div>
  <div class="demo-section">
    <h4>Secondary</h4>
    <input type="text" class="input input-secondary" placeholder="Secondary input">
  </div>
  <div class="demo-section">
    <h4>Success</h4>
    <input type="text" class="input input-success" placeholder="Success input">
  </div>
  <div class="demo-section">
    <h4>Warning</h4>
    <input type="text" class="input input-warning" placeholder="Warning input">
  </div>
  <div class="demo-section">
    <h4>Error</h4>
    <input type="text" class="input input-error" placeholder="Error input">
  </div>
</div>

```html
<!-- Primary -->
<input type="text" class="input input-primary" placeholder="Primary">

<!-- Secondary -->
<input type="text" class="input input-secondary" placeholder="Secondary">

<!-- Success -->
<input type="text" class="input input-success" placeholder="Success">

<!-- Warning -->
<input type="text" class="input input-warning" placeholder="Warning">

<!-- Error -->
<input type="text" class="input input-error" placeholder="Error">
```

### States

<div class="demo-container">
  <div class="demo-title">Input States</div>
  <div class="demo-section">
    <h4>Normal</h4>
    <input type="text" class="input" placeholder="Normal input">
  </div>
  <div class="demo-section">
    <h4>Disabled</h4>
    <input type="text" class="input" placeholder="Disabled" disabled>
  </div>
  <div class="demo-section">
    <h4>Read-only</h4>
    <input type="text" class="input" value="Read-only value" readonly>
  </div>
  <div class="demo-section">
    <h4>With Error</h4>
    <div class="form-control">
      <input type="text" class="input input-error" placeholder="Input with error">
      <label class="label">
        <span class="label-text-alt text-error">Please enter a valid value</span>
      </label>
    </div>
  </div>
</div>

```html
<!-- Disabled -->
<input type="text" class="input" placeholder="Disabled" disabled>

<!-- Read-only -->
<input type="text" class="input" value="Read-only value" readonly>

<!-- With error -->
<div class="form-control">
  <input type="text" class="input input-error" placeholder="Input with error">
  <label class="label">
    <span class="label-text-alt text-error">Please enter a valid value</span>
  </label>
</div>
```

## Form Layout

```html
<div class="sage-form-control w-full max-w-xs">
  <label class="sage-label">
    <span class="sage-label-text">Email Address</span>
  </label>
  <input type="email" class="sage-input sage-input-bordered w-full max-w-xs" placeholder="your@email.com">
  <label class="sage-label">
    <span class="sage-label-text-alt">We'll never share your email</span>
  </label>
</div>
```

## Input Group

```html
<!-- With prefix -->
<div class="sage-join">
  <span class="sage-join-item bg-base-200 px-3 flex items-center">@</span>
  <input type="text" class="sage-input sage-input-bordered sage-join-item" placeholder="username">
</div>

<!-- With suffix -->
<div class="sage-join">
  <input type="text" class="sage-input sage-input-bordered sage-join-item" placeholder="Search">
  <button class="sage-btn sage-btn-primary sage-join-item">Go</button>
</div>
```

## TypeScript Usage

```typescript
import { Input } from 'sageui';

// Create an input instance
const input = new Input({
  element: document.getElementById('my-input'),
  variant: 'primary',
  size: 'lg',
  placeholder: 'Enter text...'
});

// Update properties
input.setVariant('success');
input.setSize('sm');
input.setValue('New value');

// Event handling
input.onInput((value) => {
  console.log('Input value changed:', value);
});

input.onFocus(() => {
  console.log('Input focused');
});

input.onBlur(() => {
  console.log('Input blurred');
});
```

## Accessibility

- Always provide meaningful labels using `<label>` elements or `aria-label` attributes
- Use `placeholder` text as hints, not as replacements for labels
- Include proper error messaging with `aria-describedby`
- Ensure sufficient color contrast for all states
- Support keyboard navigation and focus indicators

## CSS Classes

| Class | Description |
|-------|-------------|
| `sage-input` | Base input styles |
| `sage-input-bordered` | Adds border styling |
| `sage-input-ghost` | Ghost/transparent styling |
| `sage-input-xs` | Extra small size |
| `sage-input-sm` | Small size |
| `sage-input-lg` | Large size |
| `sage-input-primary` | Primary color variant |
| `sage-input-secondary` | Secondary color variant |
| `sage-input-success` | Success color variant |
| `sage-input-warning` | Warning color variant |
| `sage-input-error` | Error color variant |

## Examples

### Login Form

```html
<div class="card w-full max-w-sm bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Login</h2>
    
    <div class="sage-form-control">
      <label class="sage-label">
        <span class="sage-label-text">Email</span>
      </label>
      <input type="email" class="sage-input sage-input-bordered" placeholder="your@email.com" required>
    </div>
    
    <div class="sage-form-control">
      <label class="sage-label">
        <span class="sage-label-text">Password</span>
      </label>
      <input type="password" class="sage-input sage-input-bordered" placeholder="••••••••" required>
    </div>
    
    <div class="sage-form-control mt-6">
      <button class="sage-btn sage-btn-primary">Login</button>
    </div>
  </div>
</div>
```

### Search Bar

```html
<div class="sage-form-control">
  <div class="input-group">
    <input type="text" class="sage-input sage-input-bordered flex-1" placeholder="Search products...">
    <button class="sage-btn sage-btn-primary">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
  </div>
</div>
```
