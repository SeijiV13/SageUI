import { ComponentConfig } from '../../types';

export interface AvatarConfig extends ComponentConfig {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away' | 'busy';
  initials?: string;
}

export class Avatar {
  private config: AvatarConfig;

  constructor(config: AvatarConfig) {
    this.config = {
      size: 'md',
      alt: 'Avatar',
      ...config,
    };
  }

  render(): string {
    const sizeClass = this.getSizeClass();
    const statusClass = this.config.status ? `avatar-${this.config.status}` : '';
    
    return `
      <div class="avatar ${statusClass} ${this.config.className || ''}" 
           ${this.config.id ? `id="${this.config.id}"` : ''}>
        <div class="avatar-image ${sizeClass}">
          ${this.renderContent()}
        </div>
        ${this.config.status ? this.renderStatusIndicator() : ''}
      </div>
    `;
  }

  private getSizeClass(): string {
    const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-16 h-16',
      xl: 'w-20 h-20',
    };
    return sizeClasses[this.config.size!] || 'w-12 h-12';
  }

  private renderContent(): string {
    if (this.config.src) {
      return `
        <img src="${this.config.src}" 
             alt="${this.config.alt}" 
             class="w-full h-full object-cover rounded-full">
      `;
    }
    
    if (this.config.initials) {
      return `
        <div class="w-full h-full bg-sage-500 text-white flex items-center justify-center rounded-full font-medium">
          ${this.config.initials}
        </div>
      `;
    }

    return `
      <div class="w-full h-full bg-emerald-100 rounded-full flex items-center justify-center">
        <svg class="w-1/2 h-1/2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
        </svg>
      </div>
    `;
  }

  private renderStatusIndicator(): string {
    const statusColors = {
      online: 'bg-green-400',
      offline: 'bg-gray-400',
      away: 'bg-yellow-400',
      busy: 'bg-red-400',
    };
    
    const colorClass = statusColors[this.config.status!] || 'bg-gray-400';
    
    return `
      <div class="absolute bottom-0 right-0 w-3 h-3 ${colorClass} border-2 border-white rounded-full"></div>
    `;
  }

  mount(container: string | HTMLElement): void {
    const target = typeof container === 'string' 
      ? document.querySelector(container) 
      : container;
    
    if (target) {
      target.innerHTML = this.render();
    }
  }
}
