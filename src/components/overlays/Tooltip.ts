import { ComponentConfig } from '../../types';

export interface TooltipConfig extends ComponentConfig {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  trigger?: 'hover' | 'click' | 'focus';
  delay?: number;
}

export class Tooltip {
  private config: TooltipConfig;
  private element: HTMLElement | null = null;
  private tooltip: HTMLElement | null = null;
  private isVisible = false;

  constructor(config: TooltipConfig) {
    this.config = {
      position: 'top',
      trigger: 'hover',
      delay: 300,
      ...config,
    };
  }

  render(): string {
    const positionClass = `tooltip-${this.config.position}`;
    
    return `
      <div class="tooltip ${positionClass} ${this.config.className || ''}" 
           ${this.config.id ? `id="${this.config.id}"` : ''}
           data-tooltip="${this.config.content}">
        ${this.config.children || ''}
        <div class="tooltip-content" role="tooltip">
          ${this.config.content}
        </div>
      </div>
    `;
  }

  mount(container: string | HTMLElement): void {
    const target = typeof container === 'string' 
      ? document.querySelector(container) 
      : container;
    
    if (target) {
      target.innerHTML = this.render();
      this.element = target.querySelector('.tooltip');
      this.tooltip = this.element?.querySelector('.tooltip-content') || null;
      this.setupEventListeners();
    }
  }

  private setupEventListeners(): void {
    if (!this.element || !this.tooltip) return;

    switch (this.config.trigger) {
      case 'hover':
        this.element.addEventListener('mouseenter', () => this.show());
        this.element.addEventListener('mouseleave', () => this.hide());
        break;
      case 'click':
        this.element.addEventListener('click', () => this.toggle());
        break;
      case 'focus':
        this.element.addEventListener('focusin', () => this.show());
        this.element.addEventListener('focusout', () => this.hide());
        break;
    }
  }

  show(): void {
    if (this.isVisible || !this.tooltip) return;

    setTimeout(() => {
      if (this.tooltip) {
        this.tooltip.classList.add('tooltip-visible');
        this.isVisible = true;
      }
    }, this.config.delay);
  }

  hide(): void {
    if (!this.isVisible || !this.tooltip) return;

    this.tooltip.classList.remove('tooltip-visible');
    this.isVisible = false;
  }

  toggle(): void {
    this.isVisible ? this.hide() : this.show();
  }
}
