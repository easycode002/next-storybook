import classNames from "classnames";
import React from "react";
import { FiCoffee } from "react-icons/fi";
import { GrHomeOption } from "react-icons/gr";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  radius?: "small" | "medium" | "large" | "full" | "none";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  variant?:
    | "solid"
    | "faded"
    | "bordered"
    | "light"
    | "flat"
    | "ghost"
    | "shadow";
  isLoading?: boolean;
  isDisabled?: boolean;
  isIconOnly?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  radius = "none",
  color = "default",
  variant = "solid",
  isLoading = false,
  isDisabled = false,
  isIconOnly = false,
  startContent,
  endContent,
  className,
  children,
  onClick,
  ...props
}) => {
  const baseStyles =
    "bg-red-500 inline-flex items-center justify-center font-medium transition-colors duration-200";

  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  }[size];
  const radiusStyles = {
    small: "rounded-sm",
    medium: "rounded-md",
    large: "rounded-lg",
    full: "rounded-full",
    none: "rounded-none",
  }[radius];
  const colorStyles = {
    default: "bg-gray-200 text-gray-800 border-gray-300",
    primary: "bg-blue-500 text-white border-blue-500",
    secondary: "bg-gray-400 text-white border-gray-400",
    success: "bg-green-500 text-white border-green-500",
    warning: "bg-yellow-500 text-white border-yellow-500",
    danger: "bg-red-500 text-white border-red-500",
  }[color];
  const variantStyles = {
    solid: "",
    faded: "bg-opacity-50",
    bordered: "border",
    light: "bg-transparent",
    flat: "bg-transparent",
    ghost: "bg-transparent border-transparent",
    shadow: "shadow-md",
  }[variant];
  const loadingSpinner = (
    <svg
      className="animate-spin h-5 w-5 text-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        fill="currentColor"
      />
    </svg>
  );
  return (
    <button
      className={classNames(
        baseStyles,
        sizeStyles,
        radiusStyles,
        colorStyles,
        variantStyles,
        (isLoading || isDisabled) && "opacity-50 cursor-not-allowed",
        isIconOnly && "p-2",
        className
      )}
      disabled={isDisabled || isLoading}
      onClick={!isLoading && !isDisabled ? onClick : undefined}
    >
      {isLoading && (
        <span className={children ? `mr-2` : ""}>{loadingSpinner}</span>
      )}
      {isIconOnly ? (
        startContent || endContent
      ) : (
        <>
          {startContent && <span className="mr-2">{startContent}</span>}
          {children}
          {endContent && <span className="ml-2">{endContent}</span>}
        </>
      )}
    </button>
  );
};

export default Button;

export function ButtonTesting() {
  return (
    <Button
      size="large"
      radius="large"
      color="secondary"
      variant="bordered"
      isDisabled={false}
      isLoading={false}
      isIconOnly={false}
      startContent={<GrHomeOption />}
      endContent={<FiCoffee />}
      className="bg-blue-600"
    >
      Click
    </Button>
  );
}
