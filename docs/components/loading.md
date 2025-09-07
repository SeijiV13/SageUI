# Spinner

Loading spinners indicate that content is loading. They provide visual feedback to users that the system is processing their request.

## Basic Usage

<div class="demo-container">
  <div class="spinner"></div>
</div>

```html
<div class="spinner"></div>
```

## Sizes

Use size modifiers to create spinners of different sizes.

<div class="demo-container">
   <div class="flex">
  <div class="spinner spinner-sm"></div>

  <!-- Medium (default) -->
  <div class="spinner-md"></div>

  <!-- Large -->
  <div class="spinner spinner-lg"></div>

  <!-- Extra Large -->
  <div class="spinner spinner-xl"></div>
   </div>
</div>

```html
<!-- Small -->
<div class="spinner spinner-sm"></div>

<!-- Medium (default) -->
<div class="spinner"></div>

<!-- Large -->
<div class="spinner spinner-lg"></div>

<!-- Extra Large -->
<div class="spinner spinner-xl"></div>
```


## With Text

Combine spinners with loading text for better user experience.

<div class="demo-container">
<div class="flex items-center gap-2">
  <div class="spinner spinner-md"></div>
  <span class="text-600">Loading...</span>
</div>
</div>

```html
<div class="flex items-center gap-2">
  <div class="spinner spinner-md"></div>
  <span class="text-600">Loading...</span>
</div>
```

## Centered Loading

Center the spinner in a container for full-screen loading states.

<div class="demo-container">
<div class="flex items-center justify-center h-64">
  <div class="flex flex-col items-center gap-4">
    <div class="spinner spinner-lg"></div>
    <p class="text-600">Please wait...</p>
  </div>
</div>
</div>

```html
<div class="flex items-center justify-center h-64">
  <div class="flex flex-col items-center gap-4">
    <div class="spinner spinner-lg"></div>
    <p class="text-600">Please wait...</p>
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
| `spinner` | Base spinner component |
| `spinner-sm` | Small size |
| `spinner-lg` | Large size |
| `spinner-xl` | Extra large size |
| `spinner-secondary` | Secondary color |
| `spinner-success` | Success color |
| `spinner-warning` | Warning color |
| `spinner-error` | Error color |

## Accessibility

- Spinners include `role="status"` for screen readers
- Consider adding `aria-label` or `aria-describedby` for context
- Use alongside loading text for better accessibility

```html
<div class="spinner" role="status" aria-label="Loading content">
  <span class="sr-only">Loading...</span>
</div>
```

## Examples

### Button Loading State

<div class="demo-container">
<button class="btn btn-primary" disabled>
  <div class="spinner spinner-sm mr-2"></div>
  Processing...
</button>
</div>

```html
<button class="btn btn-primary" disabled>
  <div class="spinner spinner-sm mr-2"></div>
  Processing...
</button>
```

### Page Loading Overlay

```html
<div class="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
  <div class="flex flex-col items-center">
    <div class="spinner spinner-xl"></div>
    <p class="mt-4 text-600">Loading application...</p>
  </div>
</div>
```
