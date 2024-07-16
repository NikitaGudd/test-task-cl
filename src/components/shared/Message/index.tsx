import React, { HTMLAttributes } from 'react';

export interface IMessageProps extends HTMLAttributes<HTMLSpanElement> {}

const Message: React.FC<IMessageProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
};
Message.displayName = 'Input';

export { Message };
