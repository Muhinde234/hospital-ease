import React from "react";

const Button = ({ type = "button", children, className, props }) => {
  return (
    <button
      className={`flex-grow  focus:none outline-none transition-alln cursor-pointer ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
