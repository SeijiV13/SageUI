# Radio Button

Radio buttons allow users to select one option from a set of mutually exclusive choices. SageUI provides various radio button styles and states.

## Basic Usage

<div class="demo-container">
  <div class="demo-title">Basic Radio Buttons</div>
  <div class="demo-grid">
    <input type="radio" name="radio-basic" class="radio" checked>
    <input type="radio" name="radio-basic" class="radio">
  </div>
</div>

```html
<!-- Basic radio -->
<input type="radio" name="radio-1" class="radio">

<!-- Radio group with labels -->
<div class="form-control">
  <label class="cursor-pointer label">
    <span class="label-text">Option 1</span> 
    <input type="radio" name="radio-group" class="radio" value="1">
  </label>
  <label class="cursor-pointer label">
    <span class="label-text">Option 2</span> 
    <input type="radio" name="radio-group" class="radio" value="2">
  </label>
</div>
```

<div class="demo-container">
  <div class="demo-title">Radio Group with Labels</div>
  <div class="form-control">
    <label class="cursor-pointer label">
      <span class="label-text">Option 1</span> 
      <input type="radio" name="radio-group-demo" class="radio" value="1" checked>
    </label>
    <label class="cursor-pointer label">
      <span class="label-text">Option 2</span> 
      <input type="radio" name="radio-group-demo" class="radio" value="2">
    </label>
  </div>
</div>

```html
  <div class="demo-title">Radio Group with Labels</div>
  <div class="form-control">
    <label class="cursor-pointer label">
      <span class="label-text">Option 1</span> 
      <input type="radio" name="radio-group-demo" class="radio" value="1" checked>
    </label>
    <label class="cursor-pointer label">
      <span class="label-text">Option 2</span> 
      <input type="radio" name="radio-group-demo" class="radio" value="2">
    </label>
  </div>
```

## Variants

### Sizes

<div class="demo-container">
  <div class="demo-title">Radio Sizes</div>
  <div class="demo-grid gap-4">
    <label class="cursor-pointer label flex-col items-center gap-2">
      <span class="text-xs">Extra Small</span>
      <input type="radio" name="size-demo" class="radio radio-xs" value="xs">
    </label>
    <label class="cursor-pointer label flex-col items-center gap-2">
      <span class="text-xs">Small</span>
      <input type="radio" name="size-demo" class="radio radio-sm" value="sm">
    </label>
    <label class="cursor-pointer label flex-col items-center gap-2">
      <span class="text-xs">Medium</span>
      <input type="radio" name="size-demo" class="radio" value="md" checked>
    </label>
    <label class="cursor-pointer label flex-col items-center gap-2">
      <span class="text-xs">Large</span>
      <input type="radio" name="size-demo" class="radio radio-lg" value="lg">
    </label>
  </div>
</div>

```html
<!-- Extra small -->
<input type="radio" name="size-xs" class="radio radio-xs" checked>

<!-- Small -->
<input type="radio" name="size-sm" class="radio radio-sm" checked>

<!-- Medium (default) -->
<input type="radio" name="size-md" class="radio" checked>

<!-- Large -->
<input type="radio" name="size-lg" class="radio radio-lg" checked>
```

### Colors

<div class="demo-container">
  <div class="demo-title">Radio Colors</div>
  <div class="demo-grid gap-4">
    <label class="cursor-pointer label flex-col items-center gap-2">
      <span class="text-xs">Primary</span>
      <input type="radio" name="color-demo" class="radio radio-primary" value="primary" checked>
    </label>
    <label class="cursor-pointer label flex-col items-center gap-2">
      <span class="text-xs">Secondary</span>
      <input type="radio" name="color-demo" class="radio radio-secondary" value="secondary">
    </label>
    <label class="cursor-pointer label flex-col items-center gap-2">
      <span class="text-xs">Success</span>
      <input type="radio" name="color-demo" class="radio radio-success" value="success">
    </label>
    <label class="cursor-pointer label flex-col items-center gap-2">
      <span class="text-xs">Warning</span>
      <input type="radio" name="color-demo" class="radio radio-warning" value="warning">
    </label>
    <label class="cursor-pointer label flex-col items-center gap-2">
      <span class="text-xs">Error</span>
      <input type="radio" name="color-demo" class="radio radio-error" value="error">
    </label>
  </div>
</div>

```html
<!-- Primary -->
<input type="radio" name="color-primary" class="radio radio-primary" checked>

<!-- Secondary -->
<input type="radio" name="color-secondary" class="radio radio-secondary" checked>

<!-- Success -->
<input type="radio" name="color-success" class="radio radio-success" checked>

<!-- Warning -->
<input type="radio" name="color-warning" class="radio radio-warning" checked>

<!-- Error -->
<input type="radio" name="color-error" class="radio radio-error" checked>
```

### States

<div class="demo-container">
  <div class="demo-title">Radio States</div>
  <div class="demo-grid gap-4">
    <label class="cursor-pointer label flex-col items-center gap-2">
      <span class="text-xs">Selected</span>
      <input type="radio" name="state-demo-1" class="radio" checked>
    </label>
    <label class="cursor-pointer label flex-col items-center gap-2 opacity-50">
      <span class="text-xs">Disabled</span>
      <input type="radio" name="state-demo-2" class="radio" disabled>
    </label>
    <label class="cursor-pointer label flex-col items-center gap-2 opacity-50">
      <span class="text-xs">Disabled & Selected</span>
      <input type="radio" name="state-demo-3" class="radio" disabled checked>
    </label>
  </div>
</div>

```html
<!-- Selected -->
<input type="radio" name="state-selected" class="radio" checked>

<!-- Disabled -->
<input type="radio" name="state-disabled" class="radio" disabled>

<!-- Disabled and selected -->
<input type="radio" name="state-disabled-selected" class="radio" disabled checked>
```

## Radio Button Groups

### Horizontal Layout

<div class="demo-container">
  <div class="demo-title">Horizontal Radio Group</div>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Choose your plan:</span>
    </label>
    <div class="flex gap-6">
      <label class="cursor-pointer label">
        <input type="radio" name="plan-demo" class="radio radio-primary" value="basic">
        <span class="label-text ml-2">Basic</span>
      </label>
      <label class="cursor-pointer label">
        <input type="radio" name="plan-demo" class="radio radio-primary" value="pro" checked>
        <span class="label-text ml-2">Pro</span>
      </label>
      <label class="cursor-pointer label">
        <input type="radio" name="plan-demo" class="radio radio-primary" value="enterprise">
        <span class="label-text ml-2">Enterprise</span>
      </label>
    </div>
  </div>
</div>

```html
<div class="form-control">
  <label class="label">
    <span class="label-text">Choose your plan:</span>
  </label>
  
  <div class="flex gap-6">
    <label class="cursor-pointer label">
      <input type="radio" name="plan" class="radio radio-primary" value="basic">
      <span class="label-text ml-2">Basic</span>
    </label>
    
    <label class="cursor-pointer label">
      <input type="radio" name="plan" class="radio radio-primary" value="pro" checked>
      <span class="label-text ml-2">Pro</span>
    </label>
    
    <label class="cursor-pointer label">
      <input type="radio" name="plan" class="radio radio-primary" value="enterprise">
      <span class="label-text ml-2">Enterprise</span>
    </label>
  </div>
</div>
```

### Vertical Layout

<div class="demo-container">
  <div class="demo-title">Vertical Radio Group</div>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Preferred contact method:</span>
    </label>
    <div class="space-y-2">
      <label class="cursor-pointer label justify-start gap-2">
        <input type="radio" name="contact-demo" class="radio radio-success" value="email" checked>
        <span class="label-text">Email</span>
      </label>
      <label class="cursor-pointer label justify-start gap-2">
        <input type="radio" name="contact-demo" class="radio radio-success" value="phone">
        <span class="label-text">Phone</span>
      </label>
      <label class="cursor-pointer label justify-start gap-2">
        <input type="radio" name="contact-demo" class="radio radio-success" value="sms">
        <span class="label-text">SMS</span>
      </label>
    </div>
  </div>
</div>

```html
<div class="form-control">
  <label class="label">
    <span class="label-text">Preferred contact method:</span>
  </label>
  
  <div class="space-y-2">
    <label class="cursor-pointer label justify-start gap-2">
      <input type="radio" name="contact" class="radio radio-success" value="email" checked>
      <span class="label-text">Email</span>
    </label>
    
    <label class="cursor-pointer label justify-start gap-2">
      <input type="radio" name="contact" class="radio radio-success" value="phone">
      <span class="label-text">Phone</span>
    </label>
    
    <label class="cursor-pointer label justify-start gap-2">
      <input type="radio" name="contact" class="radio radio-success" value="sms">
      <span class="label-text">SMS</span>
    </label>
  </div>
</div>
```

### Card-style Options

<div class="demo-container">
  <div class="demo-title">Card-style Radio Options</div>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Select shipping method:</span>
    </label>
    <div class="grid grid-cols-1 gap-3">
      <label class="cursor-pointer">
        <input type="radio" name="shipping-demo" class="radio radio-primary sr-only" value="standard" checked>
        <div class="card bg-base-100 border-2 border-primary shadow-sm hover:shadow-md transition-shadow">
          <div class="card-body p-4">
            <div class="flex items-center gap-3">
              <div class="radio radio-primary checked:opacity-100 opacity-60"></div>
              <div>
                <h3 class="font-semibold">Standard Shipping</h3>
                <p class="text-sm text-base-content/70">5-7 business days • Free</p>
              </div>
            </div>
          </div>
        </div>
      </label>
      <label class="cursor-pointer">
        <input type="radio" name="shipping-demo" class="radio radio-primary sr-only" value="express">
        <div class="card bg-base-100 border-2 border-base-300 shadow-sm hover:shadow-md transition-shadow">
          <div class="card-body p-4">
            <div class="flex items-center gap-3">
              <div class="radio radio-primary opacity-60"></div>
              <div>
                <h3 class="font-semibold">Express Shipping</h3>
                <p class="text-sm text-base-content/70">2-3 business days • $15.99</p>
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
  </div>
</div>

```html
<div class="form-control">
  <label class="label">
    <span class="label-text">Select shipping method:</span>
  </label>
  
  <div class="grid grid-cols-1 gap-3">
    <label class="cursor-pointer">
      <input type="radio" name="shipping" class="radio radio-primary sr-only" value="standard" checked>
      <div class="card bg-base-100 border-2 border-primary shadow-sm hover:shadow-md transition-shadow">
        <div class="card-body p-4">
          <div class="flex items-center gap-3">
            <div class="radio radio-primary checked:opacity-100 opacity-60"></div>
            <div>
              <h3 class="font-semibold">Standard Shipping</h3>
              <p class="text-sm text-base-content/70">5-7 business days • Free</p>
            </div>
          </div>
        </div>
      </div>
    </label>
    
    <label class="cursor-pointer">
      <input type="radio" name="shipping" class="radio radio-primary sr-only" value="express">
      <div class="card bg-base-100 border-2 border-base-300 shadow-sm hover:shadow-md transition-shadow">
        <div class="card-body p-4">
          <div class="flex items-center gap-3">
            <div class="radio radio-primary opacity-60"></div>
            <div>
              <h3 class="font-semibold">Express Shipping</h3>
              <p class="text-sm text-base-content/70">2-3 business days • $15.99</p>
            </div>
          </div>
        </div>
      </div>
    </label>
  </div>
</div>
```

## TypeScript Usage

```typescript
import { Radio } from 'sageui';

// Create a radio group instance
const radioGroup = new Radio({
  name: 'my-radio-group',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ],
  variant: 'primary',
  size: 'md',
  value: '1'
});

// Render to container
radioGroup.render(document.getElementById('radio-container'));

// Update properties
radioGroup.setVariant('success');
radioGroup.setSize('lg');
radioGroup.setValue('2');

// Event handling
radioGroup.onChange((value) => {
  console.log('Selected value:', value);
});

// Get current selection
console.log('Current value:', radioGroup.getValue());
console.log('Selected option:', radioGroup.getSelectedOption());
```

## Accessibility

- Always use the same `name` attribute for radio buttons in the same group
- Provide labels for all radio buttons using `<label>` elements
- Use `fieldset` and `legend` for radio button groups
- Ensure sufficient color contrast for all states
- Support keyboard navigation (Arrow keys to move between options, Space to select)
- Use `aria-describedby` for additional help text
- Consider using `role="radiogroup"` for custom radio implementations

## CSS Classes

| Class | Description |
|-------|-------------|
| `radio` | Base radio button styles |
| `radio-xs` | Extra small size |
| `radio-sm` | Small size |
| `radio-lg` | Large size |
| `radio-primary` | Primary color variant |
| `radio-secondary` | Secondary color variant |
| `radio-success` | Success color variant |
| `radio-warning` | Warning color variant |
| `radio-error` | Error color variant |

## Examples

### Survey Question

<div class="demo-container">
<div class="card w-full max-w-lg bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">How satisfied are you with our service?</h2>
    <div class="form-control">
      <div class="space-y-3 mt-4">
        <label class="cursor-pointer label justify-start gap-3">
          <input type="radio" name="satisfaction" class="radio radio-error" value="1">
          <span class="label-text">Very Dissatisfied</span>
        </label>
        <label class="cursor-pointer label justify-start gap-3">
          <input type="radio" name="satisfaction" class="radio radio-warning" value="2">
          <span class="label-text">Dissatisfied</span>
        </label>
        <label class="cursor-pointer label justify-start gap-3">
          <input type="radio" name="satisfaction" class="radio radio-secondary" value="3">
          <span class="label-text">Neutral</span>
        </label>
        <label class="cursor-pointer label justify-start gap-3">
          <input type="radio" name="satisfaction" class="radio radio-primary" value="4">
          <span class="label-text">Satisfied</span>
        </label>
        <label class="cursor-pointer label justify-start gap-3">
          <input type="radio" name="satisfaction" class="radio radio-success" value="5">
          <span class="label-text">Very Satisfied</span>
        </label>
      </div>
    </div>
    <div class="card-actions justify-end mt-6">
      <button class="btn btn-primary">Submit</button>
    </div>
  </div>
</div>

</div>

```html
<div class="card w-full max-w-lg bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">How satisfied are you with our service?</h2>
    
    <div class="form-control">
      <div class="space-y-3 mt-4">
        <label class="cursor-pointer label justify-start gap-3">
          <input type="radio" name="satisfaction" class="radio radio-error" value="1">
          <span class="label-text">Very Dissatisfied</span>
        </label>
        
        <label class="cursor-pointer label justify-start gap-3">
          <input type="radio" name="satisfaction" class="radio radio-warning" value="2">
          <span class="label-text">Dissatisfied</span>
        </label>
        
        <label class="cursor-pointer label justify-start gap-3">
          <input type="radio" name="satisfaction" class="radio radio-secondary" value="3">
          <span class="label-text">Neutral</span>
        </label>
        
        <label class="cursor-pointer label justify-start gap-3">
          <input type="radio" name="satisfaction" class="radio radio-primary" value="4">
          <span class="label-text">Satisfied</span>
        </label>
        
        <label class="cursor-pointer label justify-start gap-3">
          <input type="radio" name="satisfaction" class="radio radio-success" value="5">
          <span class="label-text">Very Satisfied</span>
        </label>
      </div>
    </div>
    
    <div class="card-actions justify-end mt-6">
      <button class="btn btn-primary">Submit</button>
    </div>
  </div>
</div>
```

### Payment Method Selection

<div class="demo-container">
<fieldset class="form-control">
  <legend class="label">
    <span class="label-text text-lg font-semibold">Payment Method</span>
  </legend>
  
  <div class="grid grid-cols-1 gap-2 mt-4">
    <label class="cursor-pointer p-3 rounded-lg border border-base-300 hover:border-primary transition-colors">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <input type="radio" name="payment" class="radio radio-primary" value="card" checked>
          <span class="font-medium">Credit/Debit Card</span>
        </div>
        <div class="flex gap-1">
          <svg class="w-8 h-5" viewBox="0 0 48 30" fill="none">
          </svg>
        </div>
      </div>
    </label>
    <label class="cursor-pointer p-3 rounded-lg border border-base-300 hover:border-primary transition-colors">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <input type="radio" name="payment" class="radio radio-primary" value="paypal">
          <span class="font-medium">PayPal</span>
        </div>
        <div class="text-blue-600 font-bold">PayPal</div>
      </div>
    </label>
    <label class="cursor-pointer p-3 rounded-lg border border-base-300 hover:border-primary transition-colors">
      <div class="flex items-center gap-3">
        <input type="radio" name="payment" class="radio radio-primary" value="bank">
        <span class="font-medium">Bank Transfer</span>
      </div>
    </label>
  </div>
</fieldset>

</div>

```html
<fieldset class="form-control">
  <legend class="label">
    <span class="label-text text-lg font-semibold">Payment Method</span>
  </legend>
  
  <div class="grid grid-cols-1 gap-2 mt-4">
    <label class="cursor-pointer p-3 rounded-lg border border-base-300 hover:border-primary transition-colors">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <input type="radio" name="payment" class="radio radio-primary" value="card" checked>
          <span class="font-medium">Credit/Debit Card</span>
        </div>
        <div class="flex gap-1">
          <svg class="w-8 h-5" viewBox="0 0 48 30" fill="none">
            <!-- Visa/Mastercard icons -->
          </svg>
        </div>
      </div>
    </label>
    
    <label class="cursor-pointer p-3 rounded-lg border border-base-300 hover:border-primary transition-colors">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <input type="radio" name="payment" class="radio radio-primary" value="paypal">
          <span class="font-medium">PayPal</span>
        </div>
        <div class="text-blue-600 font-bold">PayPal</div>
      </div>
    </label>
    
    <label class="cursor-pointer p-3 rounded-lg border border-base-300 hover:border-primary transition-colors">
      <div class="flex items-center gap-3">
        <input type="radio" name="payment" class="radio radio-primary" value="bank">
        <span class="font-medium">Bank Transfer</span>
      </div>
    </label>
  </div>
</fieldset>
```
