# Getting Started

Welcome to SageUI! This guide will help you get up and running with our beautiful component library in just a few minutes.

## What is SageUI?

SageUI is a comprehensive component library built on top of Tailwind CSS, featuring:

- **Nature-inspired design** with beautiful green color palettes
- **Accessibility-first** approach following WCAG guidelines  
- **Fully customizable** with Tailwind CSS utilities
- **Modular architecture** - import only what you need
- **Framework agnostic** - works with any JavaScript framework
- **TypeScript support** with full type definitions

## Quick Overview

SageUI provides over 50 pre-designed components that you can use immediately or customize to match your brand. Each component is:

- **Accessible by default** with proper ARIA attributes and keyboard navigation
- **Mobile-first responsive** with consistent behavior across devices
- **Customizable** through CSS classes and configuration options
- **Well-documented** with live examples and code snippets

## Installation Methods

Choose the installation method that works best for your project:

### Method 1: NPM Package (Recommended)

Install SageUI as an npm package for the best developer experience:

```bash
npm install sageui
```

Then import the CSS in your application:

```javascript
// In your main JavaScript/TypeScript file
import 'sageui/dist/sageui.css'
```

Or in your CSS file:

```css
@import 'sageui/dist/sageui.css';
```

### Method 2: CDN

For quick prototyping or simple projects, use our CDN:

```html
<link 
  href="https://cdn.jsdelivr.net/npm/sageui@latest/dist/sageui.css" 
  rel="stylesheet"
>
```

### Method 3: Tailwind CSS Plugin

For maximum customization, use SageUI as a Tailwind CSS plugin:

```bash
npm install sageui tailwindcss
```

Add to your `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './node_modules/sageui/**/*.{js,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('sageui/plugin')
  ],
}
```

## Your First Component

Let's create your first SageUI component - a simple button:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First SageUI Component</title>
  <link href="https://cdn.jsdelivr.net/npm/sageui@latest/dist/sageui.css" rel="stylesheet">
</head>
<body class="p-8">
  <h1 class="text-3xl font-bold text-gray-800 mb-6">Welcome to SageUI!</h1>
  
  <!-- Your first SageUI button -->
  <button class="btn btn-primary">
    Click me!
  </button>
  
  <!-- More examples -->
  <div class="mt-8 space-x-4">
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-outline">Outline</button>
    <button class="btn btn-ghost">Ghost</button>
  </div>
</body>
</html>
```

<div class="demo-container">
  <div class="demo-title">Result</div>
  <div class="space-x-4">
    <button class="btn btn-primary">Click me!</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-outline">Outline</button>
    <button class="btn btn-ghost">Ghost</button>
  </div>
</div>

## Building a Simple Card

Let's create a more complex component - a user profile card:

```html
<div class="card" style="max-width: 400px;">
  <div class="card-body">
    <div class="flex items-center mb-4">
      <div class="avatar mr-4">
        <div class="avatar-image w-16 h-16">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format&q=60" alt="Profile" />
        </div>
      </div>
      <div>
        <h3 class="card-title">John Doe</h3>
        <p class="text-gray-600">Frontend Developer</p>
      </div>
    </div>
    
    <p class="card-text">
      Passionate about creating beautiful, accessible user interfaces 
      with modern web technologies.
    </p>
    
    <div class="card-actions">
      <button class="btn btn-primary btn-sm">Follow</button>
      <button class="btn btn-ghost btn-sm">Message</button>
    </div>
  </div>
</div>

<div class="demo-container">
  <div class="demo-title">Profile Card Result</div>
  <div class="card" style="max-width: 400px;">
    <div class="card-body">
      <div class="flex items-center mb-4">
        <div class="avatar mr-4">
          <div class="avatar-image w-16 h-16">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format&q=60" alt="Profile" />
          </div>
        </div>
        <div>
          <h3 class="card-title">John Doe</h3>
          <p class="text-gray-600">Frontend Developer</p>
        </div>
      </div>
      
      <p class="card-text">
        Passionate about creating beautiful, accessible user interfaces 
        with modern web technologies.
      </p>
      
      <div class="card-actions">
        <button class="btn btn-primary btn-sm">Follow</button>
        <button class="btn btn-ghost btn-sm">Message</button>
      </div>
    </div>
  </div>
</div>
```
## Framework Integration

SageUI works seamlessly with all popular frameworks:

### React Example

```jsx
import 'sageui/dist/sageui.css'

function WelcomeCard() {
  const [isFollowing, setIsFollowing] = useState(false)
  
  return (
    <div className="card" style={{ maxWidth: '400px' }}>
      <div className="card-body">
        <h3 className="card-title">Welcome to React + SageUI!</h3>
        <p className="card-text">
          Start building beautiful components with SageUI and React.
        </p>
        <div className="card-actions">
          <button 
            className={`btn ${isFollowing ? 'btn-secondary' : 'btn-primary'}`}
            onClick={() => setIsFollowing(!isFollowing)}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
        </div>
      </div>
    </div>
  )
}
```

### Vue Example

```vue
<template>
  <div class="card" style="max-width: 400px">
    <div class="card-body">
      <h3 class="card-title">Welcome to Vue + SageUI!</h3>
      <p class="card-text">
        Start building beautiful components with SageUI and Vue.
      </p>
      <div class="card-actions">
        <button 
          :class="`btn ${isFollowing ? 'btn-secondary' : 'btn-primary'}`"
          @click="isFollowing = !isFollowing"
        >
          {{ isFollowing ? 'Following' : 'Follow' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFollowing: false
    }
  }
}
</script>

<style>
@import 'sageui/dist/sageui.css';
</style>
```

## Understanding the Design System

SageUI is built around a consistent design system with these core principles:

### Color Palette

Our nature-inspired color palette centers around greens and earth tones:

<div class="demo-container">
  <div class="demo-title">Primary Colors</div>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="text-center">
      <div class="w-16 h-16 bg-500 rounded-lg mx-auto mb-2"></div>
      <div class="text-sm font-medium">Sage</div>
      <div class="text-xs text-gray-500">Primary</div>
    </div>
    <div class="text-center">
      <div class="w-16 h-16 bg-forest-500 rounded-lg mx-auto mb-2"></div>
      <div class="text-sm font-medium">Forest</div>
      <div class="text-xs text-gray-500">Secondary</div>
    </div>
    <div class="text-center">
      <div class="w-16 h-16 bg-emerald-500 rounded-lg mx-auto mb-2"></div>
      <div class="text-sm font-medium">Emerald</div>
      <div class="text-xs text-gray-500">Accent</div>
    </div>
    <div class="text-center">
      <div class="w-16 h-16 bg-lime-500 rounded-lg mx-auto mb-2"></div>
      <div class="text-sm font-medium">Lime</div>
      <div class="text-xs text-gray-500">Highlight</div>
    </div>
  </div>
</div>

### Typography Scale

Consistent typography using system fonts:

<div class="demo-container">
  <div class="demo-title">Typography Scale</div>
  <div class="space-y-2">
    <h1 class="text-4xl font-bold">Heading 1 (4xl)</h1>
    <h2 class="text-3xl font-bold">Heading 2 (3xl)</h2>
    <h3 class="text-2xl font-bold">Heading 3 (2xl)</h3>
    <h4 class="text-xl font-semibold">Heading 4 (xl)</h4>
    <p class="text-base">Body text (base)</p>
    <p class="text-sm text-gray-600">Small text (sm)</p>
  </div>
</div>

### Spacing System

Consistent spacing using Tailwind's spacing scale (0.25rem increments):

<div class="demo-container">
  <div class="demo-title">Spacing Examples</div>
  <div class="space-y-4">
    <div class="flex items-center">
      <div class="w-4 h-4 bg-500 mr-4"></div>
      <span class="text-sm">4 (1rem / 16px)</span>
    </div>
    <div class="flex items-center">
      <div class="w-6 h-6 bg-500 mr-6"></div>
      <span class="text-sm">6 (1.5rem / 24px)</span>
    </div>
    <div class="flex items-center">
      <div class="w-8 h-8 bg-500 mr-8"></div>
      <span class="text-sm">8 (2rem / 32px)</span>
    </div>
  </div>
</div>

## Next Steps

Now that you have SageUI set up, here's what you should explore next:

### 1. Explore Components
Browse our comprehensive [component library](/components/) to see all available components with live examples and code snippets.

### 2. Customization
Learn how to [customize SageUI](/guide/customization) to match your brand colors and design requirements.

<!-- ### 3. Framework Integration
Check out detailed guides for your specific framework:
- [React Integration](/guide/frameworks/react)
- [Vue Integration](/guide/frameworks/vue)
- [Angular Integration](/guide/frameworks/angular)

### 4. Build Something
Start building your first project! Here are some ideas:
- [Dashboard Example](/examples/dashboard)
- [E-commerce Product Page](/examples/ecommerce)
- [Blog Layout](/examples/blog) -->

## Getting Help

If you run into any issues or have questions:

- 📚 **Documentation**: Comprehensive guides and examples
- 🐛 **GitHub Issues**: Report bugs or request features
- 💬 **Discord Community**: Get help from other developers
- 📧 **Email Support**: Direct support for complex issues

<div class="mt-8 p-6 bg-50 border-l-4 border-500 rounded-r-lg">
  <h4 class="font-semibold text-800 mb-2">Pro Tip</h4>
  <p class="text-700">
    Start small! Pick a few components to get familiar with the system, 
    then gradually expand your usage as you become more comfortable with SageUI's patterns.
  </p>
</div>

Ready to dive deeper? Continue to [Installation](/guide/installation) for detailed setup instructions, or jump straight into the [Components](/components/) to start exploring!
