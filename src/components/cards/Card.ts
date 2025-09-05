import { CardProps, cardClasses } from './index';

export class Card {
  static getClasses(props: CardProps = {}): string {
    const {
      variant = 'default',
      padding = 'md',
      rounded = true
    } = props;

    const classes = [
      cardClasses.base,
      cardClasses.variants[variant],
      cardClasses.padding[padding]
    ];

    if (rounded) classes.push(cardClasses.rounded);

    return classes.join(' ');
  }

  static render(content: string, props: CardProps = {}): string {
    const classes = this.getClasses(props);
    return `<div class="${classes}">${content}</div>`;
  }

  static renderWithBody(title: string, content: string, props: CardProps = {}): string {
    const cardClasses = this.getClasses(props);
    return `
      <div class="${cardClasses}">
        <div class="card-body">
          <h3 class="card-title text-xl font-semibold text-gray-900 mb-2">${title}</h3>
          <div class="card-content text-gray-600">${content}</div>
        </div>
      </div>
    `;
  }
}
