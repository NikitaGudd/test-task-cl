import React, { ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IButtonProps> = ({ className, type, ...props }) => {
  return <button className={className} type={type} {...props} />;
};

Button.displayName = 'Button';

export { Button };
