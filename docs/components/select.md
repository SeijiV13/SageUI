# Select

Select dropdowns allow users to choose one or multiple options from a list. SageUI provides various select styles and states.

## Basic Usage

<div class="demo-container">
  <div class="demo-title">Basic Select</div>
  <div class="demo-grid gap-4">
    <select class="select">
      <option disabled selected>Choose an option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>
</div>

```html
<!-- Basic select -->
<select class="select">
  <option disabled selected>Choose an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>

<!-- With label -->
<div class="form-control">
  <label class="label">
    <span class="label-text">Country</span>
  </label>
  <select class="select select-bordered">
    <option disabled selected>Select country</option>Grouped Options
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
  </select>
</div>
```

<div class="demo-container">
  <div class="demo-title">Select with Label</div>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Country</span>
    </label>
    <select class="select select-bordered">
      <option disabled selected>Select country</option>
      <option value="us">United States</option>
      <option value="ca">Canada</option>
      <option value="uk">United Kingdom</option>
    </select>
  </div>
</div>

## Variants

### Sizes

<div class="demo-container">
  <div class="demo-title">Select Sizes</div>
  <div class="demo-grid gap-4">
    <div class="flex flex-col items-center gap-2">
      <span class="text-xs">Small</span>
      <select class="select select-sm">
        <option>Small</option>
      </select>
    </div>
    <div class="flex flex-col items-center gap-2">
      <span class="text-xs">Medium (Default)</span>
      <select class="select">
        <option>Medium</option>
      </select>
    </div>
    <div class="flex flex-col items-center gap-2">
      <span class="text-xs">Large</span>
      <select class="select select-lg">
        <option>Large</option>
      </select>
    </div>
  </div>
</div>

```html
<!-- Small -->
<select class="select select-sm">
  <option>Small</option>
</select>

<!-- Medium (default) -->
<select class="select">
  <option>Medium</option>
</select>

<!-- Large -->
<select class="select select-lg">
  <option>Large</option>
</select>
```

### Colors

<div class="demo-container">
  <div class="demo-title">Select Colors</div>
  <div class="demo-grid gap-4">
    <div class="flex flex-col items-center gap-2">
      <span class="text-xs">Primary</span>
      <select class="select select-primary">
        <option>Primary</option>
      </select>
    </div>
    <div class="flex flex-col items-center gap-2">
      <span class="text-xs">Secondary</span>
      <select class="select select-secondary">
        <option>Secondary</option>
      </select>
    </div>
    <div class="flex flex-col items-center gap-2">
      <span class="text-xs">Success</span>
      <select class="select select-success">
        <option>Success</option>
      </select>
    </div>
    <div class="flex flex-col items-center gap-2">
      <span class="text-xs">Warning</span>
      <select class="select select-warning">
        <option>Warning</option>
      </select>
    </div>
    <div class="flex flex-col items-center gap-2">
      <span class="text-xs">Error</span>
      <select class="select select-error">
        <option>Error</option>
      </select>
    </div>
  </div>
</div>

```html
<!-- Primary -->
<select class="select select-primary">
  <option>Primary</option>
</select>

<!-- Secondary -->
<select class="select select-secondary">
  <option>Secondary</option>
</select>

<!-- Success -->
<select class="select select-success">
  <option>Success</option>
</select>

<!-- Warning -->
<select class="select select-warning">
  <option>Warning</option>
</select>

<!-- Error -->
<select class="select select-error">
  <option>Error</option>
</select>
```

### States

<div class="demo-container">
  <div class="demo-title">Select States</div>
  <div class="demo-grid gap-4">
    <div class="flex flex-col items-center gap-2 opacity-50">
      <span class="text-xs">Disabled</span>
      <select class="select" disabled>
        <option>Disabled</option>
      </select>
    </div>
    <div class="flex flex-col items-center gap-2">
      <span class="text-xs">Bordered</span>
      <select class="select select-bordered">
        <option>Bordered</option>
      </select>
    </div>
    <div class="flex flex-col items-center gap-2">
      <span class="text-xs">Ghost</span>
      <select class="select select-ghost">
        <option>Ghost</option>
      </select>
    </div>
  </div>
</div>

```html
<!-- Disabled -->
<select class="select" disabled>
  <option>Disabled</option>
</select>

<!-- With border -->
<select class="select select-bordered">
  <option>Bordered</option>
</select>

<!-- Ghost style -->
<select class="select select-ghost">
  <option>Ghost</option>
</select>
```

## Multiple Selection

<div class="demo-container">
  <div class="demo-title">Multiple Selection</div>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Select multiple options</span>
    </label>
    <select class="select select-bordered" multiple size="4">
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="js" selected>JavaScript</option>
      <option value="ts" selected>TypeScript</option>
      <option value="react">React</option>
      <option value="vue">Vue</option>
      <option value="angular">Angular</option>
    </select>
  </div>
</div>

```html
<div class="form-control">
  <label class="label">
    <span class="label-text">Select multiple options</span>
  </label>
  <select class="select select-bordered" multiple size="4">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
    <option value="ts">TypeScript</option>
    <option value="react">React</option>
    <option value="vue">Vue</option>
    <option value="angular">Angular</option>
  </select>
</div>
```

## Grouped Options

<div class="demo-container">
  <div class="demo-title">Grouped Options</div>
  <select class="select select-bordered w-full max-w-xs">
    <option disabled selected>Choose your favorite</option>
    <optgroup label="Fruits">
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="orange">Orange</option>
    </optgroup>
    <optgroup label="Vegetables">
      <option value="carrot">Carrot</option>
      <option value="broccoli">Broccoli</option>
      <option value="spinach">Spinach</option>
    </optgroup>
  </select>
</div>

```html
<select class="select select-bordered w-full max-w-xs">
  <option disabled selected>Choose your favorite</option>
  
  <optgroup label="Fruits">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="orange">Orange</option>
  </optgroup>
  
  <optgroup label="Vegetables">
    <option value="carrot">Carrot</option>
    <option value="broccoli">Broccoli</option>
    <option value="spinach">Spinach</option>
  </optgroup>
</select>
```

## Form Layout

<div class="demo-container">
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Timezone</span>
      <span class="label-text-alt">Required</span>
    </label>
    <select class="select select-bordered w-full max-w-xs" required>
      <option disabled selected>Select timezone</option>
      <option value="utc-12">UTC-12:00 (Baker Island)</option>
      <option value="utc-11">UTC-11:00 (American Samoa)</option>
      <option value="utc-10">UTC-10:00 (Hawaii)</option>
      <option value="utc-9">UTC-09:00 (Alaska)</option>
      <option value="utc-8">UTC-08:00 (Pacific)</option>
      <option value="utc-7">UTC-07:00 (Mountain)</option>
      <option value="utc-6">UTC-06:00 (Central)</option>
      <option value="utc-5">UTC-05:00 (Eastern)</option>
    </select>
    <label class="label">
      <span class="label-text-alt">We use this to show you local times</span>
    </label>
  </div>
</div>

```html
<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Timezone</span>
    <span class="label-text-alt">Required</span>
  </label>
  <select class="select select-bordered w-full max-w-xs" required>
    <option disabled selected>Select timezone</option>
    <option value="utc-12">UTC-12:00 (Baker Island)</option>
    <option value="utc-11">UTC-11:00 (American Samoa)</option>
    <option value="utc-10">UTC-10:00 (Hawaii)</option>
    <option value="utc-9">UTC-09:00 (Alaska)</option>
    <option value="utc-8">UTC-08:00 (Pacific)</option>
    <option value="utc-7">UTC-07:00 (Mountain)</option>
    <option value="utc-6">UTC-06:00 (Central)</option>
    <option value="utc-5">UTC-05:00 (Eastern)</option>
  </select>
  <label class="label">
    <span class="label-text-alt">We use this to show you local times</span>
  </label>
</div>
```

## TypeScript Usage

```typescript
import { Select } from 'sageui';

// Create a select instance
const select = new Select({
  element: document.getElementById('my-select'),
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ],
  variant: 'primary',
  size: 'lg',
  placeholder: 'Choose an option...',
  multiple: false
});

// Update options
select.setOptions([
  { label: 'New Option 1', value: 'new1' },
  { label: 'New Option 2', value: 'new2' }
]);

// Set selected value
select.setValue('new1');

// For multiple selection
select.setValues(['new1', 'new2']);

// Event handling
select.onChange((value) => {
  console.log('Selected value:', value);
});

select.onOpen(() => {
  console.log('Select opened');
});

select.onClose(() => {
  console.log('Select closed');
});

// Get current selection
console.log('Current value:', select.getValue());
console.log('Current values (multiple):', select.getValues());
```

## Accessibility

- Always provide labels for select elements using `<label>` elements
- Use appropriate ARIA attributes for custom select implementations
- Ensure keyboard navigation works properly (Arrow keys, Enter, Escape)
- Provide clear feedback for the current selection
- Use `optgroup` to group related options for better organization
- Consider using `aria-describedby` for additional help text

## CSS Classes

| Class | Description |
|-------|-------------|
| `select` | Base select styles |
| `select-bordered` | Adds border styling |
| `select-ghost` | Ghost/transparent styling |
| `select-xs` | Extra small size |
| `select-sm` | Small size |
| `select-lg` | Large size |
| `select-primary` | Primary color variant |
| `select-secondary` | Secondary color variant |
| `select-success` | Success color variant |
| `select-warning` | Warning color variant |
| `select-error` | Error color variant |

## Examples

### User Profile Form

<div class="demo-container">
<div class="card w-full max-w-lg bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Profile Information</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Country</span>
        </label>
        <select class="select select-bordered">
          <option disabled selected>Select country</option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="uk">United Kingdom</option>
          <option value="au">Australia</option>
        </select>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Language</span>
        </label>
        <select class="select select-bordered">
          <option disabled selected>Select language</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Job Title</span>
      </label>
      <select class="select select-bordered">
        <option disabled selected>Choose your role</option>
        <optgroup label="Engineering">
          <option value="frontend">Frontend Developer</option>
          <option value="backend">Backend Developer</option>
          <option value="fullstack">Full Stack Developer</option>
          <option value="devops">DevOps Engineer</option>
        </optgroup>
        <optgroup label="Design">
          <option value="ui-designer">UI Designer</option>
          <option value="ux-designer">UX Designer</option>
          <option value="product-designer">Product Designer</option>
        </optgroup>
        <optgroup label="Management">
          <option value="product-manager">Product Manager</option>
          <option value="engineering-manager">Engineering Manager</option>
          <option value="cto">CTO</option>
        </optgroup>
      </select>
    </div>
    <div class="card-actions justify-end mt-6">
      <button class="btn btn-ghost">Cancel</button>
      <button class="btn btn-primary">Save</button>
    </div>
  </div>
</div>
</div>

```html
<div class="card w-full max-w-lg bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Profile Information</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Country</span>
        </label>
        <select class="select select-bordered">
          <option disabled selected>Select country</option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="uk">United Kingdom</option>
          <option value="au">Australia</option>
        </select>
      </div>
      
      <div class="form-control">
        <label class="label">
          <span class="label-text">Language</span>
        </label>
        <select class="select select-bordered">
          <option disabled selected>Select language</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>
    </div>
    
    <div class="form-control">
      <label class="label">
        <span class="label-text">Job Title</span>
      </label>
      <select class="select select-bordered">
        <option disabled selected>Choose your role</option>
        <optgroup label="Engineering">
          <option value="frontend">Frontend Developer</option>
          <option value="backend">Backend Developer</option>
          <option value="fullstack">Full Stack Developer</option>
          <option value="devops">DevOps Engineer</option>
        </optgroup>
        <optgroup label="Design">
          <option value="ui-designer">UI Designer</option>
          <option value="ux-designer">UX Designer</option>
          <option value="product-designer">Product Designer</option>
        </optgroup>
        <optgroup label="Management">
          <option value="product-manager">Product Manager</option>
          <option value="engineering-manager">Engineering Manager</option>
          <option value="cto">CTO</option>
        </optgroup>
      </select>
    </div>
    
    <div class="card-actions justify-end mt-6">
      <button class="btn btn-ghost">Cancel</button>
      <button class="btn btn-primary">Save</button>
    </div>
  </div>
</div>
```

### Filter Dropdown

<div class="demo-container">
<div class="flex flex-wrap gap-4">
  <div class="form-control">
    <label class="label">
      <span class="label-text">Category</span>
    </label>
    <select class="select select-bordered select-sm">
      <option value="">All Categories</option>
      <option value="electronics">Electronics</option>
      <option value="clothing">Clothing</option>
      <option value="books">Books</option>
      <option value="home">Home & Garden</option>
    </select>
  </div>
  
  <div class="form-control">
    <label class="label">
      <span class="label-text">Sort by</span>
    </label>
    <select class="select select-bordered select-sm">
      <option value="newest">Newest First</option>
      <option value="oldest">Oldest First</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
      <option value="rating">Highest Rated</option>
    </select>
  </div>
  
  <div class="form-control">
    <label class="label">
      <span class="label-text">Show</span>
    </label>
    <select class="select select-bordered select-sm">
      <option value="12">12 per page</option>
      <option value="24">24 per page</option>
      <option value="48">48 per page</option>
      <option value="96">96 per page</option>
    </select>
  </div>
</div>
</div>

```html
<div class="flex flex-wrap gap-4">
  <div class="form-control">
    <label class="label">
      <span class="label-text">Category</span>
    </label>
    <select class="select select-bordered select-sm">
      <option value="">All Categories</option>
      <option value="electronics">Electronics</option>
      <option value="clothing">Clothing</option>
      <option value="books">Books</option>
      <option value="home">Home & Garden</option>
    </select>
  </div>
  
  <div class="form-control">
    <label class="label">
      <span class="label-text">Sort by</span>
    </label>
    <select class="select select-bordered select-sm">
      <option value="newest">Newest First</option>
      <option value="oldest">Oldest First</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
      <option value="rating">Highest Rated</option>
    </select>
  </div>
  
  <div class="form-control">
    <label class="label">
      <span class="label-text">Show</span>
    </label>
    <select class="select select-bordered select-sm">
      <option value="12">12 per page</option>
      <option value="24">24 per page</option>
      <option value="48">48 per page</option>
      <option value="96">96 per page</option>
    </select>
  </div>
</div>
```
