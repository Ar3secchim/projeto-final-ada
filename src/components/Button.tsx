import * as React from "react";

export type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, className, ...props }: IButtonProps) {
  return (
    <button
      className={
        `disabled:opacity-65 disabled:hover:bg-emerald-700 w-full bg-emerald-700 text-white rounded-lg hover:bg-emerald-900 font-medium ${className}`
      }
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;