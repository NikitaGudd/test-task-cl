import { InputHTMLAttributes, forwardRef } from 'react';
import styles from './Input.module.scss';
import cn from 'classnames';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'error' | 'success';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = 'default', ...props }, ref) => {
    const inputClasses = cn(className, styles.input, styles[variant]);

    return <input className={inputClasses} type={type} ref={ref} {...props} />;
  }
);
Input.displayName = 'Input';

export { Input };
