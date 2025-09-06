# Button

Buttons are essential interactive elements that trigger actions when clicked.

## Basic Usage

The most basic button uses the `.btn` class.

<div class="demo-container">
  <button class="btn">Button</button>
</div>

```html
<button class="btn">Button</button>
```

## Variants

SageUI provides several button variants for different use cases and visual hierarchy.

### Brand Colors

<div class="demo-container">
  <div class="demo-title">Brand Variants</div>
  <div class="demo-grid">
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-accent">Accent</button>
  </div>
</div>

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
```

### Semantic Colors

<div class="demo-container">
  <div class="demo-title">Semantic Variants</div>
  <div class="demo-grid">
    <button class="btn btn-success">Success</button>
    <button class="btn btn-warning">Warning</button>
    <button class="btn btn-error">Error</button>
    <button class="btn btn-info">Info</button>
  </div>
</div>

```html
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-error">Error</button>
<button class="btn btn-info">Info</button>
```

### Style Variants

<div class="demo-container">
  <div class="demo-title">Style Variants</div>
  <div class="demo-grid">
    <button class="btn btn-ghost">Ghost</button>
    <button class="btn btn-outline">Outline</button>
    <button class="btn btn-link">Link</button>
  </div>
</div>

```html
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-link">Link</button>
```

## Sizes

Buttons come in four different sizes to fit various design contexts.

<div class="demo-container">
  <div class="demo-title">Button Sizes</div>
  <div class="flex items-center gap-2">
    <button class="btn btn-primary btn-xs">Extra Small</button>
    <button class="btn btn-primary btn-sm">Small</button>
    <button class="btn btn-primary">Default</button>
    <button class="btn btn-primary btn-lg">Large</button>
  </div>
</div>

```html
<button class="btn btn-primary btn-xs">Extra Small</button>
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>
```

## States

### Disabled

<div class="demo-container">
  <div class="demo-title">Disabled Buttons</div>
  <div class="demo-grid">
    <button class="btn" disabled>Disabled</button>
    <button class="btn btn-primary" disabled>Disabled Primary</button>
    <button class="btn btn-outline" disabled>Disabled Outline</button>
  </div>
</div>

```html
<button class="btn" disabled>Disabled</button>
<button class="btn btn-primary" disabled>Disabled Primary</button>
<button class="btn btn-outline" disabled>Disabled Outline</button>
```

### Loading

<div class="demo-container">
  <div class="demo-title">Loading Buttons</div>
  <div class="demo-grid">
    <button class="btn btn-primary">
      <div class="spinner spinner-sm mr-2"></div>
      Loading...
    </button>
    <button class="btn btn-outline">
      <div class="spinner spinner-sm mr-2"></div>
      Processing
    </button>
  </div>
</div>

```html
<button class="btn btn-primary">
  <div class="spinner spinner-sm mr-2"></div>
  Loading...
</button>
```

### Active

<div class="demo-container">
  <div class="demo-title">Active State</div>
  <div class="demo-grid">
    <button class="btn btn-active">Active</button>
    <button class="btn btn-primary btn-active">Active Primary</button>
  </div>
</div>

```html
<button class="btn btn-active">Active</button>
<button class="btn btn-primary btn-active">Active Primary</button>
```

## With Icons

Buttons work perfectly with icons to provide additional context.

<div class="demo-container">
  <div class="demo-title">Buttons with Icons</div>
  <div class="demo-grid">
    <button class="btn btn-primary">
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
      </svg>
      Add Item
    </button>
    <button class="btn btn-outline">
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
      Like
    </button>
    <button class="btn btn-ghost">
      Download
      <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
      </svg>
    </button>
  </div>
</div>

```html
<!-- Icon before text -->
<button class="btn btn-primary">
  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
  </svg>
  Add Item
</button>

<!-- Icon after text -->
<button class="btn btn-ghost">
  Download
  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
  </svg>
</button>
```

## Icon Only

For compact interfaces, buttons can contain only icons.

<div class="demo-container">
  <div class="demo-title">Icon-only Buttons</div>
  <div class="demo-grid">
    <button class="btn btn-square">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
    <button class="btn btn-square btn-primary">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    </button>
    <button class="btn btn-circle btn-outline">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
      </svg>
    </button>
  </div>
</div>

```html
<button class="btn btn-square">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
  </svg>
</button>

<button class="btn btn-circle btn-primary">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
  </svg>
</button>
```

## Block Buttons

Buttons can span the full width of their container.

<div class="demo-container">
  <div class="demo-title">Block Buttons</div>
  <div class="w-full">
    <button class="btn btn-primary btn-block mb-2">Block Button</button>
    <button class="btn btn-outline btn-block">Another Block Button</button>
  </div>
</div>

```html
<button class="btn btn-primary btn-block">Block Button</button>
<button class="btn btn-outline btn-block">Another Block Button</button>
```

## Button Groups

Group related buttons together for better organization.

<div class="demo-container">
  <div class="demo-title">Button Groups</div>
  <div class="btn-group">
    <button class="btn btn-active">Left</button>
    <button class="btn">Center</button>
    <button class="btn">Right</button>
  </div>
</div>

```html
<div class="btn-group">
  <button class="btn btn-active">Left</button>
  <button class="btn">Center</button>
  <button class="btn">Right</button>
</div>
```

## TypeScript Usage

```typescript
import { Button } from 'sageui';

// Create a button instance
const button = new Button({
  variant: 'primary',
  size: 'lg',
  children: 'Click me!',
  onClick: () => {
    console.log('Button clicked!');
  }
});

// Mount to DOM
button.mount('#button-container');
```

## CSS Classes Reference

<table class="class-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.btn</code></td>
      <td>Base button styles</td>
    </tr>
    <tr>
      <td><code>.btn-primary</code></td>
      <td>Primary button variant (green)</td>
    </tr>
    <tr>
      <td><code>.btn-secondary</code></td>
      <td>Secondary button variant (forest green)</td>
    </tr>
    <tr>
      <td><code>.btn-accent</code></td>
      <td>Accent button variant (emerald)</td>
    </tr>
    <tr>
      <td><code>.btn-success</code></td>
      <td>Success state button (green)</td>
    </tr>
    <tr>
      <td><code>.btn-warning</code></td>
      <td>Warning state button (amber)</td>
    </tr>
    <tr>
      <td><code>.btn-error</code></td>
      <td>Error state button (red)</td>
    </tr>
    <tr>
      <td><code>.btn-info</code></td>
      <td>Info state button (blue)</td>
    </tr>
    <tr>
      <td><code>.btn-ghost</code></td>
      <td>Transparent button with subtle hover</td>
    </tr>
    <tr>
      <td><code>.btn-outline</code></td>
      <td>Button with border and transparent background</td>
    </tr>
    <tr>
      <td><code>.btn-link</code></td>
      <td>Button styled like a text link</td>
    </tr>
    <tr>
      <td><code>.btn-xs</code></td>
      <td>Extra small button size</td>
    </tr>
    <tr>
      <td><code>.btn-sm</code></td>
      <td>Small button size</td>
    </tr>
    <tr>
      <td><code>.btn-lg</code></td>
      <td>Large button size</td>
    </tr>
    <tr>
      <td><code>.btn-square</code></td>
      <td>Square button (equal width and height)</td>
    </tr>
    <tr>
      <td><code>.btn-circle</code></td>
      <td>Circular button</td>
    </tr>
    <tr>
      <td><code>.btn-block</code></td>
      <td>Full-width button</td>
    </tr>
    <tr>
      <td><code>.btn-active</code></td>
      <td>Active/pressed state</td>
    </tr>
    <tr>
      <td><code>.btn-group</code></td>
      <td>Container for grouping buttons</td>
    </tr>
  </tbody>
</table>

## Accessibility

SageUI buttons are built with accessibility in mind:

- **Keyboard Navigation**: Full support for Tab, Enter, and Space key interactions
- **Focus Management**: Visible focus indicators that meet WCAG contrast requirements
- **Screen Readers**: Proper semantic HTML with support for ARIA attributes
- **Color Contrast**: All color variants meet WCAG AA standards
- **Disabled State**: Properly handled with `aria-disabled` and prevented interactions

### Best Practices

- Use descriptive button text that clearly indicates the action
- Include `aria-label` for icon-only buttons
- Use `aria-describedby` to associate help text with buttons
- Consider loading states for async actions

```html
<!-- Good: Descriptive text -->
<button class="btn btn-primary">Save Changes</button>

<!-- Good: Icon button with aria-label -->
<button class="btn btn-square" aria-label="Close dialog">
  <svg>...</svg>
</button>

<!-- Good: Button with description -->
<button class="btn btn-primary" aria-describedby="save-help">
  Save
</button>
<div id="save-help">This will save your changes permanently</div>
```

## Examples

### Call-to-Action Section

<div class="demo-container">
  <div class="text-center py-12">
    <h2 class="text-3xl font-bold mb-4">Ready to get started?</h2>
    <p class="text-gray-600 mb-8">Join thousands of developers building with SageUI</p>
    <div class="space-x-4">
      <button class="btn btn-primary btn-lg">Get Started Free</button>
      <button class="btn btn-outline btn-lg">View Documentation</button>
    </div>
</div>

</div>

```html
<div class="text-center py-12">
  <h2 class="text-3xl font-bold mb-4">Ready to get started?</h2>
  <p class="text-gray-600 mb-8">Join thousands of developers building with SageUI</p>
  <div class="space-x-4">
    <button class="btn btn-primary btn-lg">Get Started Free</button>
    <button class="btn btn-outline btn-lg">View Documentation</button>
  </div>
</div>
```

### Form Actions

<div class="demo-container">
  <button type="button" class="btn btn-ghost">Cancel</button>
  <button type="submit" class="btn btn-primary">
    <div class="spinner spinner-sm mr-2 hidden" id="loading"></div>
    Save Changes
  </button>
</div>

```html
<div class="flex justify-end space-x-3 pt-4 border-t">
  <button type="button" class="btn btn-ghost">Cancel</button>
  <button type="submit" class="btn btn-primary">
    <div class="spinner spinner-sm mr-2 hidden" id="loading"></div>
    Save Changes
  </button>
</div>
```
