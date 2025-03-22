
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  glowEffect?: boolean;
  fullWidth?: boolean;
  as?: React.ElementType;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    className, 
    variant = 'primary', 
    size = 'md',
    glowEffect = false,
    fullWidth = false,
    as: Component = 'button',
    href,
    ...props 
  }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 transform focus:outline-none";
    
    const variantStyles = {
      primary: "bg-taskuick-blue text-white hover:scale-105 hover:shadow-[0_0_15px_rgba(0,123,255,0.7)]",
      secondary: "bg-taskuick-purple text-white hover:scale-105 hover:shadow-[0_0_15px_rgba(138,43,226,0.7)]",
      accent: "bg-taskuick-green text-black font-semibold hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,127,0.7)]",
      outline: "border-2 border-taskuick-blue bg-transparent text-taskuick-blue hover:bg-taskuick-blue/10 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,123,255,0.5)]",
    };
    
    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };
    
    const glowStyles = glowEffect ? {
      primary: "shadow-[0_0_10px_rgba(0,123,255,0.5)]",
      secondary: "shadow-[0_0_10px_rgba(138,43,226,0.5)]",
      accent: "shadow-[0_0_10px_rgba(0,255,127,0.5)]",
      outline: "shadow-[0_0_10px_rgba(0,123,255,0.3)]",
    } : {};

    // If Component is 'a' and href is provided, make sure it's passed correctly
    const componentProps = Component === 'a' ? { href, ...props } : props;
    
    return (
      <Component
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          glowEffect && glowStyles[variant],
          fullWidth && "w-full",
          className
        )}
        {...componentProps}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;
