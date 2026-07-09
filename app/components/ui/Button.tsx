"use client";

import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        rounded-2xl
        px-6
        py-3
        font-semibold
        transition-all
        duration-300
        hover:scale-105
        ${
          variant === "primary"
            ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
            : "bg-white border border-gray-300 text-gray-900 hover:bg-gray-100 dark:bg-slate-900 dark:text-white dark:border-slate-700"
        }
        ${className}
      `}
      {...props}
    />
  );
}
