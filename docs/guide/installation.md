# Installation

Get up and running with SageUI in just a few minutes.

## NPM Installation

Install SageUI via npm:

```bash
npm install sageui
```

## CDN Installation

You can also include SageUI directly from a CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/sageui@latest/dist/sageui.css">
```

## Tailwind CSS Plugin

For maximum customization, use SageUI as a Tailwind CSS plugin:

```bash
npm install sageui tailwindcss
```

Then add it to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/sageui/**/*.{js,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('sageui/plugin')
  ],
}
```

## Frameworks

### React

```jsx
import 'sageui/dist/sageui.css';

function MyComponent() {
  return (
    <button className="btn btn-primary">
      Click me
    </button>
  );
}
```

### Vue

```vue
<template>
  <button class="btn btn-primary">
    Click me
  </button>
</template>

<style>
@import 'sageui/dist/sageui.css';
</style>
```

### Angular

Add to your `angular.json`:

```json
{
  "styles": [
    "node_modules/sageui/dist/sageui.css"
  ]
}
```

### Vanilla HTML

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="node_modules/sageui/dist/sageui.css">
</head>
<body>
  <button class="btn btn-primary">Click me</button>
</body>
</html>
```

## Next Steps

Now that you have SageUI installed, check out our [Quick Start guide](/guide/quick-start) to learn the basics.
