# Tooltip

Tooltips provide additional information when users hover over or focus on elements. They're perfect for explaining features, showing extra details, or providing context without cluttering the interface.

## Basic Usage

```html
<!-- Basic tooltip -->
<button class="sage-btn tooltip" data-tip="This is a tooltip">
  Hover me
</button>

<!-- Tooltip with different positions -->
<div class="flex gap-4">
  <button class="sage-btn tooltip tooltip-top" data-tip="Tooltip on top">Top</button>
  <button class="sage-btn tooltip tooltip-right" data-tip="Tooltip on right">Right</button>
  <button class="sage-btn tooltip tooltip-bottom" data-tip="Tooltip on bottom">Bottom</button>
  <button class="sage-btn tooltip tooltip-left" data-tip="Tooltip on left">Left</button>
</div>
```

## Tooltip Variants

### Colors

```html
<!-- Primary tooltip -->
<button class="sage-btn tooltip tooltip-primary" data-tip="Primary tooltip">Primary</button>

<!-- Secondary tooltip -->
<button class="sage-btn tooltip tooltip-secondary" data-tip="Secondary tooltip">Secondary</button>

<!-- Success tooltip -->
<button class="sage-btn tooltip tooltip-success" data-tip="Success tooltip">Success</button>

<!-- Warning tooltip -->
<button class="sage-btn tooltip tooltip-warning" data-tip="Warning tooltip">Warning</button>

<!-- Error tooltip -->
<button class="sage-btn tooltip tooltip-error" data-tip="Error tooltip">Error</button>

<!-- Info tooltip -->
<button class="sage-btn tooltip tooltip-info" data-tip="Info tooltip">Info</button>
```

### States

```html
<!-- Always visible tooltip -->
<button class="sage-btn tooltip tooltip-open" data-tip="This tooltip is always visible">
  Always Visible
</button>

<!-- Tooltip that appears on focus -->
<input type="text" class="sage-input tooltip" data-tip="Enter your username" placeholder="Username">

<!-- Disabled element with tooltip -->
<div class="tooltip" data-tip="This button is disabled">
  <button class="sage-btn" disabled>Disabled Button</button>
</div>
```

## Multi-line Tooltips

```html
<!-- Multi-line tooltip -->
<button class="sage-btn tooltip" data-tip="This is a longer tooltip that spans multiple lines and provides more detailed information about the element.">
  Long Tooltip
</button>

<!-- Tooltip with line breaks -->
<button class="sage-btn tooltip" data-tip="Line 1&#10;Line 2&#10;Line 3">
  Multi-line
</button>
```

## Rich Content Tooltips

```html
<!-- Tooltip with HTML content (requires custom implementation) -->
<div class="relative">
  <button class="sage-btn" id="rich-tooltip-trigger">Rich Tooltip</button>
  
  <!-- Custom tooltip content -->
  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" id="rich-tooltip">
    <div class="bg-base-300 text-base-content rounded-lg p-3 shadow-lg max-w-xs">
      <div class="flex items-center gap-2 mb-2">
        <div class="sage-avatar">
          <div class="w-6 rounded-full">
            <img src="avatar.jpg" alt="User">
          </div>
        </div>
        <div>
          <div class="font-semibold text-sm">John Doe</div>
          <div class="text-xs opacity-70">Software Engineer</div>
        </div>
      </div>
      <p class="text-xs">Click to view full profile and contact information.</p>
    </div>
    <div class="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-base-300"></div>
  </div>
</div>
```

## Interactive Elements with Tooltips

```html
<!-- Icon with tooltip -->
<div class="flex items-center gap-2">
  <span>Account Status</span>
  <div class="tooltip tooltip-right" data-tip="Your account is active and verified">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-success cursor-help" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </div>
</div>

<!-- Form field with help tooltip -->
<div class="sage-form-control">
  <label class="sage-label">
    <span class="sage-label-text flex items-center gap-2">
      Password
      <div class="tooltip tooltip-right" data-tip="Password must be at least 8 characters long and contain uppercase, lowercase, numbers, and special characters">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 cursor-help" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </span>
  </label>
  <input type="password" class="sage-input sage-input-bordered">
</div>

<!-- Badge with tooltip -->
<div class="flex items-center gap-2">
  <span>Status:</span>
  <div class="tooltip" data-tip="Last updated 5 minutes ago">
    <div class="sage-badge sage-badge-success">Active</div>
  </div>
</div>
```

## Tooltip Positioning

```html
<!-- Smart positioning (automatically adjusts based on available space) -->
<div class="grid grid-cols-3 gap-4 p-8">
  <!-- Top row -->
  <div class="tooltip tooltip-bottom" data-tip="Positioned bottom due to space constraints">
    <button class="sage-btn sage-btn-sm w-full">Top-Left</button>
  </div>
  <div class="tooltip tooltip-bottom" data-tip="Bottom tooltip">
    <button class="sage-btn sage-btn-sm w-full">Top-Center</button>
  </div>
  <div class="tooltip tooltip-bottom" data-tip="Positioned bottom due to space constraints">
    <button class="sage-btn sage-btn-sm w-full">Top-Right</button>
  </div>
  
  <!-- Middle row -->
  <div class="tooltip tooltip-right" data-tip="Right tooltip">
    <button class="sage-btn sage-btn-sm w-full">Left</button>
  </div>
  <div class="tooltip tooltip-top" data-tip="Center tooltip">
    <button class="sage-btn sage-btn-sm w-full">Center</button>
  </div>
  <div class="tooltip tooltip-left" data-tip="Left tooltip">
    <button class="sage-btn sage-btn-sm w-full">Right</button>
  </div>
  
  <!-- Bottom row -->
  <div class="tooltip tooltip-top" data-tip="Top tooltip">
    <button class="sage-btn sage-btn-sm w-full">Bottom-Left</button>
  </div>
  <div class="tooltip tooltip-top" data-tip="Top tooltip">
    <button class="sage-btn sage-btn-sm w-full">Bottom-Center</button>
  </div>
  <div class="tooltip tooltip-top" data-tip="Top tooltip">
    <button class="sage-btn sage-btn-sm w-full">Bottom-Right</button>
  </div>
</div>
```

## TypeScript Usage

```typescript
import { Tooltip } from 'sageui';

// Create a tooltip instance
const tooltip = new Tooltip({
  target: document.getElementById('my-button'),
  content: 'This is a tooltip',
  position: 'top',
  variant: 'primary',
  delay: 500,
  duration: 200
});

// Update tooltip content
tooltip.setContent('Updated tooltip text');

// Update position
tooltip.setPosition('bottom');

// Show/hide manually
tooltip.show();
tooltip.hide();
tooltip.toggle();

// Event handling
tooltip.onShow(() => {
  console.log('Tooltip shown');
});

tooltip.onHide(() => {
  console.log('Tooltip hidden');
});

// Rich content tooltip
const richTooltip = new Tooltip({
  target: document.getElementById('rich-target'),
  content: `
    <div class="flex items-center gap-2">
      <img src="avatar.jpg" class="w-8 h-8 rounded-full" alt="User">
      <div>
        <div class="font-semibold">John Doe</div>
        <div class="text-xs opacity-70">Online</div>
      </div>
    </div>
  `,
  position: 'right',
  allowHTML: true
});

// Tooltip with custom trigger
const customTooltip = new Tooltip({
  target: document.getElementById('custom-target'),
  content: 'Custom tooltip',
  trigger: 'click', // 'hover', 'focus', 'manual'
  hideOnClick: true
});

// Global tooltip configuration
Tooltip.setDefaults({
  position: 'top',
  variant: 'primary',
  delay: 300,
  duration: 150
});
```

## Advanced Examples

### Data Table with Tooltips

```html
<div class="overflow-x-auto">
  <table class="table table-zebra w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>
          <div class="flex items-center gap-1">
            Status
            <div class="tooltip" data-tip="User account status: Active, Inactive, or Suspended">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 cursor-help" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>
          <div class="tooltip" data-tip="Account created on Jan 15, 2024. Last login: Today">
            <div class="sage-badge sage-badge-success">Active</div>
          </div>
        </td>
        <td>
          <div class="flex gap-1">
            <div class="tooltip" data-tip="Edit user details">
              <button class="sage-btn sage-btn-ghost sage-btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
            <div class="tooltip tooltip-error" data-tip="Delete user (cannot be undone)">
              <button class="sage-btn sage-btn-ghost sage-btn-sm text-error">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### Dashboard Widgets with Tooltips

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Revenue Widget -->
  <div class="card bg-base-100 shadow">
    <div class="card-body">
      <div class="flex justify-between items-start">
        <h3 class="text-lg font-semibold">Revenue</h3>
        <div class="tooltip tooltip-left" data-tip="Total revenue for the current month compared to last month">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 cursor-help" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      
      <div class="text-3xl font-bold text-success">$124,500</div>
      
      <div class="flex items-center gap-1 text-sm">
        <div class="tooltip tooltip-success" data-tip="Revenue increased by 12.5% compared to last month">
          <div class="sage-badge sage-badge-success sage-badge-sm">+12.5%</div>
        </div>
        <span class="text-base-content/70">vs last month</span>
      </div>
    </div>
  </div>
  
  <!-- Users Widget -->
  <div class="card bg-base-100 shadow">
    <div class="card-body">
      <div class="flex justify-between items-start">
        <h3 class="text-lg font-semibold">Active Users</h3>
        <div class="tooltip tooltip-left" data-tip="Number of users who logged in within the last 30 days">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 cursor-help" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      
      <div class="text-3xl font-bold text-primary">2,847</div>
      
      <div class="flex items-center gap-1 text-sm">
        <div class="tooltip tooltip-primary" data-tip="User count increased by 8.2% this month">
          <div class="sage-badge sage-badge-primary sage-badge-sm">+8.2%</div>
        </div>
        <span class="text-base-content/70">vs last month</span>
      </div>
    </div>
  </div>
  
  <!-- Conversion Rate Widget -->
  <div class="card bg-base-100 shadow">
    <div class="card-body">
      <div class="flex justify-between items-start">
        <h3 class="text-lg font-semibold">Conversion Rate</h3>
        <div class="tooltip tooltip-left" data-tip="Percentage of visitors who completed a purchase or signup">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 cursor-help" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      
      <div class="text-3xl font-bold text-secondary">3.2%</div>
      
      <div class="flex items-center gap-1 text-sm">
        <div class="tooltip tooltip-error" data-tip="Conversion rate decreased by 1.1% - needs attention">
          <div class="sage-badge sage-badge-error sage-badge-sm">-1.1%</div>
        </div>
        <span class="text-base-content/70">vs last month</span>
      </div>
    </div>
  </div>
</div>
```

## Accessibility

- Ensure tooltips are accessible via keyboard navigation
- Use appropriate ARIA attributes (`aria-describedby`, `role="tooltip"`)
- Don't rely solely on tooltips for critical information
- Ensure sufficient color contrast for tooltip text
- Consider users with motor impairments - provide adequate hover/focus time
- Support escape key to dismiss tooltips
- Ensure tooltips don't interfere with screen readers

## CSS Classes

| Class | Description |
|-------|-------------|
| `tooltip` | Base tooltip styles |
| `tooltip-top` | Position tooltip above element |
| `tooltip-right` | Position tooltip to the right |
| `tooltip-bottom` | Position tooltip below element |
| `tooltip-left` | Position tooltip to the left |
| `tooltip-primary` | Primary color variant |
| `tooltip-secondary` | Secondary color variant |
| `tooltip-success` | Success color variant |
| `tooltip-warning` | Warning color variant |
| `tooltip-error` | Error color variant |
| `tooltip-info` | Info color variant |
| `tooltip-open` | Always visible tooltip |

## Best Practices

1. **Keep it concise** - Tooltips should provide brief, helpful information
2. **Use appropriate positioning** - Ensure tooltips don't get cut off by viewport edges
3. **Consistent timing** - Use consistent show/hide delays across your application
4. **Don't overuse** - Only add tooltips where they provide real value
5. **Mobile considerations** - Remember that mobile devices don't have hover states
6. **Keyboard accessibility** - Ensure tooltips work with keyboard navigation
7. **Performance** - Don't create too many tooltip instances if not needed
