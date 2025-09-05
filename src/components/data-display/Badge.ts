// Badge component types and classes
export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
}

export const badgeClasses = {
  base: 'badge inline-flex items-center font-medium',
  variants: {
    primary: 'bg-sage-100 text-sage-800',
    secondary: 'bg-forest-100 text-forest-800',
    success: 'bg-emerald-100 text-emerald-800',
    warning: 'bg-amber-100 text-amber-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-sky-100 text-sky-800'
  },
  sizes: {
    sm: 'px-2 py-0.5 text-xs rounded-full',
    md: 'px-2.5 py-0.5 text-sm rounded-full',
    lg: 'px-3 py-1 text-base rounded-full'
  }
};

export class Badge {
  static getClasses(props: BadgeProps = {}): string {
    const {
      variant = 'primary',
      size = 'md'
    } = props;

    return [
      badgeClasses.base,
      badgeClasses.variants[variant],
      badgeClasses.sizes[size]
    ].join(' ');
  }

  static render(content: string, props: BadgeProps = {}): string {
    const classes = this.getClasses(props);
    return `<span class="${classes}">${content}</span>`;
  }
}

// Avatar component
export interface AvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  src?: string;
  alt?: string;
  initials?: string;
}

export const avatarClasses = {
  base: 'avatar inline-flex items-center justify-center rounded-full bg-sage-100 text-sage-600 font-medium',
  sizes: {
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg',
    xl: 'h-16 w-16 text-xl'
  }
};

export class Avatar {
  static getClasses(props: AvatarProps = {}): string {
    const { size = 'md' } = props;
    
    return [
      avatarClasses.base,
      avatarClasses.sizes[size]
    ].join(' ');
  }

  static render(props: AvatarProps = {}): string {
    const { src, alt, initials } = props;
    const classes = this.getClasses(props);
    
    if (src) {
      return `<img class="${classes}" src="${src}" alt="${alt || ''}" />`;
    }
    
    return `<div class="${classes}">${initials || '?'}</div>`;
  }
}

// Spinner component
export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
}

export const spinnerClasses = {
  base: 'spinner inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent',
  sizes: {
    sm: 'h-4 w-4',
    md: 'h-6 w-6', 
    lg: 'h-8 w-8'
  },
  colors: {
    primary: 'text-sage-500',
    secondary: 'text-forest-500',
    white: 'text-white'
  }
};

export class Spinner {
  static getClasses(props: SpinnerProps = {}): string {
    const {
      size = 'md',
      color = 'primary'
    } = props;

    return [
      spinnerClasses.base,
      spinnerClasses.sizes[size],
      spinnerClasses.colors[color]
    ].join(' ');
  }

  static render(props: SpinnerProps = {}): string {
    const classes = this.getClasses(props);
    return `<div class="${classes}"></div>`;
  }
}
