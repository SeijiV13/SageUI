export interface ComponentConfig {
  id?: string;
  className?: string;
  children?: string;
  variant?: string;
  size?: string;
  disabled?: boolean;
  [key: string]: any;
}

export interface ButtonConfig extends ComponentConfig {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: string;
  onClick?: () => void;
}

export interface InputConfig extends ComponentConfig {
  type?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  onChange?: (value: string) => void;
}

export interface CardConfig extends ComponentConfig {
  variant?: 'default' | 'bordered' | 'compact';
  title?: string;
  image?: string;
  actions?: string[];
}

export interface AlertConfig extends ComponentConfig {
  type?: 'info' | 'success' | 'warning' | 'error';
  dismissible?: boolean;
  icon?: string;
  title?: string;
  message?: string;
}

export interface BadgeConfig extends ComponentConfig {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  outline?: boolean;
}

export interface AvatarConfig extends ComponentConfig {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away' | 'busy';
  initials?: string;
}

export interface SpinnerConfig extends ComponentConfig {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'accent';
}
