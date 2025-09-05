import { ButtonConfig } from '../../types';

export class Button {
  private config: ButtonConfig;

  constructor(config: ButtonConfig) {
    this.config = {
      variant: 'primary',
      size: 'md',
      type: 'button',
      disabled: false,
      loading: false,
      ...config,
    };
  }

  render(): string {
    const loadingSpinner = this.config.loading 
      ? '<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>'
      : '';

    return `
      <button 
        class="btn ${this.getVariantClass()} ${this.getSizeClass()} ${this.config.className || ''}" 
        type="${this.config.type}"
        ${this.config.disabled || this.config.loading ? 'disabled' : ''}
        ${this.config.id ? `id="${this.config.id}"` : ''}>
        ${loadingSpinner}
        ${this.config.children || ''}
      </button>
    `;
  }

  private getVariantClass(): string {
    return this.config.variant ? `btn-${this.config.variant}` : '';
  }

  private getSizeClass(): string {
    return this.config.size && this.config.size !== 'md' ? `btn-${this.config.size}` : '';
  }

  mount(container: string | HTMLElement): void {
    const target = typeof container === 'string' 
      ? document.querySelector(container) 
      : container;
    
    if (target) {
      target.innerHTML = this.render();
      this.setupEventListeners(target as HTMLElement);
    }
  }

  private setupEventListeners(container: HTMLElement): void {
    const button = container.querySelector('button');
    if (button && this.config.onClick) {
      button.addEventListener('click', this.config.onClick);
    }
  }
}
