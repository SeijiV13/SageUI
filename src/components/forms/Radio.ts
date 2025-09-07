export interface RadioOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface RadioProps {
  name: string;
  options: RadioOption[];
  value?: string | number;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
  layout?: 'horizontal' | 'vertical';
  className?: string;
}

export class Radio {
  private container: HTMLElement | null = null;
  private props: RadioProps;
  private changeHandlers: Array<(value: string | number) => void> = [];

  constructor(props: RadioProps) {
    this.props = { size: 'md', variant: 'primary', layout: 'vertical', ...props };
  }

  private createRadioOption(option: RadioOption): HTMLLabelElement {
    const label = document.createElement('label');
    label.className = 'cursor-pointer label';

    if (this.props.layout === 'horizontal') {
      label.classList.add('flex-row');
    } else {
      label.classList.add('justify-start', 'gap-2');
    }

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = this.props.name;
    input.value = option.value.toString();
    input.className = 'radio';

    // Add variant class
    if (this.props.variant && this.props.variant !== 'primary') {
      input.classList.add(`radio-${this.props.variant}`);
    }

    // Add size class
    if (this.props.size && this.props.size !== 'md') {
      input.classList.add(`radio-${this.props.size}`);
    }

    // Set checked state
    if (this.props.value !== undefined && option.value === this.props.value) {
      input.checked = true;
    }

    // Set disabled state
    if (option.disabled || this.props.disabled) {
      input.disabled = true;
      label.classList.add('opacity-50');
    }

    // Add change event listener
    input.addEventListener('change', () => {
      if (input.checked) {
        this.props.value = option.value;
        this.changeHandlers.forEach(handler => handler(option.value));
      }
    });

    const labelText = document.createElement('span');
    labelText.className = 'label-text';
    if (this.props.layout === 'horizontal') {
      labelText.classList.add('ml-2');
    }
    labelText.textContent = option.label;

    label.appendChild(input);
    label.appendChild(labelText);

    return label;
  }

  render(container: HTMLElement): void {
    this.container = container;
    this.container.innerHTML = '';

    const formControl = document.createElement('div');
    formControl.className = 'form-control';

    if (this.props.className) {
      formControl.classList.add(this.props.className);
    }

    const optionsContainer = document.createElement('div');
    
    if (this.props.layout === 'horizontal') {
      optionsContainer.className = 'flex gap-6';
    } else {
      optionsContainer.className = 'space-y-2';
    }

    this.props.options.forEach((option) => {
      const radioOption = this.createRadioOption(option);
      optionsContainer.appendChild(radioOption);
    });

    formControl.appendChild(optionsContainer);
    this.container.appendChild(formControl);
  }

  setVariant(variant: RadioProps['variant']): void {
    this.props.variant = variant;
    if (this.container) {
      this.render(this.container);
    }
  }

  setSize(size: RadioProps['size']): void {
    this.props.size = size;
    if (this.container) {
      this.render(this.container);
    }
  }

  setValue(value: string | number): void {
    this.props.value = value;
    if (this.container) {
      this.render(this.container);
    }
  }

  getValue(): string | number | undefined {
    return this.props.value;
  }

  getSelectedOption(): RadioOption | undefined {
    return this.props.options.find(option => option.value === this.props.value);
  }

  onChange(handler: (value: string | number) => void): void {
    this.changeHandlers.push(handler);
  }

  setDisabled(disabled: boolean): void {
    this.props.disabled = disabled;
    if (this.container) {
      this.render(this.container);
    }
  }

  setLayout(layout: RadioProps['layout']): void {
    this.props.layout = layout;
    if (this.container) {
      this.render(this.container);
    }
  }

  destroy(): void {
    if (this.container) {
      this.container.innerHTML = '';
      this.container = null;
    }
    this.changeHandlers = [];
  }
}

// Export convenience function for simple usage
export function createRadio(props: RadioProps): Radio {
  return new Radio(props);
}
