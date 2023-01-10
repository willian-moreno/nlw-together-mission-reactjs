import { ButtonHTMLAttributes } from 'react';
import './index.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return (
    <button
      className="btn"
      {...props}
    ></button>
  );
}
