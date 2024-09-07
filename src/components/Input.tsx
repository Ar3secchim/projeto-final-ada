import React, { forwardRef } from "react";

type IInputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={
        `border rounded-lg p-2 focus:border-green-500 ${className}`
      }
      ref={ref}
      {...props}
    />
  ),
);

export default Input;