# Card

Cards are flexible content containers with multiple variants and supporting elements. They're perfect for grouping related information and actions.

## Basic Usage

The most basic card uses the `.card` class with a `.card-body` container.

<div class="demo-container">
  <div class="card" style="max-width: 400px;">
    <div class="card-body">
      <h3 class="card-title">Card Title</h3>
      <p class="card-text">Some example content for the card body. This text demonstrates how content flows within the card container.</p>
    </div>
  </div>
</div>

```html
<div class="card">
  <div class="card-body">
    <h3 class="card-title">Card Title</h3>
    <p class="card-text">Some example content for the card body.</p>
  </div>
</div>
```

## Card with Actions

Cards can include action buttons in a dedicated actions area.

<div class="demo-container">
  <div class="card" style="max-width: 400px;">
    <div class="card-body">
      <h3 class="card-title">Project Update</h3>
      <p class="card-text">Your project has been successfully updated with the latest changes. Review the modifications and deploy when ready.</p>
      <div class="card-actions">
        <button class="btn btn-primary btn-sm">Deploy</button>
        <button class="btn btn-ghost btn-sm">Review</button>
      </div>
    </div>
  </div>
</div>

```html
<div class="card">
  <div class="card-body">
    <h3 class="card-title">Project Update</h3>
    <p class="card-text">Your project has been updated.</p>
    <div class="card-actions">
      <button class="btn btn-primary btn-sm">Deploy</button>
      <button class="btn btn-ghost btn-sm">Review</button>
    </div>
  </div>
</div>
```

## Card with Image

Cards can include images at the top, perfect for product cards or article previews.

<div class="demo-container">
  <div class="card" style="max-width: 400px;">
    <figure class="card-image">
      <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop&crop=center&auto=format&q=60" alt="Beautiful mountain landscape with green forest" class="w-full h-48 object-cover" />
    </figure>
    <div class="card-body">
      <h3 class="card-title">Beautiful Landscape</h3>
      <p class="card-text">A stunning view of nature captured in this beautiful landscape photograph.</p>
      <div class="card-actions">
        <button class="btn btn-primary btn-sm">View Full Size</button>
        <button class="btn btn-ghost btn-sm">Share</button>
      </div>
    </div>
  </div>
</div>

```html
<div class="card">
  <figure class="card-image">
    <img src="image.jpg" alt="Card image" />
  </figure>
  <div class="card-body">
    <h3 class="card-title">Beautiful Landscape</h3>
    <p class="card-text">A stunning view of nature.</p>
    <div class="card-actions">
      <button class="btn btn-primary btn-sm">View Full Size</button>
      <button class="btn btn-ghost btn-sm">Share</button>
    </div>
  </div>
</div>
```

## Card Variants

### Bordered Cards

Add a visible border for better definition.

<div class="demo-container">
  <div class="demo-title">Bordered Card</div>
  <div class="card card-bordered" style="max-width: 400px;">
    <div class="card-body">
      <h3 class="card-title">Bordered Card</h3>
      <p class="card-text">This card has a visible border for better visual separation from the background.</p>
      <div class="card-actions">
        <button class="btn btn-primary btn-sm">Action</button>
      </div>
    </div>
  </div>
</div>

```html
<div class="card card-bordered">
  <div class="card-body">
    <h3 class="card-title">Bordered Card</h3>
    <p class="card-text">This card has a visible border.</p>
  </div>
</div>
```

### Compact Cards

Compact cards have reduced padding for tighter layouts.

<div class="demo-container">
  <div class="demo-title">Compact Card</div>
  <div class="card card-compact" style="max-width: 400px;">
    <div class="card-body">
      <h3 class="card-title">Compact Card</h3>
      <p class="card-text">This card uses less padding for a more compact appearance.</p>
      <div class="card-actions">
        <button class="btn btn-primary btn-sm">Action</button>
      </div>
    </div>
  </div>
</div>

```html
<div class="card card-compact">
  <div class="card-body">
    <h3 class="card-title">Compact Card</h3>
    <p class="card-text">Reduced padding for tighter layouts.</p>
  </div>
</div>
```

### Elevated Cards

Cards with shadow elevation for a lifted appearance.

<div class="demo-container">
  <div class="demo-title">Elevated Card</div>
  <div class="card card-elevated" style="max-width: 400px;">
    <div class="card-body">
      <h3 class="card-title">Elevated Card</h3>
      <p class="card-text">This card appears elevated with a prominent shadow effect.</p>
      <div class="card-actions">
        <button class="btn btn-primary btn-sm">Action</button>
      </div>
    </div>
  </div>
</div>

```html
<div class="card card-elevated">
  <div class="card-body">
    <h3 class="card-title">Elevated Card</h3>
    <p class="card-text">Appears elevated with shadow.</p>
  </div>
</div>
```

## Interactive Cards

Cards can be made clickable for navigation or selection.

<div class="demo-container">
  <div class="demo-title">Interactive Cards</div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4" style="max-width: 600px;">
    <div class="card card-hover cursor-pointer" onclick="alert('Card 1 clicked!')">
      <div class="card-body">
        <h4 class="card-title">Analytics</h4>
        <p class="card-text">View detailed analytics and reports for your projects.</p>
        <div class="badge badge-primary">Pro</div>
      </div>
    </div>
    <div class="card card-hover cursor-pointer" onclick="alert('Card 2 clicked!')">
      <div class="card-body">
        <h4 class="card-title">Settings</h4>
        <p class="card-text">Configure your account settings and preferences.</p>
        <div class="badge badge-secondary">Free</div>
      </div>
    </div>
  </div>
</div>

```html
<div class="card card-hover cursor-pointer" onclick="handleCardClick()">
  <div class="card-body">
    <h4 class="card-title">Analytics</h4>
    <p class="card-text">View detailed analytics and reports.</p>
    <div class="badge badge-primary">Pro</div>
  </div>
</div>
```

## Card Layouts

### Horizontal Cards

Cards can be laid out horizontally with side-by-side image and content.

<div class="demo-container">
  <div class="demo-title">Horizontal Card</div>
  <div class="card card-horizontal" style="max-width: 600px;">
    <figure class="card-image flex-shrink-0">
      <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=150&fit=crop&crop=center&auto=format&q=60" alt="Modern product on clean background" class="w-full h-full object-cover" />
    </figure>
    <div class="card-body">
      <h3 class="card-title">Premium Watch</h3>
      <p class="card-text">A stylish and sophisticated timepiece with modern design elements and premium materials.</p>
      <div class="card-actions">
        <button class="btn btn-primary btn-sm">Add to Cart</button>
        <button class="btn btn-ghost btn-sm">View Details</button>
      </div>
    </div>
  </div>
</div>

```html
<div class="card card-horizontal">
  <figure class="card-image">
    <img src="product.jpg" alt="Product" />
  </figure>
  <div class="card-body">
    <h3 class="card-title">Product Name</h3>
    <p class="card-text">Product description here.</p>
    <div class="card-actions">
      <button class="btn btn-primary btn-sm">Add to Cart</button>
    </div>
  </div>
</div>
```

### Card Grid

Multiple cards arranged in a responsive grid layout.

<div class="demo-container">
  <div class="demo-title">Card Grid</div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Feature 1</h4>
        <p class="card-text">Description of the first feature.</p>
        <div class="card-actions">
          <button class="btn btn-sm">Learn More</button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Feature 2</h4>
        <p class="card-text">Description of the second feature.</p>
        <div class="card-actions">
          <button class="btn btn-sm">Learn More</button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Feature 3</h4>
        <p class="card-text">Description of the third feature.</p>
        <div class="card-actions">
          <button class="btn btn-sm">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Feature 1</h4>
      <p class="card-text">Description here.</p>
    </div>
  </div>
  <!-- More cards... -->
</div>
```

## TypeScript Usage

```typescript
import { Card } from 'sageui';

// Create a card instance
const card = new Card({
  title: 'My Card',
  variant: 'bordered',
  image: 'image.jpg',
  children: 'Card content goes here.',
  actions: [
    { text: 'Primary Action', variant: 'primary' },
    { text: 'Secondary Action', variant: 'ghost' }
  ]
});

// Mount to DOM
card.mount('#card-container');
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
      <td><code>.card</code></td>
      <td>Base card container</td>
    </tr>
    <tr>
      <td><code>.card-body</code></td>
      <td>Main content area of the card</td>
    </tr>
    <tr>
      <td><code>.card-title</code></td>
      <td>Card title styling</td>
    </tr>
    <tr>
      <td><code>.card-text</code></td>
      <td>Card body text styling</td>
    </tr>
    <tr>
      <td><code>.card-actions</code></td>
      <td>Container for action buttons</td>
    </tr>
    <tr>
      <td><code>.card-image</code></td>
      <td>Container for card images</td>
    </tr>
    <tr>
      <td><code>.card-bordered</code></td>
      <td>Adds visible border to card</td>
    </tr>
    <tr>
      <td><code>.card-compact</code></td>
      <td>Reduces padding for compact layout</td>
    </tr>
    <tr>
      <td><code>.card-elevated</code></td>
      <td>Adds shadow elevation effect</td>
    </tr>
    <tr>
      <td><code>.card-hover</code></td>
      <td>Adds hover effects for interactive cards</td>
    </tr>
    <tr>
      <td><code>.card-horizontal</code></td>
      <td>Horizontal layout with side-by-side content</td>
    </tr>
  </tbody>
</table>

## Accessibility

SageUI cards are designed with accessibility in mind:

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Keyboard Navigation**: Interactive cards support keyboard interaction
- **Screen Reader Support**: Proper labeling and descriptions
- **Focus Management**: Clear focus indicators for interactive elements
- **Image Alt Text**: Proper alternative text for images

### Best Practices

- Use proper heading hierarchy (`h2`, `h3`, etc.) for card titles
- Provide meaningful alt text for images
- Ensure sufficient color contrast
- Make interactive cards keyboard accessible

```html
<!-- Good: Accessible card with proper semantics -->
<article class="card" tabindex="0" role="button" aria-label="View analytics dashboard">
  <div class="card-body">
    <h3 class="card-title">Analytics Dashboard</h3>
    <p class="card-text">View comprehensive analytics for your projects.</p>
    <div class="card-actions">
      <button class="btn btn-primary">Open Dashboard</button>
    </div>
  </div>
</article>

<!-- Good: Card with image and proper alt text -->
<div class="card">
  <figure class="card-image">
    <img src="product.jpg" alt="Eco-friendly water bottle in sage green color" />
  </figure>
  <div class="card-body">
    <h3 class="card-title">Eco Water Bottle</h3>
    <p class="card-text">Sustainable and stylish hydration solution.</p>
  </div>
</div>
```

## Examples

### Product Card

<div class="demo-container">
  <div class="card card-bordered" style="max-width: 300px;">
    <figure class="card-image">
      <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=150&fit=crop&crop=center&auto=format&q=60" alt="Product name" class="w-full h-48 object-cover" />
    </figure>
    <div class="card-body">
      <h3 class="card-title">Product Name</h3>
      <p class="card-text text-gray-600">$99.99</p>
      <p class="card-text">Brief product description highlighting key features.</p>
      <div class="flex items-center justify-between mt-4">
        <div class="rating">
          <span class="text-yellow-400">★★★★★</span>
          <span class="text-sm text-gray-500">(24)</span>
        </div>
        <div class="card-actions">
          <button class="btn btn-primary btn-sm">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="card card-bordered" style="max-width: 300px;">
  <figure class="card-image">
    <img src="product.jpg" alt="Product name" class="w-full h-48 object-cover" />
  </figure>
  <div class="card-body">
    <h3 class="card-title">Product Name</h3>
    <p class="card-text text-gray-600">$99.99</p>
    <p class="card-text">Brief product description highlighting key features.</p>
    <div class="flex items-center justify-between mt-4">
      <div class="rating">
        <span class="text-yellow-400">★★★★★</span>
        <span class="text-sm text-gray-500">(24)</span>
      </div>
      <div class="card-actions">
        <button class="btn btn-primary btn-sm">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
```

### Notification Card

<div class="demo-container">
  <div class="card card-bordered">
    <div class="card-body">
      <div class="flex items-start">
        <div class="avatar mr-3">
          <div class="avatar-image rounded-full w-10 h-10">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="User avatar" />
          </div>
        </div>
        <div class="flex-1">
          <h4 class="card-title text-base">John Doe commented on your post</h4>
          <p class="card-text text-sm text-gray-600">
            "Great insights! I'd love to hear more about your implementation approach."
          </p>
          <div class="flex items-center mt-2 text-xs text-gray-500">
            <span>2 hours ago</span>
            <span class="mx-2">•</span>
            <button class="text-600 hover:underline">Reply</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="card card-bordered">
  <div class="card-body">
    <div class="flex items-start">
      <div class="avatar mr-3">
        <div class="avatar-image w-10 h-10">
          <img src="avatar.jpg" alt="User avatar" />
        </div>
      </div>
      <div class="flex-1">
        <h4 class="card-title text-base">John Doe commented on your post</h4>
        <p class="card-text text-sm text-gray-600">
          "Great insights! I'd love to hear more about your implementation approach."
        </p>
        <div class="flex items-center mt-2 text-xs text-gray-500">
          <span>2 hours ago</span>
          <span class="mx-2">•</span>
          <button class="text-600 hover:underline">Reply</button>
        </div>
      </div>
    </div>
  </div>
</div>
```
