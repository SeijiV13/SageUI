/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './.vitepress/**/*.{js,ts,vue}',
    './components/**/*.md',
    './guide/**/*.md',
    './index.md',
    '../src/**/*.{html,js,ts,vue,md}'
  ],
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
          950: '#052e16'
        },
        forest: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#3f6212',
          900: '#365314',
          950: '#1a2e05'
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22'
        }
      },
      boxShadow: {
        'sage': '0 4px 6px -1px rgba(34, 197, 94, 0.1), 0 2px 4px -1px rgba(34, 197, 94, 0.06)'
      }
    }
  },
  safelist: [
    // SageUI component classes
    'select',
    'select-sm',
    'select-md', 
    'select-lg',
    'select-primary',
    'select-secondary',
    'select-success',
    'select-warning',
    'select-error',
    'select-bordered',
    'select-ghost',
    'radio',
    'radio-xs',
    'radio-sm',
    'radio-lg',
    'radio-primary',
    'radio-secondary',
    'radio-success',
    'radio-warning',
    'radio-error',
    'checkbox',
    'checkbox-xs',
    'checkbox-sm',
    'checkbox-lg',
    'checkbox-primary',
    'checkbox-secondary',
    'checkbox-success',
    'checkbox-warning',
    'checkbox-error',
    'form-control',
    'label',
    'label-text'
  ],
  plugins: []
}
