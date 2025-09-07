# Modal

Modals are dialog boxes that display content on top of the main page, typically used for forms, confirmations, or detailed information without navigating away from the current page.

## Basic Usage

```html
<!-- Modal trigger -->
<label for="my-modal" class="btn">Open Modal</label>

<!-- Modal -->
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Congratulations!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="my-modal" class="btn">Close</label>
    </div>
  </div>
</div>
```

## Modal Sizes

```html
<!-- Small modal -->
<div class="modal">
  <div class="modal-box w-11/12 max-w-xs">
    <h3 class="font-bold text-lg">Small Modal</h3>
    <p class="py-4">This is a small modal.</p>
    <div class="modal-action">
      <button class="btn">Close</button>
    </div>
  </div>
</div>

<!-- Medium modal (default) -->
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Medium Modal</h3>
    <p class="py-4">This is the default modal size.</p>
    <div class="modal-action">
      <button class="btn">Close</button>
    </div>
  </div>
</div>

<!-- Large modal -->
<div class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <h3 class="font-bold text-lg">Large Modal</h3>
    <p class="py-4">This is a large modal with more space for content.</p>
    <div class="modal-action">
      <button class="btn">Close</button>
    </div>
  </div>
</div>
```

## Modal Types

### Confirmation Modal

```html
<div class="modal" id="confirmation-modal">
  <div class="modal-box">
    <div class="flex items-center gap-3 mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
      <h3 class="font-bold text-lg">Confirm Action</h3>
    </div>
    <p class="py-4">Are you sure you want to delete this item? This action cannot be undone.</p>
    <div class="modal-action">
      <button class="btn btn-ghost">Cancel</button>
      <button class="btn btn-error">Delete</button>
    </div>
  </div>
</div>
```

### Form Modal

```html
<div class="modal" id="form-modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg mb-4">Add New User</h3>
    
    <div class="form-control">
      <label class="label">
        <span class="label-text">Name</span>
      </label>
      <input type="text" class="input input-bordered" placeholder="Enter name">
    </div>
    
    <div class="form-control mt-4">
      <label class="label">
        <span class="label-text">Email</span>
      </label>
      <input type="email" class="input input-bordered" placeholder="Enter email">
    </div>
    
    <div class="form-control mt-4">
      <label class="label">
        <span class="label-text">Role</span>
      </label>
      <select class="select select-bordered">
        <option disabled selected>Select role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
        <option value="guest">Guest</option>
      </select>
    </div>
    
    <div class="modal-action mt-6">
      <button class="btn btn-ghost">Cancel</button>
      <button class="btn btn-primary">Save User</button>
    </div>
  </div>
</div>
```

### Image/Media Modal

```html
<div class="modal" id="image-modal">
  <div class="modal-box max-w-4xl">
    <h3 class="font-bold text-lg mb-4">Image Preview</h3>
    
    <figure class="mb-4">
      <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Preview" class="w-full rounded-lg">
    </figure>
    
    <div class="grid grid-cols-2 gap-4 text-sm">
      <div>
        <strong>Filename:</strong> landscape-photo.jpg
      </div>
      <div>
        <strong>Size:</strong> 2.4 MB
      </div>
      <div>
        <strong>Dimensions:</strong> 1920x1080
      </div>
      <div>
        <strong>Format:</strong> JPEG
      </div>
    </div>
    
    <div class="modal-action">
      <button class="btn btn-ghost">Close</button>
      <button class="btn btn-primary">Download</button>
    </div>
  </div>
</div>
```

## Modal with Backdrop Click to Close

```html
<div class="modal" id="backdrop-modal">
  <div class="modal-box relative">
    <!-- Close button -->
    <label class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    
    <h3 class="text-lg font-bold">Modal Title</h3>
    <p class="py-4">Click outside this modal or press ESC to close it.</p>
    
    <div class="modal-action">
      <button class="btn btn-primary">Got it!</button>
    </div>
  </div>
  <label class="modal-backdrop"></label>
</div>
```

## Responsive Modal

```html
<div class="modal" id="responsive-modal">
  <div class="modal-box w-11/12 max-w-5xl h-fit max-h-screen">
    <div class="flex justify-between items-center mb-4">
      <h3 class="font-bold text-lg">Responsive Modal</h3>
      <button class="btn btn-sm btn-circle btn-ghost">✕</button>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 class="font-semibold mb-2">Content Column 1</h4>
        <p class="text-sm text-base-content/70 mb-4">
          This modal adapts to different screen sizes. On mobile devices, 
          it will take up most of the screen width and stack content vertically.
        </p>
        
        <div class="form-control">
          <label class="label">
            <span class="label-text">Field 1</span>
          </label>
          <input type="text" class="input input-bordered">
        </div>
      </div>
      
      <div>
        <h4 class="font-semibold mb-2">Content Column 2</h4>
        <p class="text-sm text-base-content/70 mb-4">
          On larger screens, the content is displayed in a two-column layout 
          for better space utilization.
        </p>
        
        <div class="form-control">
          <label class="label">
            <span class="label-text">Field 2</span>
          </label>
          <input type="text" class="input input-bordered">
        </div>
      </div>
    </div>
    
    <div class="modal-action">
      <button class="btn btn-ghost">Cancel</button>
      <button class="btn btn-primary">Save</button>
    </div>
  </div>
</div>
```

## TypeScript Usage

```typescript
import { Modal } from 'sageui';

// Create a modal instance
const modal = new Modal({
  id: 'my-modal',
  title: 'Modal Title',
  content: '<p>Modal content goes here</p>',
  size: 'medium',
  closable: true,
  backdrop: true
});

// Show modal
modal.show();

// Hide modal
modal.hide();

// Toggle modal
modal.toggle();

// Update content
modal.setTitle('New Title');
modal.setContent('<p>Updated content</p>');

// Event handling
modal.onShow(() => {
  console.log('Modal opened');
});

modal.onHide(() => {
  console.log('Modal closed');
});

modal.onBackdropClick(() => {
  console.log('Backdrop clicked');
  modal.hide();
});

// Confirmation modal helper
Modal.confirm({
  title: 'Confirm Delete',
  message: 'Are you sure you want to delete this item?',
  confirmText: 'Delete',
  cancelText: 'Cancel',
  confirmVariant: 'error'
}).then((confirmed) => {
  if (confirmed) {
    // Perform delete action
    console.log('Item deleted');
  }
});

// Alert modal helper
Modal.alert({
  title: 'Success',
  message: 'Your changes have been saved successfully!',
  variant: 'success'
});

// Prompt modal helper
Modal.prompt({
  title: 'Enter Name',
  message: 'Please enter your name:',
  placeholder: 'Your name...',
  defaultValue: ''
}).then((value) => {
  if (value !== null) {
    console.log('Entered value:', value);
  }
});
```

## Nested Modals

```html
<!-- First modal -->
<div class="modal" id="first-modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">First Modal</h3>
    <p class="py-4">This modal can open another modal.</p>
    <div class="modal-action">
      <button class="btn btn-ghost" onclick="closeModal('first-modal')">Close</button>
      <button class="btn btn-primary" onclick="openModal('second-modal')">Open Second Modal</button>
    </div>
  </div>
</div>

<!-- Second modal -->
<div class="modal" id="second-modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Second Modal</h3>
    <p class="py-4">This is a nested modal opened from the first modal.</p>
    <div class="modal-action">
      <button class="btn btn-primary" onclick="closeModal('second-modal')">Close</button>
    </div>
  </div>
</div>

<script>
function openModal(modalId) {
  document.getElementById(modalId).checked = true;
}

function closeModal(modalId) {
  document.getElementById(modalId).checked = false;
}
</script>
```

## Accessibility

- Use proper ARIA attributes (`role="dialog"`, `aria-labelledby`, `aria-describedby`)
- Ensure keyboard navigation works correctly (Tab, Escape)
- Focus management - return focus to trigger element when closed
- Trap focus within modal when open
- Provide screen reader friendly close buttons
- Use semantic HTML structure
- Ensure sufficient color contrast

## CSS Classes

| Class | Description |
|-------|-------------|
| `modal` | Base modal container |
| `modal-box` | Modal content container |
| `modal-action` | Container for modal action buttons |
| `modal-backdrop` | Clickable backdrop |
| `modal-toggle` | Hidden checkbox for modal state |

## Examples

### Settings Modal

```html
<div class="modal" id="settings-modal">
  <div class="modal-box max-w-2xl">
    <div class="flex justify-between items-center mb-6">
      <h3 class="font-bold text-xl">Settings</h3>
      <button class="btn btn-sm btn-circle btn-ghost">✕</button>
    </div>
    
    <div class="tabs">
      <a class="tab tab-lifted tab-active">General</a>
      <a class="tab tab-lifted">Notifications</a>
      <a class="tab tab-lifted">Privacy</a>
    </div>
    
    <div class="space-y-4 mt-6">
      <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">Enable notifications</span>
          <input type="checkbox" class="checkbox checkbox-primary" checked>
        </label>
      </div>
      
      <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">Dark mode</span>
          <input type="checkbox" class="checkbox checkbox-primary">
        </label>
      </div>
      
      <div class="form-control">
        <label class="label">
          <span class="label-text">Language</span>
        </label>
        <select class="select select-bordered">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>
      
      <div class="form-control">
        <label class="label">
          <span class="label-text">Timezone</span>
        </label>
        <select class="select select-bordered">
          <option value="utc">UTC</option>
          <option value="est">Eastern</option>
          <option value="pst">Pacific</option>
        </select>
      </div>
    </div>
    
    <div class="modal-action mt-8">
      <button class="btn btn-ghost">Cancel</button>
      <button class="btn btn-primary">Save Changes</button>
    </div>
  </div>
</div>
```

### Product Quick View Modal

```html
<div class="modal" id="product-modal">
  <div class="modal-box max-w-4xl">
    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Product Images -->
      <div>
        <figure class="mb-4">
          <img src="product-main.jpg" alt="Product" class="w-full rounded-lg">
        </figure>
        <div class="flex gap-2">
          <img src="product-thumb-1.jpg" alt="Product" class="w-16 h-16 rounded cursor-pointer">
          <img src="product-thumb-2.jpg" alt="Product" class="w-16 h-16 rounded cursor-pointer">
          <img src="product-thumb-3.jpg" alt="Product" class="w-16 h-16 rounded cursor-pointer">
        </div>
      </div>
      
      <!-- Product Details -->
      <div>
        <div class="flex items-start justify-between mb-2">
          <h3 class="text-2xl font-bold">Wireless Headphones</h3>
          <div class="badge badge-success">In Stock</div>
        </div>
        
        <div class="flex items-center gap-2 mb-4">
          <div class="rating rating-sm">
            <input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-400" />
          </div>
          <span class="text-sm text-base-content/70">(128 reviews)</span>
        </div>
        
        <div class="text-3xl font-bold text-primary mb-4">$199.99</div>
        
        <p class="text-base-content/70 mb-6">
          Premium wireless headphones with active noise cancellation, 
          30-hour battery life, and superior sound quality.
        </p>
        
        <div class="space-y-4">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Color</span>
            </label>
            <div class="flex gap-2">
              <input type="radio" name="color" class="radio radio-primary" checked>
              <input type="radio" name="color" class="radio" style="--chkbg: #000000">
              <input type="radio" name="color" class="radio" style="--chkbg: #ffffff; --chkfg: #000000">
            </div>
          </div>
          
          <div class="form-control">
            <label class="label">
              <span class="label-text">Quantity</span>
            </label>
            <div class="flex items-center gap-2">
              <button class="btn btn-outline btn-sm">-</button>
              <input type="number" class="input input-bordered input-sm w-16 text-center" value="1">
              <button class="btn btn-outline btn-sm">+</button>
            </div>
          </div>
        </div>
        
        <div class="flex gap-2 mt-6">
          <button class="btn btn-primary flex-1">Add to Cart</button>
          <button class="btn btn-outline btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```
