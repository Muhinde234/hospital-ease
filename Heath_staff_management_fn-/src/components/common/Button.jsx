import React from "react";

const Button = ({ type = "button", children, className, props }) => {
  return (
    <button
      className={`flex-grow  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
