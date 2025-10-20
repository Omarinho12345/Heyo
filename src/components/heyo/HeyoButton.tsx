import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'motion/react';

interface HeyoButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const HeyoButton = forwardRef<HTMLButtonElement, HeyoButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth = false, className = '', children, ...props }, ref) => {
    const baseStyles = 'rounded-full transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantStyles = {
      primary: 'bg-gradient-to-br from-electric-blue to-hot-pink text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] active:scale-95',
      secondary: 'bg-surface text-white border border-white/10 hover:border-mint-aqua/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] active:scale-95',
      outline: 'border-2 border-electric-blue text-electric-blue hover:bg-electric-blue/10 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] active:scale-95',
      ghost: 'text-text-secondary hover:text-white hover:bg-surface active:scale-95'
    };
    
    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3',
      lg: 'px-8 py-4 text-lg'
    };
    
    const widthStyle = fullWidth ? 'w-full' : '';
    
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.95 }}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

HeyoButton.displayName = 'HeyoButton';
