"use client";
import React from "react";
import Link from "next/link";
import { Download, Rocket } from "lucide-react"; // using lucide icons

type CTAButtonProps = {
  children?: React.ReactNode;
  href?: string;
  download?: boolean;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "default";
};

export default function CTAButton({
  children,
  href,
  download = false,
  className,
  onClick,
  variant = "default",
}: CTAButtonProps) {
  const baseStyles = `
    inline-flex items-center gap-2
    px-2 lg:px-5 py-2 lg:py-2.5 rounded-lg font-medium
    text-xs
    transition-all duration-200
    shadow-sm
  `;

  const variantStyles = {
    primary: "bg-slate-600 hover:bg-slate-700 text-white shadow-md hover:shadow-blue-400/50",
    secondary: "bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-green-400/50",
    default: "border border-gray-400 hover:bg-gray-100 text-gray-800",
  };

  const buttonContent = (
    <>
      {download ? <Download size={18} /> : variant === "primary" ? <Rocket size={18} /> : null}
      {children ?? "Click Me"}
    </>
  );

  if (href && !download) {
    return (
      <Link href={href} className={`${baseStyles} ${variantStyles[variant]} ${className || ""}`}>
        {buttonContent}
      </Link>
    );
  }

  if (href && download) {
    return (
      <a
        href={href}
        download
        className={`${baseStyles} ${variantStyles["secondary"]} ${className || ""}`}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className || ""}`}
    >
      {buttonContent}
    </button>
  );
}
