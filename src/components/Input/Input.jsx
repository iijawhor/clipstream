import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      className,
      placeholder = "Search",
      value,
      onChange,
      type = "text",
      ...props
    },
    ref
  ) => {
    return (
      <input
        className={`input ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        value={value}
        {...props}
        ref={ref}
      />
    );
  }
);

export default Input;
