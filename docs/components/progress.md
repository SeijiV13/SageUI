# Progress

Progress bars show the completion status of tasks or processes. They provide visual feedback about the progress of operations.

## Basic Usage

```html
<div class="sage-progress">
  <div class="sage-progress-bar" style="width: 60%"></div>
</div>
```

## With Value

```html
<div class="sage-progress" data-value="75">
  <div class="sage-progress-bar" style="width: 75%"></div>
</div>
```

## Sizes

Use size modifiers to create progress bars of different heights.

```html
<!-- Small -->
<div class="sage-progress sage-progress-sm">
  <div class="sage-progress-bar" style="width: 45%"></div>
</div>

<!-- Medium (default) -->
<div class="sage-progress">
  <div class="sage-progress-bar" style="width: 60%"></div>
</div>

<!-- Large -->
<div class="sage-progress sage-progress-lg">
  <div class="sage-progress-bar" style="width: 75%"></div>
</div>
```

## Colors

Customize the progress bar color using color modifiers.

```html
<!-- Primary (default) -->
<div class="sage-progress">
  <div class="sage-progress-bar" style="width: 60%"></div>
</div>

<!-- Secondary -->
<div class="sage-progress">
  <div class="sage-progress-bar sage-progress-bar-secondary" style="width: 60%"></div>
</div>

<!-- Success -->
<div class="sage-progress">
  <div class="sage-progress-bar sage-progress-bar-success" style="width: 60%"></div>
</div>

<!-- Warning -->
<div class="sage-progress">
  <div class="sage-progress-bar sage-progress-bar-warning" style="width: 60%"></div>
</div>

<!-- Error -->
<div class="sage-progress">
  <div class="sage-progress-bar sage-progress-bar-error" style="width: 60%"></div>
</div>
```

## With Label

Show progress percentage or custom text.

```html
<div class="sage-progress">
  <div class="sage-progress-bar" style="width: 60%">
    <span class="sage-progress-label">60%</span>
  </div>
</div>

<!-- External label -->
<div>
  <div class="flex justify-between mb-1">
    <span class="text-sm font-medium">Downloading...</span>
    <span class="text-sm text-sage-600">45%</span>
  </div>
  <div class="sage-progress">
    <div class="sage-progress-bar" style="width: 45%"></div>
  </div>
</div>
```

## Striped

Add a striped pattern to the progress bar.

```html
<div class="sage-progress">
  <div class="sage-progress-bar sage-progress-bar-striped" style="width: 60%"></div>
</div>
```

## Animated

Animate the stripes for active progress indication.

```html
<div class="sage-progress">
  <div class="sage-progress-bar sage-progress-bar-striped sage-progress-bar-animated" style="width: 60%"></div>
</div>
```

## Multiple Bars

Stack multiple progress bars for complex progress visualization.

```html
<div class="sage-progress">
  <div class="sage-progress-bar sage-progress-bar-success" style="width: 35%"></div>
  <div class="sage-progress-bar sage-progress-bar-warning" style="width: 20%"></div>
  <div class="sage-progress-bar sage-progress-bar-error" style="width: 10%"></div>
</div>
```

## TypeScript Usage

```typescript
import { Progress } from 'sageui';

// Create a progress bar
const progress = new Progress({
  value: 0,
  max: 100,
  color: 'primary',
  size: 'md',
  showLabel: true
});

// Update progress
progress.setValue(45);

// Set progress with animation
progress.animateTo(75, 1000); // animate to 75% over 1 second
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Current progress value |
| `max` | `number` | `100` | Maximum progress value |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Progress bar height |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error'` | `'primary'` | Color theme |
| `striped` | `boolean` | `false` | Enable striped pattern |
| `animated` | `boolean` | `false` | Animate the stripes |
| `showLabel` | `boolean` | `false` | Show progress label |

## CSS Classes

| Class | Description |
|-------|-------------|
| `sage-progress` | Base progress container |
| `sage-progress-bar` | Progress bar element |
| `sage-progress-sm` | Small size |
| `sage-progress-lg` | Large size |
| `sage-progress-bar-secondary` | Secondary color |
| `sage-progress-bar-success` | Success color |
| `sage-progress-bar-warning` | Warning color |
| `sage-progress-bar-error` | Error color |
| `sage-progress-bar-striped` | Striped pattern |
| `sage-progress-bar-animated` | Animated stripes |
| `sage-progress-label` | Progress label text |

## Accessibility

- Progress bars include appropriate ARIA attributes
- Use `role="progressbar"` for screen readers
- Include `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`

```html
<div class="sage-progress" 
     role="progressbar" 
     aria-valuenow="60" 
     aria-valuemin="0" 
     aria-valuemax="100"
     aria-label="Upload progress">
  <div class="sage-progress-bar" style="width: 60%">
    <span class="sage-progress-label">60%</span>
  </div>
</div>
```

## Examples

### File Upload Progress

```html
<div class="space-y-2">
  <div class="flex justify-between">
    <span class="text-sm font-medium">Uploading document.pdf</span>
    <span class="text-sm text-sage-600">67%</span>
  </div>
  <div class="sage-progress">
    <div class="sage-progress-bar sage-progress-bar-striped sage-progress-bar-animated" 
         style="width: 67%"></div>
  </div>
  <div class="text-xs text-sage-500">2.3 MB of 3.4 MB</div>
</div>
```

### Skill Level Indicator

```html
<div class="space-y-4">
  <div>
    <div class="flex justify-between mb-1">
      <span class="font-medium">JavaScript</span>
      <span class="text-sage-600">90%</span>
    </div>
    <div class="sage-progress">
      <div class="sage-progress-bar sage-progress-bar-success" style="width: 90%"></div>
    </div>
  </div>
  
  <div>
    <div class="flex justify-between mb-1">
      <span class="font-medium">Python</span>
      <span class="text-sage-600">75%</span>
    </div>
    <div class="sage-progress">
      <div class="sage-progress-bar" style="width: 75%"></div>
    </div>
  </div>
</div>
```
