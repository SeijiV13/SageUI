import { ComponentConfig } from '../../types';

export interface SpinnerConfig extends ComponentConfig {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'accent';
}

export class Spinner {
  private config: SpinnerConfig;

  constructor(config: SpinnerConfig) {
    this.config = {
      size: 'md',
      variant: 'primary',
      ...config,
    };
  }

  render(): string {
    const sizeClass = this.getSizeClass();
    const variantClass = this.getVariantClass();
    
    return `
      <div class="spinner ${sizeClass} ${variantClass} ${this.config.className || ''}" 
           ${this.config.id ? `id="${this.config.id}"` : ''}
           role="status" aria-label="Loading">
        <div class="spinner-inner"></div>
        ${this.config.children || ''}
      </div>
    `;
  }

  private getSizeClass(): string {
    const sizeClasses = {
      sm: 'spinner-sm',
      md: 'spinner-md',
      lg: 'spinner-lg',
    };
    return sizeClasses[this.config.size!] || 'spinner-md';
  }

  private getVariantClass(): string {
    const variantClasses = {
      primary: 'spinner-primary',
      secondary: 'spinner-secondary',
      accent: 'spinner-accent',
    };
    return variantClasses[this.config.variant!] || 'spinner-primary';
  }

  mount(container: string | HTMLElement): void {
    const target = typeof container === 'string' 
      ? document.querySelector(container) 
      : container;
    
    if (target) {
      target.innerHTML = this.render();
    }
  }

  show(): void {
    const element = document.getElementById(this.config.id || '');
    if (element) {
      element.classList.remove('hidden');
    }
  }

  hide(): void {
    const element = document.getElementById(this.config.id || '');
    if (element) {
      element.classList.add('hidden');
    }
  }
}
