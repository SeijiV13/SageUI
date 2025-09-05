import { describe, it, expect } from 'vitest';
import { Button } from '../src/components/buttons/Button';

describe('Button Component', () => {
  it('should create a button with default props', () => {
    const button = new Button({
      children: 'Test Button'
    });
    
    const rendered = button.render();
    expect(rendered).toContain('btn');
    expect(rendered).toContain('Test Button');
  });

  it('should apply variant classes', () => {
    const button = new Button({
      variant: 'primary',
      children: 'Primary Button'
    });
    
    const rendered = button.render();
    expect(rendered).toContain('btn-primary');
  });

  it('should apply size classes', () => {
    const button = new Button({
      size: 'lg',
      children: 'Large Button'
    });
    
    const rendered = button.render();
    expect(rendered).toContain('btn-lg');
  });

  it('should handle disabled state', () => {
    const button = new Button({
      disabled: true,
      children: 'Disabled Button'
    });
    
    const rendered = button.render();
    expect(rendered).toContain('disabled');
  });

  it('should include custom className', () => {
    const button = new Button({
      className: 'custom-class',
      children: 'Custom Button'
    });
    
    const rendered = button.render();
    expect(rendered).toContain('custom-class');
  });
});
