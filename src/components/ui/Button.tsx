
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CommonButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  glowEffect?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

// Button props for regular button element
export interface ButtonProps extends CommonButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'as'> {
  as?: 'button';
  href?: never;
  to?: never;
}

// Link props for <a> tag
export interface AnchorButtonProps extends CommonButtonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'as'> {
  as: 'a';
  href: string;
  to?: never;
}

// Router Link props for react-router-dom
export interface RouterLinkButtonProps extends CommonButtonProps, Omit<LinkProps, 'as'> {
  as: typeof Link;
  to: string;
  href?: never;
}

// Combined props type
type CombinedButtonProps = ButtonProps | AnchorButtonProps | RouterLinkButtonProps;

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, CombinedButtonProps>(
  ({ 
    children, 
    className, 
    variant = 'primary', 
    size = 'md',
    glowEffect = false,
    fullWidth = false,
    as: Component = 'button',
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

    const classNames = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      glowEffect && glowStyles[variant],
      fullWidth && "w-full",
      className
    );

    // For React Router Link
    if (Component === Link) {
      return (
        <Component
          className={classNames}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as RouterLinkButtonProps)}
        >
          {children}
        </Component>
      );
    }

    // For regular anchor tag
    if (Component === 'a') {
      return (
        <Component
          className={classNames}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as AnchorButtonProps)}
        >
          {children}
        </Component>
      );
    }

    // For regular button
    return (
      <Component
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classNames}
        {...(props as ButtonProps)}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;
