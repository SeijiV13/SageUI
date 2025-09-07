// Card component types
export interface CardProps {
  variant?: 'default' | 'bordered' | 'shadow' | 'compact';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: boolean;
}

// Card classes
export const cardClasses = {
  base: 'card bg-white overflow-hidden',
  variants: {
    default: 'border border-gray-200',
    bordered: 'border-2 border-200',
    shadow: 'shadow-lg border border-gray-100',
    compact: 'border border-gray-200'
  },
  padding: {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  },
  rounded: 'rounded-sage'
};

export * from './Card';
