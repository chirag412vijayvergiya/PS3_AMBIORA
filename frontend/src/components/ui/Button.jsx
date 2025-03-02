import React from "react";

export const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles = "px-4 py-2 font-medium rounded-lg transition duration-200";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
