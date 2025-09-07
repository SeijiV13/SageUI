// Button component types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
}

// Button classes
export const buttonClasses = {
  base: 'btn inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  variants: {
    primary: 'bg-500 text-white hover:bg-600 focus:ring-500 active:bg-700',
    secondary: 'bg-forest-500 text-white hover:bg-forest-600 focus:ring-forest-500 active:bg-forest-700',
    accent: 'bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-500 active:bg-emerald-700',
    ghost: 'bg-transparent text-600 hover:bg-50 focus:ring-500',
    outline: 'border-2 border-500 text-600 hover:bg-500 hover:text-white focus:ring-500'
  },
  sizes: {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-lg',
    xl: 'px-8 py-4 text-xl rounded-xl'
  },
  states: {
    loading: 'cursor-wait',
    block: 'w-full'
  }
};

export * from './Button';
