# Badge

Badges are small status indicators for displaying counts, labels, or statuses. They're perfect for showing notifications, tags, or categorizing content.

## Basic Usage

The most basic badge uses the `.badge` class.

<div class="demo-container">
  <div class="flex items-center gap-4">
    <span class="badge">Badge</span>
    <div class="flex items-center gap-2">
      <span>Messages</span>
      <span class="badge badge-primary">3</span>
    </div>
  </div>
</div>

```html
<!-- Basic badge -->
<span class="badge">Badge</span>

<!-- Badge with content -->
<div class="flex items-center gap-2">
  <span>Messages</span>
  <span class="badge badge-primary">3</span>
</div>
```

## Variants

### Colors

SageUI provides several badge color variants for different use cases.

<div class="demo-container">
  <div class="demo-title">Badge Colors</div>
  <div class="flex flex-wrap items-center gap-3">
    <span class="badge">Default</span>
    <span class="badge badge-primary">Primary</span>
    <span class="badge badge-secondary">Secondary</span>
    <span class="badge badge-success">Success</span>
    <span class="badge badge-warning">Warning</span>
    <span class="badge badge-error">Error</span>
    <span class="badge badge-info">Info</span>
  </div>
</div>

```html
<!-- Default -->
<span class="badge">Default</span>

<!-- Primary -->
<span class="badge badge-primary">Primary</span>

<!-- Secondary -->
<span class="badge badge-secondary">Secondary</span>

<!-- Success -->
<span class="badge badge-success">Success</span>

<!-- Warning -->
<span class="badge badge-warning">Warning</span>

<!-- Error -->
<span class="badge badge-error">Error</span>

<!-- Info -->
<span class="badge badge-info">Info</span>
```

## Badge Positioning

### On Buttons

Badges can be positioned on buttons to show counts or status indicators.

<div class="demo-container">
  <div class="demo-title">Badges on Buttons</div>
  <div class="flex items-center gap-4">
    <button class="btn btn-primary">
      Messages
      <span class="badge badge-secondary ml-2">4</span>
    </button>
  </div>
</div>

```html
<!-- Badge inside button -->
<button class="btn btn-primary">
  Messages
  <span class="badge badge-secondary ml-2">4</span>
</button>
<!-- Badge positioned on button -->
<div class="relative">
  <button class="btn btn-ghost">
    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z"/>
    </svg>
  </button>
  <span class="badge badge-error absolute -top-2 -right-2">9</span>
</div>
```

## Badge Groups

Badge groups are useful for displaying multiple related tags or categories.

<div class="demo-container">
  <div class="demo-title">Tag Lists</div>
  <div class="space-y-4">
    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">Technologies</h4>
      <div class="flex flex-wrap gap-2">
        <span class="badge badge-primary">React</span>
        <span class="badge badge-secondary">TypeScript</span>
        <span class="badge badge-success">Tailwind</span>
        <span class="badge badge-warning">JavaScript</span>
        <span class="badge badge-info">CSS</span>
      </div>
    </div>
    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">Project Status</h4>
      <div class="flex flex-wrap gap-2">
        <span class="badge badge-success">Completed</span>
        <span class="badge badge-warning">In Progress</span>
        <span class="badge badge-error">Blocked</span>
      </div>
    </div>
  </div>
</div>

```html
<!-- Technology tags -->
<div class="flex flex-wrap gap-2">
  <span class="badge badge-primary">React</span>
  <span class="badge badge-secondary">TypeScript</span>
  <span class="badge badge-success">Tailwind</span>
  <span class="badge badge-warning">JavaScript</span>
  <span class="badge badge-info">CSS</span>
</div>

<!-- Status indicators -->
<div class="flex flex-wrap gap-2">
  <span class="badge badge-success">Completed</span>
  <span class="badge badge-warning">In Progress</span>
  <span class="badge badge-error">Blocked</span>
</div>
```

## TypeScript Usage

```typescript
import { Badge } from 'sageui';

// Create a badge instance
const badge = new Badge({
  content: '5',
  variant: 'primary'
});

// Mount to DOM
badge.mount('#badge-container');

// Update content
badge.setContent('10');
badge.setVariant('error');

const notificationBadge = new Badge({
  content: '3',
  variant: 'error',
  size: 'xs',
  position: 'top-right' // Position relative to parent
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
      <td><code>.badge</code></td>
      <td>Base badge styles</td>
    </tr>
    <tr>
      <td><code>.badge-primary</code></td>
      <td>Primary color variant (sage green)</td>
    </tr>
    <tr>
      <td><code>.badge-secondary</code></td>
      <td>Secondary color variant (forest green)</td>
    </tr>
    <tr>
      <td><code>.badge-success</code></td>
      <td>Success color variant (emerald)</td>
    </tr>
    <tr>
      <td><code>.badge-warning</code></td>
      <td>Warning color variant (amber)</td>
    </tr>
    <tr>
      <td><code>.badge-error</code></td>
      <td>Error color variant (red)</td>
    </tr>
    <tr>
      <td><code>.badge-info</code></td>
      <td>Info color variant (sky blue)</td>
    </tr>
  </tbody>
</table>

## Accessibility

SageUI badges are designed with accessibility in mind:

- **Semantic HTML**: Use appropriate elements for interactive badges
- **Color Contrast**: All badge variants meet WCAG color contrast requirements
- **Alternative Text**: Provide `aria-label` for icon-only badges
- **Status Indicators**: Use `role="status"` and `aria-live` for dynamic badges
- **Meaningful Content**: Use descriptive text instead of just numbers when possible

### Best Practices

```html
<!-- Good: Badge with meaningful text -->
<span class="badge badge-success" role="status">
  3 new messages
</span>

<!-- Good: Interactive badge with proper semantics -->
<button class="badge badge-primary" aria-label="Filter by React tags">
  React
</button>

<!-- Good: Status indicator with proper ARIA -->
<span class="badge badge-success" role="status" aria-live="polite">
  Online
</span>
```

## Examples

### Simple Product Badge
<div class="demo-container">
<div class="card w-96 bg-white shadow-lg">
  <div class="card-body">
    <div class="flex justify-between items-start">
      <h3 class="card-title">Wireless Headphones</h3>
      <span class="badge badge-success">New</span>
    </div>
    <div class="flex flex-wrap gap-2 mt-2">
      <span class="badge badge-primary">Bluetooth</span>
      <span class="badge badge-secondary">Noise Canceling</span>
      <span class="badge badge-info">Wireless</span>
    </div>
    <div class="flex justify-between items-center mt-4">
      <div class="text-2xl font-bold">$199.99</div>
      <span class="badge badge-warning">15% OFF</span>
    </div>
  </div>
</div>

</div>

```html
<div class="card w-96 bg-white shadow-lg">
  <div class="card-body">
    <div class="flex justify-between items-start">
      <h3 class="card-title">Wireless Headphones</h3>
      <span class="badge badge-success">New</span>
    </div>
    
    <div class="flex flex-wrap gap-2 mt-2">
      <span class="badge badge-primary">Bluetooth</span>
      <span class="badge badge-secondary">Noise Canceling</span>
      <span class="badge badge-info">Wireless</span>
    </div>
    
    <div class="flex justify-between items-center mt-4">
      <div class="text-2xl font-bold">$199.99</div>
      <span class="badge badge-warning">15% OFF</span>
    </div>
  </div>
</div>
```

### Notification Example

<div class="demo-container">
<div class="bg-white rounded-lg shadow p-4 w-80">
  <div class="flex justify-between items-center">
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 rounded-full bg-100 flex items-center justify-center">
        <span class="text-600 text-sm font-medium">J</span>
      </div>
      <div>
        <div class="font-medium">New message from John</div>
        <div class="text-sm text-gray-500">2 minutes ago</div>
      </div>
    </div>
    <span class="badge badge-primary">New</span>
  </div>
</div>
</div>

```html
<div class="bg-white rounded-lg shadow p-4 w-80">
  <div class="flex justify-between items-center">
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 rounded-full bg-100 flex items-center justify-center">
        <span class="text-600 text-sm font-medium">J</span>
      </div>
      <div>
        <div class="font-medium">New message from John</div>
        <div class="text-sm text-gray-500">2 minutes ago</div>
      </div>
    </div>
    <span class="badge badge-primary">New</span>
  </div>
</div>
```