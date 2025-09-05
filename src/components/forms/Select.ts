export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
  selected?: boolean;
}

export interface SelectOptGroup {
  label: string;
  options: SelectOption[];
}

export interface SelectProps {
  element?: HTMLSelectElement;
  options?: SelectOption[];
  groups?: SelectOptGroup[];
  value?: string | number | string[] | number[];
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
  multiple?: boolean;
  bordered?: boolean;
  ghost?: boolean;
  placeholder?: string;
  className?: string;
}

export class Select {
  private element: HTMLSelectElement;
  private props: SelectProps;
  private changeHandlers: Array<(value: string | number | string[] | number[]) => void> = [];

  constructor(props: SelectProps = {}) {
    this.props = { 
      size: 'md', 
      variant: 'primary', 
      multiple: false,
      bordered: false,
      ghost: false,
      ...props 
    };
    
    if (props.element) {
      this.element = props.element;
    } else {
      this.element = document.createElement('select');
    }
    
    this.applyStyles();
    this.populateOptions();
    this.setupEventListeners();
  }

  private applyStyles(): void {
    // Base class
    this.element.className = 'sage-select';

    // Add variant class
    if (this.props.variant && this.props.variant !== 'primary') {
      this.element.classList.add(`sage-select-${this.props.variant}`);
    }

    // Add size class
    if (this.props.size && this.props.size !== 'md') {
      this.element.classList.add(`sage-select-${this.props.size}`);
    }

    // Add style variants
    if (this.props.bordered) {
      this.element.classList.add('sage-select-bordered');
    }

    if (this.props.ghost) {
      this.element.classList.add('sage-select-ghost');
    }

    // Add custom classes
    if (this.props.className) {
      this.element.classList.add(...this.props.className.split(' '));
    }

    // Set multiple state
    if (this.props.multiple !== undefined) {
      this.element.multiple = this.props.multiple;
    }

    // Set disabled state
    if (this.props.disabled !== undefined) {
      this.element.disabled = this.props.disabled;
    }
  }

  private populateOptions(): void {
    // Clear existing options
    this.element.innerHTML = '';

    // Add placeholder if provided
    if (this.props.placeholder && !this.props.multiple) {
      const placeholderOption = document.createElement('option');
      placeholderOption.value = '';
      placeholderOption.textContent = this.props.placeholder;
      placeholderOption.disabled = true;
      placeholderOption.selected = true;
      this.element.appendChild(placeholderOption);
    }

    // Add grouped options
    if (this.props.groups) {
      this.props.groups.forEach(group => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = group.label;

        group.options.forEach(option => {
          const optionElement = this.createOption(option);
          optgroup.appendChild(optionElement);
        });

        this.element.appendChild(optgroup);
      });
    }

    // Add regular options
    if (this.props.options) {
      this.props.options.forEach(option => {
        const optionElement = this.createOption(option);
        this.element.appendChild(optionElement);
      });
    }

    // Set initial value
    if (this.props.value !== undefined) {
      this.setValue(this.props.value);
    }
  }

  private createOption(option: SelectOption): HTMLOptionElement {
    const optionElement = document.createElement('option');
    optionElement.value = option.value.toString();
    optionElement.textContent = option.label;

    if (option.disabled) {
      optionElement.disabled = true;
    }

    if (option.selected) {
      optionElement.selected = true;
    }

    return optionElement;
  }

  private setupEventListeners(): void {
    this.element.addEventListener('change', () => {
      const value = this.getValue();
      this.props.value = value;
      this.changeHandlers.forEach(handler => handler(value));
    });
  }

  setVariant(variant: SelectProps['variant']): void {
    // Remove old variant classes
    this.element.classList.remove(
      'sage-select-primary',
      'sage-select-secondary', 
      'sage-select-success',
      'sage-select-warning',
      'sage-select-error'
    );

    this.props.variant = variant;
    
    if (variant && variant !== 'primary') {
      this.element.classList.add(`sage-select-${variant}`);
    }
  }

  setSize(size: SelectProps['size']): void {
    // Remove old size classes
    this.element.classList.remove(
      'sage-select-xs',
      'sage-select-sm',
      'sage-select-lg'
    );

    this.props.size = size;
    
    if (size && size !== 'md') {
      this.element.classList.add(`sage-select-${size}`);
    }
  }

  setValue(value: string | number | string[] | number[]): void {
    this.props.value = value;

    if (this.props.multiple && Array.isArray(value)) {
      // Handle multiple selection
      Array.from(this.element.options).forEach(option => {
        const optionValue = option.value;
        const numericValue = Number(option.value);
        option.selected = (value as (string | number)[]).some(v => 
          v === optionValue || v === numericValue
        );
      });
    } else if (!Array.isArray(value)) {
      // Handle single selection
      this.element.value = value.toString();
    }
  }

  getValue(): string | number | string[] | number[] {
    if (this.props.multiple) {
      const selectedOptions = Array.from(this.element.selectedOptions);
      return selectedOptions.map(option => option.value);
    } else {
      return this.element.value;
    }
  }

  getSelectedOptions(): SelectOption[] {
    const selectedOptions = Array.from(this.element.selectedOptions);
    return selectedOptions.map(option => ({
      label: option.textContent || '',
      value: option.value,
      selected: true
    }));
  }

  setDisabled(disabled: boolean): void {
    this.props.disabled = disabled;
    this.element.disabled = disabled;
  }

  setMultiple(multiple: boolean): void {
    this.props.multiple = multiple;
    this.element.multiple = multiple;
    
    // Re-apply styles since multiple selects have different styling
    this.applyStyles();
  }

  setBordered(bordered: boolean): void {
    this.props.bordered = bordered;
    
    if (bordered) {
      this.element.classList.add('sage-select-bordered');
    } else {
      this.element.classList.remove('sage-select-bordered');
    }
  }

  setGhost(ghost: boolean): void {
    this.props.ghost = ghost;
    
    if (ghost) {
      this.element.classList.add('sage-select-ghost');
    } else {
      this.element.classList.remove('sage-select-ghost');
    }
  }

  addOption(option: SelectOption): void {
    if (!this.props.options) {
      this.props.options = [];
    }
    
    this.props.options.push(option);
    const optionElement = this.createOption(option);
    this.element.appendChild(optionElement);
  }

  removeOption(value: string | number): void {
    if (this.props.options) {
      this.props.options = this.props.options.filter(option => option.value !== value);
    }
    
    const optionElement = this.element.querySelector(`option[value="${value}"]`) as HTMLOptionElement;
    if (optionElement) {
      optionElement.remove();
    }
  }

  clearOptions(): void {
    this.props.options = [];
    this.props.groups = [];
    this.element.innerHTML = '';
  }

  getElement(): HTMLSelectElement {
    return this.element;
  }

  onChange(handler: (value: string | number | string[] | number[]) => void): void {
    this.changeHandlers.push(handler);
  }

  removeChangeHandler(handler: (value: string | number | string[] | number[]) => void): void {
    const index = this.changeHandlers.indexOf(handler);
    if (index > -1) {
      this.changeHandlers.splice(index, 1);
    }
  }

  destroy(): void {
    this.changeHandlers = [];
    // Note: We don't remove the element from DOM as it might be managed externally
  }

  static render(): string {
    return '<select class="sage-select"></select>';
  }
}

// Export convenience function for simple usage
export function createSelect(props: SelectProps = {}): Select {
  return new Select(props);
}
