# Alert

Alerts provide contextual feedback messages for typical user actions with a handful of available and flexible alert messages.

## Basic Usage

The most basic alert uses the `.alert` class with semantic variants.

<div class="demo-container">
  <div class="alert alert-info">
    <span>ℹ️</span>
    <span>This is an info alert with some information.</span>
  </div>
</div>

```html
<div class="alert alert-info">
  <span>ℹ️</span>
  <span>This is an info alert with some information.</span>
</div>
```

## Variants

Alerts come in different semantic variants to communicate different types of information.

<div class="demo-container">
  <div class="demo-title">Alert Variants</div>
  <div class="space-y-4">
    <div class="alert alert-success">
      <span>✅</span>
      <span><strong>Success!</strong> Your changes have been saved successfully.</span>
    </div>
    
    <div class="alert alert-warning">
      <span>⚠️</span>
      <span><strong>Warning:</strong> Please review your input before proceeding.</span>
    </div>
    
    <div class="alert alert-error">
      <span>❌</span>
      <span><strong>Error:</strong> Something went wrong. Please try again.</span>
    </div>
    
    <div class="alert alert-info">
      <span>ℹ️</span>
      <span><strong>Info:</strong> Here's some helpful information for you.</span>
    </div>
  </div>
</div>

```html
<div class="alert alert-success">
  <span>✅</span>
  <span><strong>Success!</strong> Your changes have been saved.</span>
</div>

<div class="alert alert-warning">
  <span>⚠️</span>
  <span><strong>Warning:</strong> Please review your input.</span>
</div>

<div class="alert alert-error">
  <span>❌</span>
  <span><strong>Error:</strong> Something went wrong.</span>
</div>

<div class="alert alert-info">
  <span>ℹ️</span>
  <span><strong>Info:</strong> Here's some information.</span>
</div>
```

## With Actions

Alerts can include action buttons for user interaction.

<div class="demo-container">
  <div class="demo-title">Alerts with Actions</div>
  <div class="space-y-4">
    <div class="alert alert-warning">
      <span>⚠️</span>
      <div>
        <div><strong>Update Available</strong></div>
        <div class="text-sm">A new version of the application is available.</div>
      </div>
      <div class="flex gap-2">
        <button class="btn btn-sm btn-primary">Update</button>
        <button class="btn btn-sm btn-ghost">Later</button>
      </div>
    </div>
    
    <div class="alert alert-error">
      <span>❌</span>
      <div>
        <div><strong>Connection Failed</strong></div>
        <div class="text-sm">Unable to connect to the server.</div>
      </div>
      <button class="btn btn-sm btn-outline">Retry</button>
    </div>
  </div>
</div>

```html
<div class="alert alert-warning">
  <span>⚠️</span>
  <div>
    <div><strong>Update Available</strong></div>
    <div class="text-sm">A new version is available.</div>
  </div>
  <div class="flex gap-2">
    <button class="btn btn-sm btn-primary">Update</button>
    <button class="btn btn-sm btn-ghost">Later</button>
  </div>
</div>
```

## Dismissible Alerts

Alerts can be made dismissible with a close button.

<div class="demo-container">
  <div class="demo-title">Dismissible Alerts</div>
  <div class="alert alert-success">
    <span>✅</span>
    <span>This alert can be dismissed by clicking the X button.</span>
    <button class="btn btn-sm btn-ghost ml-auto" onclick="this.parentElement.style.display='none'">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
  </div>
</div>

```html
<div class="alert alert-success">
  <span>✅</span>
  <span>This alert can be dismissed.</span>
  <button class="btn btn-sm btn-ghost ml-auto" onclick="this.parentElement.remove()">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  </button>
</div>
```

## Without Icons

Alerts work perfectly fine without icons for a cleaner look.

<div class="demo-container">
  <div class="demo-title">Alerts without Icons</div>
  <div class="space-y-4">
    <div class="alert alert-success">
      <span><strong>Success!</strong> Your profile has been updated.</span>
    </div>
    
    <div class="alert alert-info">
      <span>New features are now available in your dashboard.</span>
    </div>
  </div>
</div>

```html
<div class="alert alert-success">
  <span><strong>Success!</strong> Your profile has been updated.</span>
</div>

<div class="alert alert-info">
  <span>New features are now available in your dashboard.</span>
</div>
```

## Custom Icons

You can use custom SVG icons instead of emoji for a more consistent design system.

<div class="demo-container">
  <div class="demo-title">Custom SVG Icons</div>
  <div class="space-y-4">
    <div class="alert alert-success">
      <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
      </svg>
      <span>Payment processed successfully!</span>
    </div>
    
    <div class="alert alert-warning">
      <svg class="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
      </svg>
      <span>Your session will expire in 5 minutes.</span>
    </div>
  </div>
</div>

```html
<div class="alert alert-success">
  <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
  </svg>
  <span>Payment processed successfully!</span>
</div>
```

## TypeScript Usage

```typescript
import { Alert } from 'sageui';

// Create an alert instance
const alert = new Alert({
  type: 'success',
  title: 'Success!',
  message: 'Your changes have been saved.',
  dismissible: true,
  onClose: () => {
    console.log('Alert closed');
  }
});

// Mount to DOM
alert.mount('#alert-container');
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
      <td><code>.alert</code></td>
      <td>Base alert container</td>
    </tr>
    <tr>
      <td><code>.alert-success</code></td>
      <td>Success alert variant (green)</td>
    </tr>
    <tr>
      <td><code>.alert-warning</code></td>
      <td>Warning alert variant (amber)</td>
    </tr>
    <tr>
      <td><code>.alert-error</code></td>
      <td>Error alert variant (red)</td>
    </tr>
    <tr>
      <td><code>.alert-info</code></td>
      <td>Info alert variant (blue)</td>
    </tr>
  </tbody>
</table>

## Accessibility

SageUI alerts are built with accessibility best practices:

- **Semantic HTML**: Uses appropriate ARIA roles and attributes
- **Screen Reader Support**: Proper announcement of alert content
- **Color Independence**: Information is not conveyed by color alone
- **Keyboard Navigation**: Dismissible alerts are keyboard accessible
- **Focus Management**: Proper focus handling for interactive elements

### Best Practices

- Use clear, concise messaging
- Include actions when appropriate
- Consider the alert's importance and urgency
- Provide alternative text for icons when needed

```html
<!-- Good: Clear messaging with proper semantics -->
<div class="alert alert-error" role="alert">
  <svg aria-hidden="true">...</svg>
  <span>
    <strong>Error:</strong> Unable to save changes. 
    Please check your internet connection and try again.
  </span>
</div>

<!-- Good: With assistive technology considerations -->
<div class="alert alert-success" role="alert" aria-live="polite">
  <svg aria-hidden="true">...</svg>
  <span id="success-message">Your profile has been updated successfully.</span>
  <button 
    class="btn btn-sm btn-ghost"
    aria-label="Dismiss success message"
    onclick="this.parentElement.remove()">
    <svg>...</svg>
  </button>
</div>
```

## Examples

### Form Validation

```html
<form class="space-y-4">
  <div class="alert alert-error" role="alert">
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
    </svg>
    <div>
      <strong>Please correct the following errors:</strong>
      <ul class="list-disc list-inside mt-1 text-sm">
        <li>Email address is required</li>
        <li>Password must be at least 8 characters</li>
      </ul>
    </div>
  </div>
  
  <!-- Form fields here -->
</form>
```

### Toast Notifications

```html
<!-- Fixed position toast alert -->
<div class="fixed top-4 right-4 z-50 max-w-sm">
  <div class="alert alert-success">
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
    </svg>
    <span>File uploaded successfully!</span>
    <button class="btn btn-sm btn-ghost" onclick="this.parentElement.parentElement.remove()">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
  </div>
</div>
```
