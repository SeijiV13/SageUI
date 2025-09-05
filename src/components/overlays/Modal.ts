import { ComponentConfig } from '../../types';

export interface ModalConfig extends ComponentConfig {
  isOpen?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  backdrop?: boolean;
  closable?: boolean;
  onClose?: () => void;
}

export class Modal {
  private config: ModalConfig;
  private element: HTMLElement | null = null;

  constructor(config: ModalConfig) {
    this.config = {
      size: 'md',
      backdrop: true,
      closable: true,
      ...config,
    };
  }

  render(): string {
    const sizeClass = this.getSizeClass();

    return `
      <div class="modal ${this.config.isOpen ? 'modal-open' : ''} ${this.config.className || ''}" 
           ${this.config.id ? `id="${this.config.id}"` : ''}>
        ${this.config.backdrop ? '<div class="modal-backdrop"></div>' : ''}
        <div class="modal-box ${sizeClass}">
          ${this.config.closable ? `<button class="modal-close">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>` : ''}
          <div class="modal-content">
            ${this.config.children || ''}
          </div>
        </div>
      </div>
    `;
  }

  private getSizeClass(): string {
    const sizeClasses = {
      sm: 'modal-sm',
      md: 'modal-md',
      lg: 'modal-lg',
      xl: 'modal-xl',
      full: 'modal-full',
    };
    return sizeClasses[this.config.size!] || 'modal-md';
  }

  open(): void {
    if (this.element) {
      this.element.classList.add('modal-open');
      document.body.classList.add('modal-open');
    }
  }

  close(): void {
    if (this.element) {
      this.element.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
      if (this.config.onClose) {
        this.config.onClose();
      }
    }
  }

  mount(container: string | HTMLElement): void {
    const target = typeof container === 'string' 
      ? document.querySelector(container) 
      : container;
    
    if (target) {
      target.innerHTML = this.render();
      this.element = target.querySelector('.modal');
      this.setupEventListeners();
    }
  }

  private setupEventListeners(): void {
    if (!this.element) return;

    // Close button
    const closeBtn = this.element.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    // Backdrop click
    if (this.config.backdrop && this.config.closable) {
      const backdrop = this.element.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.addEventListener('click', () => this.close());
      }
    }

    // Escape key
    if (this.config.closable) {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.close();
        }
      });
    }
  }
}
