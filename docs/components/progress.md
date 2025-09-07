# Progress

Progress bars show the completion status of tasks or processes. They provide visual feedback about the progress of operations.

## Basic Usage

<div class="demo-container">
<div class="progress">
  <div class="progress-bar" style="width: 60%"></div>
</div>
</div>

```html
<div class="progress">
  <div class="progress-bar" style="width: 60%"></div>
</div>
```

## With Value
<div class="demo-container">
<div class="progress" data-value="75">
  <div class="progress-bar" style="width: 75%"></div>
</div>
</div>

```html
<div class="progress" data-value="75">
  <div class="progress-bar" style="width: 75%"></div>
</div>
```

## Sizes

Use size modifiers to create progress bars of different heights.

<div class="demo-container">
<div class="progress progress-sm">
  <div class="progress-bar" style="width: 45%"></div>
</div>
 <br>
<!-- Medium (default) -->
<div class="progress">
  <div class="progress-bar" style="width: 60%"></div>
</div>
<br>
<!-- Large -->
<div class="progress progress-lg">
  <div class="progress-bar" style="width: 75%"></div>
</div>
</div>

```html
<!-- Small -->
<div class="progress progress-sm">
  <div class="progress-bar" style="width: 45%"></div>
</div>
<br>

<!-- Medium (default) -->
<div class="progress">
  <div class="progress-bar" style="width: 60%"></div>
</div>
<br>

<!-- Large -->
<div class="progress progress-lg">
  <div class="progress-bar" style="width: 75%"></div>
</div>
```

## Colors

Customize the progress bar color using color modifiers.
<div class="demo-container">
<!-- Primary (default) -->
<div class="progress">
  <div class="progress-bar" style="width: 60%"></div>
</div>
 <br>
<!-- Secondary -->
<div class="progress">
  <div class="progress-bar progress-bar-secondary" style="width: 60%"></div>
</div>
 <br>
<!-- Success -->
<div class="progress">
  <div class="progress-bar progress-bar-success" style="width: 60%"></div>
</div>
 <br>
<!-- Warning -->
<div class="progress">
  <div class="progress-bar progress-bar-warning" style="width: 60%"></div>
</div>
 <br>
<!-- Error -->
<div class="progress">
  <div class="progress-bar progress-bar-error" style="width: 60%"></div>
</div>

</div>

```html
<!-- Primary (default) -->
<div class="progress">
  <div class="progress-bar" style="width: 60%"></div>
</div>

<!-- Secondary -->
<div class="progress">
  <div class="progress-bar progress-bar-secondary" style="width: 60%"></div>
</div>

<!-- Success -->
<div class="progress">
  <div class="progress-bar progress-bar-success" style="width: 60%"></div>
</div>

<!-- Warning -->
<div class="progress">
  <div class="progress-bar progress-bar-warning" style="width: 60%"></div>
</div>

<!-- Error -->
<div class="progress">
  <div class="progress-bar progress-bar-error" style="width: 60%"></div>
</div>
```

## With Label

Show progress percentage or custom text.

<!-- External label -->
<div class="demo-container">
<div>
  <div class="flex justify-between mb-1">
    <span class="text-sm font-medium">Downloading...</span>
    <span class="text-sm text-600">45%</span>
  </div>
  <div class="progress">
    <div class="progress-bar" style="width: 45%"></div>
  </div>
</div>

</div>

```html

<div>
  <div class="flex justify-between mb-1">
    <span class="text-sm font-medium">Downloading...</span>
    <span class="text-sm text-600">45%</span>
  </div>
  <div class="progress">
    <div class="progress-bar" style="width: 45%"></div>
  </div>
</div>
```

## Striped

Add a striped pattern to the progress bar.

<div class="demo-container">
<div class="progress">
  <div class="progress-bar progress-bar-striped" style="width: 60%"></div>
</div>
</div>

```html
<div class="progress">
  <div class="progress-bar progress-bar-striped" style="width: 60%"></div>
</div>
```

## Animated

Animate the stripes for active progress indication.

<div class="demo-container">
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 60%"></div>
</div>
</div>

```html
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 60%"></div>
</div>
```

## Multiple Bars

Stack multiple progress bars for complex progress visualization.

<div class="demo-container">
<div class="progress">
  <div class="progress-bar progress-bar-success" style="width: 35%"></div>
  <div class="progress-bar progress-bar-warning" style="width: 20%"></div>
  <div class="progress-bar progress-bar-error" style="width: 10%"></div>
</div>
</div>

```html
<div class="progress">
  <div class="progress-bar progress-bar-success" style="width: 35%"></div>
  <div class="progress-bar progress-bar-warning" style="width: 20%"></div>
  <div class="progress-bar progress-bar-error" style="width: 10%"></div>
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
| `progress` | Base progress container |
| `progress-bar` | Progress bar element |
| `progress-sm` | Small size |
| `progress-lg` | Large size |
| `progress-bar-secondary` | Secondary color |
| `progress-bar-success` | Success color |
| `progress-bar-warning` | Warning color |
| `progress-bar-error` | Error color |
| `progress-bar-striped` | Striped pattern |
| `progress-bar-animated` | Animated stripes |
| `progress-label` | Progress label text |

## Accessibility

- Progress bars include appropriate ARIA attributes
- Use `role="progressbar"` for screen readers
- Include `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`

```html
<div class="progress" 
     role="progressbar" 
     aria-valuenow="60" 
     aria-valuemin="0" 
     aria-valuemax="100"
     aria-label="Upload progress">
  <div class="progress-bar" style="width: 60%">
    <span class="progress-label">60%</span>
  </div>
</div>
```

## Examples

### File Upload Progress
<div class="demo-container">
<div class="space-y-2">
  <div class="flex justify-between">
    <span class="text-sm font-medium">Uploading document.pdf</span>
    <span class="text-sm text-600">67%</span>
  </div>
  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" 
         style="width: 67%"></div>
  </div>
  <div class="text-xs text-500">2.3 MB of 3.4 MB</div>
</div>
</div>

```html
<div class="space-y-2">
  <div class="flex justify-between">
    <span class="text-sm font-medium">Uploading document.pdf</span>
    <span class="text-sm text-600">67%</span>
  </div>
  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" 
         style="width: 67%"></div>
  </div>
  <div class="text-xs text-500">2.3 MB of 3.4 MB</div>
</div>
```

### Skill Level Indicator

<div class="demo-container">
<div class="space-y-4">
  <div>
    <div class="flex justify-between mb-1">
      <span class="font-medium">JavaScript</span>
      <span class="text-600">90%</span>
    </div>
    <div class="progress">
      <div class="progress-bar progress-bar-success" style="width: 90%"></div>
    </div>
  </div>
  
  <div>
    <div class="flex justify-between mb-1">
      <span class="font-medium">Python</span>
      <span class="text-600">75%</span>
    </div>
    <div class="progress">
      <div class="progress-bar" style="width: 75%"></div>
    </div>
  </div>
</div>
</div>

```html
<div class="space-y-4">
  <div>
    <div class="flex justify-between mb-1">
      <span class="font-medium">JavaScript</span>
      <span class="text-600">90%</span>
    </div>
    <div class="progress">
      <div class="progress-bar progress-bar-success" style="width: 90%"></div>
    </div>
  </div>
  
  <div>
    <div class="flex justify-between mb-1">
      <span class="font-medium">Python</span>
      <span class="text-600">75%</span>
    </div>
    <div class="progress">
      <div class="progress-bar" style="width: 75%"></div>
    </div>
  </div>
</div>
```
