import type { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'reset' | 'button';
  children: string;
}

const Button = (props: IButtonProps) => {
  return <button {...props} type={props.type}>{props.children}</button>;
};

export default Button;