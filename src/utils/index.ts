// Utility functions
export function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function mergeClasses(baseClasses: string, additionalClasses?: string): string {
  if (!additionalClasses) return baseClasses;
  return `${baseClasses} ${additionalClasses}`;
}

export interface ComponentVariants {
  [key: string]: string;
}

export function getVariantClasses(
  variants: ComponentVariants,
  selectedVariant: string,
  defaultVariant: string = 'default'
): string {
  return variants[selectedVariant] || variants[defaultVariant] || '';
}

export function createComponentClasses(
  base: string,
  variants: ComponentVariants,
  sizes?: ComponentVariants,
  selectedVariant: string = 'default',
  selectedSize?: string
): string {
  const variantClass = getVariantClasses(variants, selectedVariant);
  const sizeClass = sizes && selectedSize ? getVariantClasses(sizes, selectedSize) : '';
  
  return classNames(base, variantClass, sizeClass);
}
