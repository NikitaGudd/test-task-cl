import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ className, type, ...props }) => {
  return <button className={className} type={type} {...props} />;
};

Button.displayName = "Button";

export { Button };
