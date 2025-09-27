"use client";

import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: "primary" | "secondary" | "danger" | "white";
  disabled?: boolean;
  icon?: ReactNode; // optional icon
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className,
  variant = "primary",
  disabled = false,
  icon,
}) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2";

  let variantStyles = "";

  switch (variant) {
    case "primary":
      variantStyles = "bg-cyan-500 text-white hover:bg-cyan-600";
      break;
    case "secondary":
      variantStyles = "bg-gray-700 text-white hover:bg-gray-600";
      break;
    case "danger":
      variantStyles = "bg-red-500 text-white hover:bg-red-600";
      break;
    case "white":
      variantStyles = "bg-white text-black hover:bg-gray-200";
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
      disabled={disabled}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
