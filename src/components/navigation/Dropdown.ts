import { ComponentConfig } from '../../types';

export interface DropdownItem {
  label: string;
  value: string;
  disabled?: boolean;
  separator?: boolean;
}

export interface DropdownConfig extends ComponentConfig {
  items: DropdownItem[];
  trigger?: string;
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  onSelect?: (item: DropdownItem) => void;
}

export class Dropdown {
  private config: DropdownConfig;
  private element: HTMLElement | null = null;
  private menu: HTMLElement | null = null;
  private isOpen = false;

  constructor(config: DropdownConfig) {
    this.config = {
      position: 'bottom-left',
      trigger: 'Click to open',
      ...config,
    };
  }

  render(): string {
    const positionClass = `dropdown-${this.config.position}`;
    
    return `
      <div class="dropdown ${positionClass} ${this.config.className || ''}" 
           ${this.config.id ? `id="${this.config.id}"` : ''}>
        <button class="dropdown-trigger btn" type="button">
          ${this.config.trigger}
          <svg class="w-4 h-4 ml-2 text-emerald-600 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
          </svg>
        </button>
        <div class="dropdown-menu">
          <ul class="dropdown-content">
            ${this.renderItems()}
          </ul>
        </div>
      </div>
    `;
  }

  private renderItems(): string {
    return this.config.items
      .map(item => {
        if (item.separator) {
          return '<li class="dropdown-separator"></li>';
        }
        
        const disabledClass = item.disabled ? 'dropdown-item-disabled' : '';
        
        return `
          <li>
            <a class="dropdown-item ${disabledClass}" 
               data-value="${item.value}"
               ${item.disabled ? 'aria-disabled="true"' : ''}>
              ${item.label}
            </a>
          </li>
        `;
      })
      .join('');
  }

  mount(container: string | HTMLElement): void {
    const target = typeof container === 'string' 
      ? document.querySelector(container) 
      : container;
    
    if (target) {
      target.innerHTML = this.render();
      this.element = target.querySelector('.dropdown');
      this.menu = this.element?.querySelector('.dropdown-menu') || null;
      this.setupEventListeners();
    }
  }

  private setupEventListeners(): void {
    if (!this.element) return;

    const trigger = this.element.querySelector('.dropdown-trigger');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggle();
      });
    }

    // Item selection
    const items = this.element.querySelectorAll('.dropdown-item:not(.dropdown-item-disabled)');
    items.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        const value = target.getAttribute('data-value');
        const selectedItem = this.config.items.find(item => item.value === value);
        
        if (selectedItem && this.config.onSelect) {
          this.config.onSelect(selectedItem);
        }
        
        this.close();
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (this.element && !this.element.contains(e.target as Node)) {
        this.close();
      }
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  open(): void {
    if (this.element && this.menu) {
      this.element.classList.add('dropdown-open');
      this.isOpen = true;
    }
  }

  close(): void {
    if (this.element) {
      this.element.classList.remove('dropdown-open');
      this.isOpen = false;
    }
  }

  toggle(): void {
    this.isOpen ? this.close() : this.open();
  }
}
