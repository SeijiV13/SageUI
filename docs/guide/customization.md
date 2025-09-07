# Customization

SageUI is built to be highly customizable while maintaining design consistency. Learn how to customize components, colors, and create your own design system.

## CSS Custom Properties

SageUI uses CSS custom properties (CSS variables) for easy customization. Override these variables to change the look and feel:

```css
:root {
  /* Primary colors */
  --primary: 34 197 94;        /* green-500 */
  --primary-focus: 22 163 74;  /* green-600 */
  --primary-content: 255 255 255;
  
  /* Secondary colors */
  --secondary: 156 163 175;    /* gray-400 */
  --secondary-focus: 107 114 128; /* gray-500 */
  --secondary-content: 255 255 255;
  
  /* Success colors */
  --success: 34 197 94;        /* green-500 */
  --success-content: 255 255 255;
  
  /* Warning colors */
  --warning: 245 158 11;       /* amber-500 */
  --warning-content: 0 0 0;
  
  /* Error colors */
  --error: 239 68 68;          /* red-500 */
  --error-content: 255 255 255;
  
  /* Base colors */
  --base-100: 255 255 255;
  --base-200: 249 250 251;     /* gray-50 */
  --base-300: 243 244 246;     /* gray-100 */
  --base-content: 17 24 39;    /* gray-900 */
  
  /* Border and focus */
  --border-color: 209 213 219; /* gray-300 */
  --focus-color: 59 130 246;   /* blue-500 */
  
  /* Typography */
  --font-family: ui-sans-serif, system-ui, sans-serif;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 0.75rem;
  --spacing-lg: 1rem;
  --spacing-xl: 1.5rem;
  
  /* Border radius */
  --border-radius-sm: 0.25rem;
  --border-radius-md: 0.375rem;
  --border-radius-lg: 0.5rem;
  --border-radius-xl: 0.75rem;
}
```

## Color Customization

### Brand Colors

Customize SageUI to match your brand by overriding color variables:

```css
/* Custom brand theme */
:root {
  --primary: 99 102 241;       /* indigo-500 */
  --primary-focus: 79 70 229;  /* indigo-600 */
  --secondary: 236 72 153;     /* pink-500 */
  --secondary-focus: 219 39 119; /* pink-600 */
}
```

### Dark Theme

Create a dark theme by overriding base colors:

```css
[data-theme="dark"] {
  --base-100: 17 24 39;        /* gray-900 */
  --base-200: 31 41 55;        /* gray-800 */
  --base-300: 55 65 81;        /* gray-700 */
  --base-content: 243 244 246;  /* gray-100 */
  --border-color: 75 85 99;    /* gray-600 */
}

/* Toggle dark theme */
.dark {
  @apply [color-scheme:dark];
}
```

### Multiple Themes

Create multiple theme variants:

```css
/* Ocean theme */
[data-theme="ocean"] {
  --primary: 14 165 233;       /* sky-500 */
  --primary-focus: 2 132 199;  /* sky-600 */
  --secondary: 6 182 212;      /* cyan-500 */
  --base-100: 240 249 255;     /* sky-50 */
}

/* Sunset theme */
[data-theme="sunset"] {
  --primary: 251 146 60;       /* orange-400 */
  --primary-focus: 249 115 22; /* orange-500 */
  --secondary: 244 63 94;      /* rose-500 */
  --base-100: 255 251 235;     /* amber-50 */
}
```

Apply themes with JavaScript:

```javascript
// Theme switcher
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);
```

## Component Customization

### Button Variants

Create custom button variants:

```css
/* Custom gradient button */
.btn-gradient {
  @apply bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0;
  @apply hover:from-purple-600 hover:to-pink-600;
  @apply focus:ring-4 focus:ring-purple-300;
}

/* Glass morphism button */
.btn-glass {
  @apply bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30;
  @apply text-white hover:bg-opacity-30;
  @apply shadow-lg;
}

/* Neumorphism button */
.btn-neubtn {
  @apply bg-gray-200 text-gray-700 border-0;
  @apply shadow-[8px_8px_16px_#bebebe,_-8px_-8px_16px_#ffffff];
  @apply hover:shadow-[4px_4px_8px_#bebebe,_-4px_-4px_8px_#ffffff];
}
```

### Card Styles

Customize card appearances:

```css
/* Elevated card */
.card-elevated {
  @apply shadow-2xl hover:shadow-3xl transition-shadow duration-300;
  @apply transform hover:-translate-y-1;
}

/* Bordered card */
.card-bordered {
  @apply border-2 border-200 bg-transparent;
  @apply hover:border-300;
}

/* Compact card */
.card-compact .card-body {
  @apply p-4;
}

/* Wide card */
.card-wide .card-body {
  @apply p-8;
}
```

## Tailwind CSS Integration

### Custom Utilities

Extend Tailwind with SageUI-specific utilities:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f0fdf4',
          100: '#dcfce7', 
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-5px)' },
          '60%': { transform: 'translateY(-3px)' },
        }
      }
    }
  },
  plugins: [
    require('sageui/plugin'),
    // Custom plugin
    function({ addUtilities, theme }) {
      addUtilities({
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.shadow-soft': {
          'box-shadow': '0 4px 6px -1px rgba(34, 197, 94, 0.1), 0 2px 4px -1px rgba(34, 197, 94, 0.06)',
        }
      })
    }
  ]
}
```

## Component Overrides

### Global Overrides

Override component styles globally:

```css
/* Override all buttons */
.btn {
  @apply font-semibold tracking-wide transition-all duration-200;
  letter-spacing: 0.05em;
}

/* Override all cards */
.card {
  @apply rounded-2xl backdrop-blur-sm;
  border: 1px solid rgba(34, 197, 94, 0.1);
}

/* Override all inputs */
.input {
  @apply transition-all duration-200;
}

.input:focus {
  @apply ring-2 ring-400 ring-opacity-50;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}
```

### Scoped Overrides

Create scoped customizations:

```css
/* Custom form theme */
.form-modern .input {
  @apply bg-gray-50 border-0 rounded-xl;
  @apply focus:bg-white focus:ring-2 focus:ring-blue-500;
}

.form-modern .btn {
  @apply rounded-xl px-6 py-3;
  @apply shadow-lg hover:shadow-xl;
}

/* Dashboard theme */
.dashboard .card {
  @apply bg-gradient-to-br from-white to-gray-50;
  @apply border-l-4 border-500;
}

.dashboard .btn {
  @apply bg-gradient-to-r from-500 to-600;
  @apply hover:from-600 hover:to-700;
}
```

## Typography Customization

### Font Families

Customize typography across components:

```css
:root {
  --font-family-sans: 'Inter', ui-sans-serif, system-ui;
  --font-family-mono: 'JetBrains Mono', ui-monospace, monospace;
  --font-family-display: 'Poppins', ui-sans-serif, system-ui;
}

.card-title {
  font-family: var(--font-family-display);
  @apply font-semibold tracking-tight;
}

.btn {
  font-family: var(--font-family-sans);
  @apply font-medium;
}
```

### Font Sizes

Adjust component font sizes:

```css
/* Larger text scale */
.text-scale-lg {
  --font-size-sm: 1rem;
  --font-size-base: 1.125rem;
  --font-size-lg: 1.25rem;
}

/* Compact text scale */
.text-scale-sm {
  --font-size-sm: 0.75rem;
  --font-size-base: 0.875rem;
  --font-size-lg: 1rem;
}
```

## Advanced Customization

### CSS-in-JS Integration

Use with styled-components or emotion:

```javascript
import styled from 'styled-components';

const CustomButton = styled.button.attrs({
  className: 'btn btn-primary'
})`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;
```

### Dynamic Theming

Create dynamic theme systems:

```javascript
class ThemeManager {
  constructor() {
    this.themes = {
      light: { /* light theme variables */ },
      dark: { /* dark theme variables */ },
      custom: { /* custom theme variables */ }
    };
  }
  
  applyTheme(themeName, customVars = {}) {
    const theme = { ...this.themes[themeName], ...customVars };
    const root = document.documentElement;
    
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }
  
  createTheme(name, variables) {
    this.themes[name] = variables;
  }
}

// Usage
const themeManager = new ThemeManager();

// Apply custom theme
themeManager.createTheme('brand', {
  'primary': '220 38 127',      // Custom brand color
  'secondary': '79 70 229',     // Custom accent
  'base-100': '248 250 252'     // Custom background
});

themeManager.applyTheme('brand');
```

## Performance Optimization

### Tree Shaking

Import only the components you need:

```javascript
// Instead of importing everything
import SageUI from 'sageui'; // ❌ Imports entire library

// Import specific components
import { Button, Card, Input } from 'sageui/components'; // ✅ Tree-shakeable

// Or import individual modules
import Button from 'sageui/components/Button'; // ✅ Minimal bundle
```

### CSS Purging

Configure Tailwind CSS purging for optimal build size:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx,vue}',
    './node_modules/sageui/**/*.{js,ts}'
  ],
  // Safelist SageUI classes that might be generated dynamically
  safelist: [
    'btn-primary',
    'btn-secondary',
    'card-compact',
    'alert-success',
    // ... other dynamic classes
  ]
}
```

## Migration Guide

### From Other Libraries

Migrating from DaisyUI:

```css
/* DaisyUI to SageUI mapping */
.btn → .btn
.card → .card
.alert → .alert
.form-control → .form-control
.input → .input
.checkbox → .checkbox
.radio → .radio
```

### Version Updates

Handle breaking changes between SageUI versions:

```css
/* v1.x to v2.x migration */
.btn-outline {
  /* v2.x uses different border handling */
  @apply border-2 border-current bg-transparent;
}

/* Update color system */
.primary → .btn-primary
.secondary → .btn-secondary
```

## Best Practices

1. **Use CSS Custom Properties** for theme-wide changes
2. **Scope Customizations** to avoid unintended side effects
3. **Test Accessibility** after customizations
4. **Document Custom Themes** for team consistency
5. **Performance Check** bundle size impact
6. **Version Control** custom theme files
7. **Responsive Design** test on all screen sizes

## Examples Repository

Check out our [examples repository](https://github.com/sageui/examples) for:
- Complete theme implementations
- Framework-specific customizations  
- Real-world use cases
- Performance optimization techniques
