// Input component
export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'url' | 'tel';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'bordered' | 'ghost';
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

export const inputClasses = {
  base: 'input block w-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  variants: {
    default: 'border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-sage-500 focus:ring-sage-500',
    bordered: 'border-2 border-sage-300 bg-white text-gray-900 placeholder-gray-500 focus:border-sage-500 focus:ring-sage-500',
    ghost: 'border-transparent bg-gray-50 text-gray-900 placeholder-gray-500 focus:bg-white focus:border-sage-500 focus:ring-sage-500'
  },
  sizes: {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-lg'
  },
  error: 'border-red-300 text-red-900 placeholder-red-400 focus:border-red-500 focus:ring-red-500'
};

export class Input {
  static getClasses(props: InputProps = {}): string {
    const {
      size = 'md',
      variant = 'default',
      error = false
    } = props;

    const classes = [
      inputClasses.base,
      error ? inputClasses.error : inputClasses.variants[variant],
      inputClasses.sizes[size]
    ];

    return classes.join(' ');
  }

  static render(props: InputProps = {}): string {
    const {
      type = 'text',
      disabled = false,
      placeholder = ''
    } = props;

    const classes = this.getClasses(props);

    return `<input 
      type="${type}" 
      class="${classes}" 
      ${disabled ? 'disabled' : ''} 
      ${placeholder ? `placeholder="${placeholder}"` : ''} 
    />`;
  }
}
