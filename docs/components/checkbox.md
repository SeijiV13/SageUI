# Checkbox

Checkboxes allow users to select one or more options from a set. SageUI provides various checkbox styles and states.

## Basic Usage

<div class="demo-container">
  <div class="demo-title">Basic Checkboxes</div>
  <div class="demo-grid">
    <input type="checkbox" class="checkbox" checked>
    <input type="checkbox" class="checkbox">
  </div>
</div>

```html
<!-- Basic checkbox -->
<input type="checkbox" class="checkbox">

<!-- With label -->
<div class="form-control">
  <label class="cursor-pointer label">
    <span class="label-text">Remember me</span> 
    <input type="checkbox" class="checkbox">
  </label>
</div>
```

<div class="demo-container">
  <div class="demo-title">Checkbox with Label</div>
  <div class="form-control">
    <label class="cursor-pointer label">
      <span class="label-text">Remember me</span> 
      <input type="checkbox" class="checkbox" checked>
    </label>
  </div>
</div>

## Variants

### Sizes

<div class="demo-container">
  <div class="demo-title">Checkbox Sizes</div>
  <div class="demo-grid gap-4">
    <label class="cursor-pointer label flex-col items-center gap-2">
      <span class="text-xs">Extra Small</span>
      <input type="checkbox" class="checkbox checkbox-xs" checked>
    </label>
    <label class="cursor-pointer label flex-col items-center gap-2">
      <span class="text-xs">Small</span>
      <input type="checkbox" class="checkbox checkbox-sm" checked>
    </label>
    <label class="cursor-pointer label flex-col items-center gap-2">
      <span class="text-xs">Medium</span>
      <input type="checkbox" class="checkbox" checked>
    </label>
    <label class="cursor-pointer label flex-col items-center gap-2">
      <span class="text-xs">Large</span>
      <input type="checkbox" class="checkbox checkbox-lg" checked>
    </label>
  </div>
</div>

```html
<!-- Extra small -->
<input type="checkbox" class="checkbox checkbox-xs">

<!-- Small -->
<input type="checkbox" class="checkbox checkbox-sm">

<!-- Medium (default) -->
<input type="checkbox" class="checkbox">

<!-- Large -->
<input type="checkbox" class="checkbox checkbox-lg">
```


### States

<div class="demo-container">
  <div class="demo-title">Checkbox States</div>
  <div class="demo-grid gap-4">
    <label class="cursor-pointer label flex-col items-center gap-2">
      <span class="text-xs">Checked</span>
      <input type="checkbox" class="checkbox" checked>
    </label>
    <label class="cursor-pointer label flex-col items-center gap-2 opacity-50">
      <span class="text-xs">Disabled</span>
      <input type="checkbox" class="checkbox" disabled>
    </label>
    <label class="cursor-pointer label flex-col items-center gap-2 opacity-50">
      <span class="text-xs">Disabled & Checked</span>
      <input type="checkbox" class="checkbox" disabled checked>
    </label>
    <label class="cursor-pointer label flex-col items-center gap-2">
      <span class="text-xs">Indeterminate</span>
      <input type="checkbox" class="checkbox" id="indeterminate-demo">
    </label>
  </div>
</div>

<script>
  // Set indeterminate state for demo
  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
      const checkbox = document.getElementById('indeterminate-demo');
      if (checkbox) {
        checkbox.indeterminate = true;
      }
    });
  }
</script>

```html
<!-- Checked -->
<input type="checkbox" class="checkbox" checked>

<!-- Disabled -->
<input type="checkbox" class="checkbox" disabled>

<!-- Disabled and checked -->
<input type="checkbox" class="checkbox" disabled checked>

<!-- Indeterminate state -->
<input type="checkbox" class="checkbox" id="indeterminate-checkbox">
<script>
  document.getElementById('indeterminate-checkbox').indeterminate = true;
</script>
```

## Checkbox List

<div class="demo-container">
  <div class="demo-title">Checkbox List</div>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Select your interests:</span>
    </label>
    <div class="space-y-2 justify-end">
      <label class="cursor-pointer label">
        <span class="label-text">Item 1</span>
        <input type="checkbox" class="checkbox checkbox-primary item-checkbox">
      </label>
      <label class="cursor-pointer label">
        <span class="label-text">Item 2</span>
        <input type="checkbox" class="checkbox checkbox-primary item-checkbox">
      </label>
      <label class="cursor-pointer label">
        <span class="label-text">Item 3</span>
        <input type="checkbox" class="checkbox checkbox-primary item-checkbox">
      </label>
    </div>
  </div>
</div>

```html
<div class="form-control">
  <label class="label">
    <span class="label-text">Select your interests:</span>
  </label>
  
  <label class="cursor-pointer label">
    <span class="label-text">Technology</span> 
    <input type="checkbox" class="checkbox checkbox-primary">
  </label>
  
  <label class="cursor-pointer label">
    <span class="label-text">Design</span> 
    <input type="checkbox" class="checkbox checkbox-primary">
  </label>
  
  <label class="cursor-pointer label">
    <span class="label-text">Marketing</span> 
    <input type="checkbox" class="checkbox checkbox-primary">
  </label>
</div>
```

## Checkbox Group

<div class="demo-container">
  <div class="demo-title">Checkbox Group</div>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Newsletter Preferences</span>
    </label>
    <div class="space-y-2">
      <label class="cursor-pointer label justify-start gap-2">
        <input type="checkbox" class="checkbox checkbox-success">
        <span class="label-text">Weekly newsletter</span>
      </label>
      <label class="cursor-pointer label justify-start gap-2">
        <input type="checkbox" class="checkbox checkbox-success" checked>
        <span class="label-text">Product updates</span>
      </label>
      <label class="cursor-pointer label justify-start gap-2">
        <input type="checkbox" class="checkbox checkbox-success" checked>
        <span class="label-text">Special offers</span>
      </label>
    </div>
  </div>
</div>

```html
<div class="form-control">
  <label class="label">
    <span class="label-text">Newsletter Preferences</span>
  </label>
  
  <div class="space-y-2">
    <label class="cursor-pointer label justify-start gap-2">
      <input type="checkbox" class="checkbox checkbox-success">
      <span class="label-text">Weekly newsletter</span>
    </label>
    
    <label class="cursor-pointer label justify-start gap-2">
      <input type="checkbox" class="checkbox checkbox-success" checked>
      <span class="label-text">Product updates</span>
    </label>
    
    <label class="cursor-pointer label justify-start gap-2">
      <input type="checkbox" class="checkbox checkbox-success">
      <span class="label-text">Special offers</span>
    </label>
  </div>
</div>
```

## TypeScript Usage

```typescript
import { Checkbox } from 'sageui';

// Create a checkbox instance
const checkbox = new Checkbox({
  element: document.getElementById('my-checkbox'),
  variant: 'primary',
  size: 'lg',
  checked: false
});

// Update properties
checkbox.setVariant('success');
checkbox.setSize('sm');
checkbox.setChecked(true);

// Event handling
checkbox.onChange((checked) => {
  console.log('Checkbox changed:', checked);
});

// Get current state
console.log('Is checked:', checkbox.isChecked());
console.log('Is disabled:', checkbox.isDisabled());
```

## Accessibility

- Always provide labels for checkboxes using `<label>` elements
- Use `fieldset` and `legend` for related checkbox groups
- Ensure sufficient color contrast for all states
- Support keyboard navigation (Space to toggle)
- Use `aria-describedby` for additional help text
- Consider using `indeterminate` state for parent checkboxes in hierarchical lists

## CSS Classes

| Class | Description |
|-------|-------------|
| `checkbox` | Base checkbox styles |
| `checkbox-xs` | Extra small size |
| `checkbox-sm` | Small size |
| `checkbox-lg` | Large size |
| `checkbox-primary` | Primary color variant |
| `checkbox-secondary` | Secondary color variant |
| `checkbox-success` | Success color variant |
| `checkbox-warning` | Warning color variant |
| `checkbox-error` | Error color variant |

## Examples

### Terms and Conditions

<div class="demo-container">
  <div class="form-control">
    <label class="cursor-pointer label">
      <span class="label-text">
        I agree to the 
        <a href="#" class="link link-primary">Terms and Conditions</a> 
        and 
        <a href="#" class="link link-primary">Privacy Policy</a>
      </span>
      <input type="checkbox" class="checkbox checkbox-primary" required>
    </label>
  </div>
</div>

```html
<div class="form-control">
  <label class="cursor-pointer label">
    <span class="label-text">
      I agree to the 
      <a href="#" class="link link-primary">Terms and Conditions</a> 
      and 
      <a href="#" class="link link-primary">Privacy Policy</a>
    </span>
    <input type="checkbox" class="checkbox checkbox-primary" required>
  </label>
</div>
```

### Feature Toggles

<div class="demo-container">
<div class="card w-full max-w-md bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Settings</h2>    
    <div class="space-y-4">
      <label class="cursor-pointer label">
        <span class="label-text">Email notifications</span>
        <input type="checkbox" class="checkbox checkbox-primary" checked>
      </label>
      <label class="cursor-pointer label">
        <span class="label-text">SMS notifications</span>
        <input type="checkbox" class="checkbox checkbox-primary">
      </label>
      <label class="cursor-pointer label">
        <span class="label-text">Dark mode</span>
        <input type="checkbox" class="checkbox checkbox-primary">
      </label>
    </div>
    <div class="card-actions justify-end mt-6">
      <button class="btn btn-primary">Save</button>
    </div>
  </div>
</div>

</div>

```html
<div class="card w-full max-w-md bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Settings</h2>
    
    <div class="space-y-4">
      <label class="cursor-pointer label">
        <span class="label-text">Email notifications</span>
        <input type="checkbox" class="checkbox checkbox-primary" checked>
      </label>
      
      <label class="cursor-pointer label">
        <span class="label-text">SMS notifications</span>
        <input type="checkbox" class="checkbox checkbox-primary">
      </label>
      
      <label class="cursor-pointer label">
        <span class="label-text">Dark mode</span>
        <input type="checkbox" class="checkbox checkbox-primary">
      </label>
    </div>
    
    <div class="card-actions justify-end mt-6">
      <button class="btn btn-primary">Save</button>
    </div>
  </div>
</div>
```

### Select All Functionality

<div class="demo-container">
<div class="form-control">
  <label class="cursor-pointer label">
    <span class="label-text font-semibold">Select All</span>
    <input type="checkbox" class="checkbox checkbox-primary" id="select-all">
  </label>
  <div class="divider my-2"></div>
  <div class="space-y-2 ml-4">
    <label class="cursor-pointer label">
      <span class="label-text">Item 1</span>
      <input type="checkbox" class="checkbox checkbox-primary item-checkbox">
    </label>
    <label class="cursor-pointer label">
      <span class="label-text">Item 2</span>
      <input type="checkbox" class="checkbox checkbox-primary item-checkbox">
    </label>
    <label class="cursor-pointer label">
      <span class="label-text">Item 3</span>
      <input type="checkbox" class="checkbox checkbox-primary item-checkbox">
    </label>
  </div>
</div>
</div>

```html
<div class="form-control">
  <label class="cursor-pointer label">
    <span class="label-text font-semibold">Select All</span>
    <input type="checkbox" class="checkbox checkbox-primary" id="select-all">
  </label>
  
  <div class="divider my-2"></div>
  
  <div class="space-y-2 ml-4">
    <label class="cursor-pointer label">
      <span class="label-text">Item 1</span>
      <input type="checkbox" class="checkbox checkbox-primary item-checkbox">
    </label>
    
    <label class="cursor-pointer label">
      <span class="label-text">Item 2</span>
      <input type="checkbox" class="checkbox checkbox-primary item-checkbox">
    </label>
    
    <label class="cursor-pointer label">
      <span class="label-text">Item 3</span>
      <input type="checkbox" class="checkbox checkbox-primary item-checkbox">
    </label>
  </div>
</div>

<script>
const selectAll = document.getElementById('select-all');
const itemCheckboxes = document.querySelectorAll('.item-checkbox');

selectAll.addEventListener('change', function() {
  itemCheckboxes.forEach(checkbox => {
    checkbox.checked = this.checked;
  });
});

itemCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const checkedItems = document.querySelectorAll('.item-checkbox:checked').length;
    const totalItems = itemCheckboxes.length;
    
    selectAll.indeterminate = checkedItems > 0 && checkedItems < totalItems;
    selectAll.checked = checkedItems === totalItems;
  });
});
</script>
```
