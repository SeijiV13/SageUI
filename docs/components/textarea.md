# Textarea

Textarea components allow users to enter multiline text. They're perfect for comments, descriptions, messages, and other long-form content.

## Basic Usage

The most basic textarea uses the `.textarea` class.

<div class="demo-container">
  <textarea class="textarea" placeholder="Enter your message..."></textarea>
</div>

```html
<textarea class="textarea" placeholder="Enter your message..."></textarea>
```

## Sizes

Use size modifiers to create textareas of different sizes.

<div class="demo-container">
  <div class="demo-title">Textarea Sizes</div>
  <div class="demo-section">
    <h4>Small</h4>
    <textarea class="textarea textarea-sm" placeholder="Small textarea" rows="2"></textarea>
  </div>
  <div class="demo-section">
    <h4>Medium (Default)</h4>
    <textarea class="textarea" placeholder="Default textarea" rows="3"></textarea>
  </div>
  <div class="demo-section">
    <h4>Large</h4>
    <textarea class="textarea textarea-lg" placeholder="Large textarea" rows="4"></textarea>
  </div>
</div>

```html
<!-- Small -->
<textarea class="textarea textarea-sm" placeholder="Small textarea"></textarea>

<!-- Medium (default) -->
<textarea class="textarea" placeholder="Default textarea"></textarea>

<!-- Large -->
<textarea class="textarea textarea-lg" placeholder="Large textarea"></textarea>
```

## With Label

Combine with labels for better accessibility and user experience.

<div class="demo-container">
  <div class="form-control">
    <label class="label">
      <span class="label-text">Message</span>
    </label>
    <textarea class="textarea" placeholder="Enter your message..." rows="4"></textarea>
  </div>
</div>

```html
<div class="form-control">
  <label class="label">
    <span class="label-text">Message</span>
  </label>
  <textarea class="textarea" placeholder="Enter your message..."></textarea>
</div>
```

## Required Field

Mark required fields with an asterisk and validation.

<div class="demo-container">
  <div class="form-control">
    <label class="label">
      <span class="label-text">Description *</span>
    </label>
    <textarea class="textarea" placeholder="Required field" required rows="3"></textarea>
    <label class="label">
      <span class="label-text-alt">This field is required</span>
    </label>
  </div>
</div>

```html
<div class="form-control">
  <label class="label">
    <span class="label-text">Description *</span>
  </label>
  <textarea class="textarea" placeholder="Required field" required></textarea>
  <label class="label">
    <span class="label-text-alt">This field is required</span>
  </label>
</div>
```

## With Helper Text

Add helper text to provide additional context.

<div class="demo-container">
  <div class="form-control">
    <label class="label">
      <span class="label-text">Bio</span>
    </label>
    <textarea class="textarea" placeholder="Tell us about yourself..." rows="4"></textarea>
    <label class="label">
      <span class="label-text-alt">Maximum 500 characters</span>
    </label>
  </div>
</div>

```html
<div class="form-control">
  <label class="label">
    <span class="label-text">Bio</span>
  </label>
  <textarea class="textarea" placeholder="Tell us about yourself..."></textarea>
  <label class="label">
    <span class="label-text-alt">Maximum 500 characters</span>
  </label>
</div>
```

## States

<div class="demo-container">
  <div class="demo-title">Textarea States</div>
  
  <div class="demo-section">
    <h4>Normal</h4>
    <textarea class="textarea" placeholder="Normal textarea" rows="2"></textarea>
  </div>
  
  <div class="demo-section">
    <h4>Disabled</h4>
    <textarea class="textarea" placeholder="Disabled textarea" disabled rows="2"></textarea>
  </div>
  
  <div class="demo-section">
    <h4>Invalid</h4>
    <div class="form-control">
      <textarea class="textarea textarea-error" placeholder="This field has an error" rows="2"></textarea>
      <label class="label">
        <span class="label-text-alt text-error">Please enter a valid comment</span>
      </label>
    </div>
  </div>
  
  <div class="demo-section">
    <h4>Success</h4>
    <div class="form-control">
      <textarea class="textarea textarea-success" placeholder="Looks good!" rows="2"></textarea>
      <label class="label">
        <span class="label-text-alt text-success">Thank you for your review!</span>
      </label>
    </div>
  </div>
</div>

### Disabled

```html
<textarea class="textarea" placeholder="Disabled textarea" disabled></textarea>
```

### Invalid

```html
<div class="form-control">
  <label class="label">
    <span class="label-text">Comment</span>
  </label>
  <textarea class="textarea textarea-error" placeholder="This field has an error"></textarea>
  <label class="label">
    <span class="label-text-alt text-error">Please enter a valid comment</span>
  </label>
</div>
```

### Success

```html
<div class="form-control">
  <label class="label">
    <span class="label-text">Review</span>
  </label>
  <textarea class="textarea textarea-success" placeholder="Looks good!"></textarea>
  <label class="label">
    <span class="label-text-alt text-success">Thank you for your review!</span>
  </label>
</div>
```

## Auto-resize

Create textareas that automatically resize based on content.

```html
<textarea 
  class="textarea resize-none overflow-hidden"
  placeholder="This textarea will grow as you type..."
  oninput="this.style.height = 'auto'; this.style.height = this.scrollHeight + 'px'"
  rows="3">
</textarea>
```

## Character Counter

Add a character counter for length-limited textareas.

<div class="demo-container">
  <div class="form-control">
    <label class="label">
      <span class="label-text">Tweet</span>
    </label>
    <textarea 
      class="textarea" 
      placeholder="What's happening?"
      maxlength="280"
      oninput="updateCounter(this)">
    </textarea>
    <label class="label">
      <span class="label-text-alt">
        <span id="char-count">0</span>/280 characters
      </span>
    </label>
  </div>
</div>

```html
<div class="form-control">
  <label class="label">
    <span class="label-text">Tweet</span>
  </label>
  <textarea 
    class="textarea" 
    placeholder="What's happening?"
    maxlength="280"
    oninput="updateCounter(this)">
  </textarea>
  <label class="label">
    <span class="label-text-alt">
      <span id="char-count">0</span>/280 characters
    </span>
  </label>
</div>

<script>
function updateCounter(textarea) {
  document.getElementById('char-count').textContent = textarea.value.length;
}
</script>
```

## TypeScript Usage

```typescript
import { Textarea } from 'sageui';

// Create a textarea
const textarea = new Textarea({
  placeholder: 'Enter your message...',
  rows: 4,
  maxLength: 500,
  autoResize: true
});

// Get/set value
textarea.setValue('Hello world!');
const value = textarea.getValue();

// Listen for changes
textarea.onChange((value) => {
  console.log('Textarea value changed:', value);
});

// Validate
textarea.setError('Please enter at least 10 characters');
textarea.clearError();
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | `''` | Placeholder text |
| `rows` | `number` | `4` | Number of visible text lines |
| `cols` | `number` | `undefined` | Visible width in characters |
| `maxLength` | `number` | `undefined` | Maximum number of characters |
| `disabled` | `boolean` | `false` | Whether the textarea is disabled |
| `required` | `boolean` | `false` | Whether the textarea is required |
| `autoResize` | `boolean` | `false` | Whether to auto-resize based on content |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the textarea |

## CSS Classes

| Class | Description |
|-------|-------------|
| `textarea` | Base textarea component |
| `textarea-xs` | Extra small size |
| `textarea-sm` | Small size |
| `textarea-lg` | Large size |
| `textarea-xl` | Extra large size |
| `textarea-primary` | Primary color variant |
| `textarea-secondary` | Secondary color variant |
| `textarea-success` | Success state styling |
| `textarea-warning` | Warning state styling |
| `textarea-error` | Error state styling |
| `form-control` | Form control wrapper |
| `label` | Label component |
| `label-text` | Label text styling |
| `label-text-alt` | Helper/alt text styling |

## Accessibility

- Always use labels for accessibility
- Use `aria-describedby` to associate helper text
- Consider `aria-required` for required fields
- Use `aria-invalid` for error states

```html
<div class="form-control">
  <label for="message" class="label">
    <span class="label-text">Message</span>
  </label>
  <textarea 
    id="message"
    class="textarea"
    placeholder="Enter your message..."
    aria-describedby="message-help"
    aria-required="true">
  </textarea>
  <div id="message-help" class="label-text-alt">
    Please provide a detailed message
  </div>
</div>
```

## Examples

### Contact Form

```html
<form class="space-y-4">
  <div class="form-control">
    <label class="label">
      <span class="label-text">Name *</span>
    </label>
    <input type="text" class="input" placeholder="Your name" required>
  </div>
  
  <div class="form-control">
    <label class="label">
      <span class="label-text">Email *</span>
    </label>
    <input type="email" class="input" placeholder="your@email.com" required>
  </div>
  
  <div class="form-control">
    <label class="label">
      <span class="label-text">Message *</span>
    </label>
    <textarea 
      class="textarea" 
      placeholder="How can we help you?"
      rows="5"
      required>
    </textarea>
    <label class="label">
      <span class="label-text-alt">Minimum 20 characters</span>
    </label>
  </div>
  
  <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

### Code Editor Style

```html
<div class="form-control">
  <label class="label">
    <span class="label-text font-mono">Code</span>
  </label>
  <textarea 
    class="textarea font-mono text-sm bg-gray-900 text-green-400 border-gray-700"
    placeholder="// Enter your code here..."
    rows="10"
    spellcheck="false">
  </textarea>
</div>
```
