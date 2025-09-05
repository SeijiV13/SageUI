export interface CheckboxProps {
  element?: HTMLInputElement;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  className?: string;
}

export class Checkbox {
  private element: HTMLInputElement;
  private props: CheckboxProps;
  private changeHandlers: Array<(checked: boolean) => void> = [];

  constructor(props: CheckboxProps = {}) {
    this.props = { size: 'md', variant: 'primary', checked: false, ...props };
    
    if (props.element) {
      this.element = props.element;
    } else {
      this.element = document.createElement('input');
      this.element.type = 'checkbox';
    }
    
    this.applyStyles();
    this.setupEventListeners();
  }

  private applyStyles(): void {
    // Base class
    this.element.className = 'sage-checkbox';

    // Add variant class
    if (this.props.variant && this.props.variant !== 'primary') {
      this.element.classList.add(`sage-checkbox-${this.props.variant}`);
    }

    // Add size class
    if (this.props.size && this.props.size !== 'md') {
      this.element.classList.add(`sage-checkbox-${this.props.size}`);
    }

    // Add custom classes
    if (this.props.className) {
      this.element.classList.add(...this.props.className.split(' '));
    }

    // Set checked state
    if (this.props.checked !== undefined) {
      this.element.checked = this.props.checked;
    }

    // Set disabled state
    if (this.props.disabled !== undefined) {
      this.element.disabled = this.props.disabled;
    }

    // Set indeterminate state
    if (this.props.indeterminate !== undefined) {
      this.element.indeterminate = this.props.indeterminate;
    }
  }

  private setupEventListeners(): void {
    this.element.addEventListener('change', () => {
      this.props.checked = this.element.checked;
      this.props.indeterminate = false; // Clear indeterminate when user interacts
      this.changeHandlers.forEach(handler => handler(this.element.checked));
    });
  }

  setVariant(variant: CheckboxProps['variant']): void {
    // Remove old variant classes
    this.element.classList.remove(
      'sage-checkbox-primary',
      'sage-checkbox-secondary', 
      'sage-checkbox-success',
      'sage-checkbox-warning',
      'sage-checkbox-error'
    );

    this.props.variant = variant;
    
    if (variant && variant !== 'primary') {
      this.element.classList.add(`sage-checkbox-${variant}`);
    }
  }

  setSize(size: CheckboxProps['size']): void {
    // Remove old size classes
    this.element.classList.remove(
      'sage-checkbox-xs',
      'sage-checkbox-sm',
      'sage-checkbox-lg'
    );

    this.props.size = size;
    
    if (size && size !== 'md') {
      this.element.classList.add(`sage-checkbox-${size}`);
    }
  }

  setChecked(checked: boolean): void {
    this.props.checked = checked;
    this.element.checked = checked;
    
    if (checked) {
      this.props.indeterminate = false;
      this.element.indeterminate = false;
    }
  }

  setDisabled(disabled: boolean): void {
    this.props.disabled = disabled;
    this.element.disabled = disabled;
  }

  setIndeterminate(indeterminate: boolean): void {
    this.props.indeterminate = indeterminate;
    this.element.indeterminate = indeterminate;
    
    if (indeterminate) {
      this.props.checked = false;
      this.element.checked = false;
    }
  }

  getChecked(): boolean {
    return this.element.checked;
  }

  getIndeterminate(): boolean {
    return this.element.indeterminate;
  }

  getElement(): HTMLInputElement {
    return this.element;
  }

  onChange(handler: (checked: boolean) => void): void {
    this.changeHandlers.push(handler);
  }

  removeChangeHandler(handler: (checked: boolean) => void): void {
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
    return '<input type="checkbox" class="sage-checkbox">';
  }
}

// Export convenience function for simple usage
export function createCheckbox(props: CheckboxProps = {}): Checkbox {
  return new Checkbox(props);
}
