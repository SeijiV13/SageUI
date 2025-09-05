import { AlertProps, alertClasses, alertIcons } from './index';

export class Alert {
  static getClasses(props: AlertProps = {}): string {
    const { variant = 'info' } = props;

    return [
      alertClasses.base,
      alertClasses.variants[variant]
    ].join(' ');
  }

  static render(content: string, props: AlertProps = {}): string {
    const {
      variant = 'info',
      dismissible = false,
      icon = true
    } = props;

    const classes = this.getClasses(props);
    const iconHtml = icon ? `<div class="${alertClasses.icon}">${alertIcons[variant]}</div>` : '';
    const dismissButton = dismissible 
      ? `<button class="${alertClasses.dismissButton}" onclick="this.parentElement.remove()">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </button>`
      : '';

    return `
      <div class="${classes}">
        ${iconHtml}
        <div class="${alertClasses.content}">${content}</div>
        ${dismissButton}
      </div>
    `;
  }
}
