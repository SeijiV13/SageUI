# Spinner

Loading spinners indicate that content is loading. They provide visual feedback to users that the system is processing their request.

## Basic Usage

```html
<div class="sage-spinner"></div>
```

## Sizes

Use size modifiers to create spinners of different sizes.

```html
<!-- Small -->
<div class="sage-spinner sage-spinner-sm"></div>

<!-- Medium (default) -->
<div class="sage-spinner"></div>

<!-- Large -->
<div class="sage-spinner sage-spinner-lg"></div>

<!-- Extra Large -->
<div class="sage-spinner sage-spinner-xl"></div>
```

## Colors

Customize the spinner color using color modifiers.

```html
<!-- Primary (default) -->
<div class="sage-spinner"></div>

<!-- Secondary -->
<div class="sage-spinner sage-spinner-secondary"></div>

<!-- Success -->
<div class="sage-spinner sage-spinner-success"></div>

<!-- Warning -->
<div class="sage-spinner sage-spinner-warning"></div>

<!-- Error -->
<div class="sage-spinner sage-spinner-error"></div>
```

## With Text

Combine spinners with loading text for better user experience.

```html
<div class="flex items-center gap-2">
  <div class="sage-spinner sage-spinner-sm"></div>
  <span class="text-sage-600">Loading...</span>
</div>
```

## Centered Loading

Center the spinner in a container for full-screen loading states.

```html
<div class="flex items-center justify-center h-64">
  <div class="flex flex-col items-center gap-4">
    <div class="sage-spinner sage-spinner-lg"></div>
    <p class="text-sage-600">Please wait...</p>
  </div>
</div>
```

## TypeScript Usage

```typescript
import { Spinner } from 'sageui';

// Create a spinner
const spinner = new Spinner({
  size: 'lg',
  color: 'primary'
});

// Show spinner
spinner.show(document.getElementById('loading-container'));

// Hide spinner
spinner.hide();
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the spinner |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error'` | `'primary'` | Color theme |

## CSS Classes

| Class | Description |
|-------|-------------|
| `sage-spinner` | Base spinner component |
| `sage-spinner-sm` | Small size |
| `sage-spinner-lg` | Large size |
| `sage-spinner-xl` | Extra large size |
| `sage-spinner-secondary` | Secondary color |
| `sage-spinner-success` | Success color |
| `sage-spinner-warning` | Warning color |
| `sage-spinner-error` | Error color |

## Accessibility

- Spinners include `role="status"` for screen readers
- Consider adding `aria-label` or `aria-describedby` for context
- Use alongside loading text for better accessibility

```html
<div class="sage-spinner" role="status" aria-label="Loading content">
  <span class="sr-only">Loading...</span>
</div>
```

## Examples

### Button Loading State

```html
<button class="sage-btn sage-btn-primary" disabled>
  <div class="sage-spinner sage-spinner-sm mr-2"></div>
  Processing...
</button>
```

### Page Loading Overlay

```html
<div class="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
  <div class="flex flex-col items-center">
    <div class="sage-spinner sage-spinner-xl"></div>
    <p class="mt-4 text-sage-600">Loading application...</p>
  </div>
</div>
```
