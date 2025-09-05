const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, addUtilities, theme }) {
  // Add SageUI components
  addComponents({
    // Buttons
    '.btn': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '500',
      transition: 'all 0.2s',
      outline: 'none',
      border: '1px solid transparent',
      '&:focus': {
        outline: 'none',
        ringWidth: '2px',
        ringOffsetWidth: '2px'
      },
      '&:disabled': {
        opacity: '0.5',
        pointerEvents: 'none'
      }
    },
    '.btn-primary': {
      backgroundColor: theme('colors.sage.500'),
      color: theme('colors.white'),
      '&:hover': {
        backgroundColor: theme('colors.sage.600')
      },
      '&:focus': {
        ringColor: theme('colors.sage.500')
      },
      '&:active': {
        backgroundColor: theme('colors.sage.700')
      }
    },
    '.btn-secondary': {
      backgroundColor: theme('colors.forest.500'),
      color: theme('colors.white'),
      '&:hover': {
        backgroundColor: theme('colors.forest.600')
      },
      '&:focus': {
        ringColor: theme('colors.forest.500')
      }
    },
    '.btn-ghost': {
      backgroundColor: 'transparent',
      color: theme('colors.sage.600'),
      '&:hover': {
        backgroundColor: theme('colors.sage.50')
      }
    },
    '.btn-outline': {
      border: `2px solid ${theme('colors.sage.500')}`,
      color: theme('colors.sage.600'),
      '&:hover': {
        backgroundColor: theme('colors.sage.500'),
        color: theme('colors.white')
      }
    },
    '.btn-sm': {
      padding: `${theme('spacing.1.5')} ${theme('spacing.3')}`,
      fontSize: theme('fontSize.sm'),
      borderRadius: theme('borderRadius.md')
    },
    '.btn-md': {
      padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
      fontSize: theme('fontSize.base'),
      borderRadius: theme('borderRadius.lg')
    },
    '.btn-lg': {
      padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
      fontSize: theme('fontSize.lg'),
      borderRadius: theme('borderRadius.lg')
    },
    '.btn-xl': {
      padding: `${theme('spacing.4')} ${theme('spacing.8')}`,
      fontSize: theme('fontSize.xl'),
      borderRadius: theme('borderRadius.xl')
    },

    // Cards
    '.card': {
      backgroundColor: theme('colors.white'),
      overflow: 'hidden',
      borderRadius: theme('borderRadius.sage')
    },
    '.card-bordered': {
      border: `2px solid ${theme('colors.sage.200')}`
    },
    '.card-shadow': {
      boxShadow: theme('boxShadow.sage-lg'),
      border: `1px solid ${theme('colors.gray.100')}`
    },
    '.card-body': {
      padding: theme('spacing.6')
    },
    '.card-title': {
      fontSize: theme('fontSize.xl'),
      fontWeight: '600',
      color: theme('colors.gray.900'),
      marginBottom: theme('spacing.2')
    },

    // Alerts
    '.alert': {
      display: 'flex',
      alignItems: 'center',
      padding: theme('spacing.4'),
      borderRadius: theme('borderRadius.lg'),
      border: '1px solid'
    },
    '.alert-success': {
      backgroundColor: theme('colors.emerald.50'),
      borderColor: theme('colors.emerald.200'),
      color: theme('colors.emerald.800')
    },
    '.alert-warning': {
      backgroundColor: theme('colors.amber.50'),
      borderColor: theme('colors.amber.200'),
      color: theme('colors.amber.800')
    },
    '.alert-error': {
      backgroundColor: theme('colors.red.50'),
      borderColor: theme('colors.red.200'),
      color: theme('colors.red.800')
    },
    '.alert-info': {
      backgroundColor: theme('colors.sky.50'),
      borderColor: theme('colors.sky.200'),
      color: theme('colors.sky.800')
    },

    // Forms
    '.input': {
      display: 'block',
      width: '100%',
      fontWeight: '500',
      transition: 'colors 0.2s',
      border: `1px solid ${theme('colors.gray.300')}`,
      backgroundColor: theme('colors.white'),
      color: theme('colors.gray.900'),
      '&::placeholder': {
        color: theme('colors.gray.500')
      },
      '&:focus': {
        outline: 'none',
        borderColor: theme('colors.sage.500'),
        ringWidth: '2px',
        ringColor: theme('colors.sage.500')
      },
      '&:disabled': {
        opacity: '0.5',
        cursor: 'not-allowed'
      }
    },
    '.input-sm': {
      padding: `${theme('spacing.1.5')} ${theme('spacing.3')}`,
      fontSize: theme('fontSize.sm'),
      borderRadius: theme('borderRadius.md')
    },
    '.input-md': {
      padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
      fontSize: theme('fontSize.base'),
      borderRadius: theme('borderRadius.lg')
    },
    '.input-lg': {
      padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
      fontSize: theme('fontSize.lg'),
      borderRadius: theme('borderRadius.lg')
    }
  });

  // Add custom utilities
  addUtilities({
    '.shadow-sage': {
      boxShadow: `0 4px 6px -1px rgba(34, 197, 94, 0.1), 0 2px 4px -1px rgba(34, 197, 94, 0.06)`
    },
    '.shadow-sage-lg': {
      boxShadow: `0 10px 15px -3px rgba(34, 197, 94, 0.1), 0 4px 6px -2px rgba(34, 197, 94, 0.05)`
    }
  });
}, {
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
        mint: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e'
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
      borderRadius: {
        'sage': '0.75rem'
      },
      boxShadow: {
        'sage': '0 4px 6px -1px rgba(34, 197, 94, 0.1), 0 2px 4px -1px rgba(34, 197, 94, 0.06)',
        'sage-lg': '0 10px 15px -3px rgba(34, 197, 94, 0.1), 0 4px 6px -2px rgba(34, 197, 94, 0.05)'
      }
    }
  }
});
