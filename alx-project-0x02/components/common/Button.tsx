// components/common/Button.tsx
import { type ButtonProps } from "@/interfaces";

export default function Button({ size, shape, label }: ButtonProps) {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const shapeClasses = {
    rounded: "rounded-full",
    square: "rounded-none",
    default: "rounded-md"
  };

  return (
    <button 
      className={`
        ${sizeClasses[size]} 
        ${shapeClasses[shape] || shapeClasses.default}
        bg-blue-500 hover:bg-blue-600 
        text-white font-medium
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
      `}
    >
      {label}
    </button>
  );
}