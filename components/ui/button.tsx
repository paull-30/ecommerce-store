import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          `w-auto rounded-full bg-black border-transparent px-5 py-3
           disabled:cursor-not-allowed disabled:opacity-50 text-white
           font-semibold hover:opacity-75 transition`,
          className
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
