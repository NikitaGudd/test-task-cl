import React, { forwardRef, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Message.module.scss';

export interface IMessageProps extends HTMLAttributes<HTMLSpanElement> {
  variant: 'default' | 'error' | 'success';
  size: 'sm' | 'md' | 'lg';
}

const Message = forwardRef<HTMLSpanElement, IMessageProps>(
  (
    { children, className, variant = 'default', size = 'md', ...props },
    ref
  ) => {
    const messageClasses = cn(
      className,
      styles.message,
      styles[variant],
      styles[size]
    );

    return (
      <span ref={ref} className={messageClasses} {...props}>
        {children}
      </span>
    );
  }
);
Message.displayName = 'Message';

export { Message };
