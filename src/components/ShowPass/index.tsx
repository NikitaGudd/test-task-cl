import React from 'react';
import { Eye, EyeOff } from 'lucide-react';
import styles from './ShowPass.module.scss';
import { Button } from '../shared';

interface IShowPassProps {
  hidePass: boolean;
  onClick: () => void;
  className?: string;
  variant?: string;
  size?: number;
}

const ShowPass = ({
  hidePass,
  onClick,
  className,
  variant = 'default',
}: IShowPassProps) => {
  return (
    <Button className={className} type="button" onClick={onClick}>
      {hidePass ? (
        <Eye className={styles[variant]} />
      ) : (
        <EyeOff className={styles[variant]} />
      )}
    </Button>
  );
};
ShowPass.displayName = 'ShowPass';

export { ShowPass };
