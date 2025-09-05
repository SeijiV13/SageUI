import { ComponentConfig } from '../../types';

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

export interface TableConfig extends ComponentConfig {
  columns: TableColumn[];
  data: Record<string, any>[];
  striped?: boolean;
  hover?: boolean;
  bordered?: boolean;
  compact?: boolean;
  sortable?: boolean;
  onSort?: (column: string, direction: 'asc' | 'desc') => void;
}

export class Table {
  private config: TableConfig;
  private sortColumn: string | null = null;
  private sortDirection: 'asc' | 'desc' = 'asc';

  constructor(config: TableConfig) {
    this.config = {
      striped: false,
      hover: false,
      bordered: false,
      compact: false,
      sortable: false,
      ...config,
    };
  }

  render(): string {
    const tableClasses = this.getTableClasses();
    
    return `
      <div class="table-container ${this.config.className || ''}" 
           ${this.config.id ? `id="${this.config.id}"` : ''}>
        <table class="table ${tableClasses}">
          <thead>
            <tr>
              ${this.renderHeaders()}
            </tr>
          </thead>
          <tbody>
            ${this.renderRows()}
          </tbody>
        </table>
      </div>
    `;
  }

  private getTableClasses(): string {
    const classes = [];
    
    if (this.config.striped) classes.push('table-striped');
    if (this.config.hover) classes.push('table-hover');
    if (this.config.bordered) classes.push('table-bordered');
    if (this.config.compact) classes.push('table-compact');
    
    return classes.join(' ');
  }

  private renderHeaders(): string {
    return this.config.columns
      .map(column => {
        const sortable = this.config.sortable && column.sortable !== false;
        const isSorted = this.sortColumn === column.key;
        const sortIcon = isSorted 
          ? this.sortDirection === 'asc' 
            ? `<svg class="w-4 h-4 ml-1 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"></path></svg>`
            : `<svg class="w-4 h-4 ml-1 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"></path></svg>`
          : `<svg class="w-4 h-4 ml-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path></svg>`;
        
        const alignClass = column.align ? `text-${column.align}` : '';
        const widthStyle = column.width ? `style="width: ${column.width}"` : '';
        
        return `
          <th class="table-header ${alignClass} ${sortable ? 'table-sortable' : ''}" 
              ${widthStyle}
              ${sortable ? `data-column="${column.key}"` : ''}>
            <div class="flex items-center justify-between">
              <span>${column.label}</span>
              ${sortable ? `<span class="sort-indicator">${sortIcon}</span>` : ''}
            </div>
          </th>
        `;
      })
      .join('');
  }

  private renderRows(): string {
    return this.config.data
      .map(row => {
        return `
          <tr>
            ${this.config.columns.map(column => {
              const value = row[column.key] || '';
              const alignClass = column.align ? `text-${column.align}` : '';
              
              return `<td class="table-cell ${alignClass}">${value}</td>`;
            }).join('')}
          </tr>
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
      this.setupEventListeners(target as HTMLElement);
    }
  }

  private setupEventListeners(container: HTMLElement): void {
    if (!this.config.sortable) return;

    const headers = container.querySelectorAll('.table-sortable');
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const column = header.getAttribute('data-column');
        if (column) {
          this.sort(column);
        }
      });
    });
  }

  private sort(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    // Sort data
    this.config.data.sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];
      
      if (aValue < bValue) return this.sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    if (this.config.onSort) {
      this.config.onSort(column, this.sortDirection);
    }

    // Re-render the table
    const container = document.querySelector(`#${this.config.id}`) || 
                     document.querySelector('.table-container');
    if (container) {
      container.innerHTML = this.render();
      this.setupEventListeners(container as HTMLElement);
    }
  }
}
