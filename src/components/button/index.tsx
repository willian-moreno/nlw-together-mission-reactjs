import { ButtonHTMLAttributes } from 'react';
import './index.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <button
      className={`btn ${isOutlined ? 'outlined' : ''}`}
      {...props}
    ></button>
  );
}
