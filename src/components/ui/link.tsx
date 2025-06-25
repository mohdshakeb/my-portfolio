"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface CustomLinkProps {
  href: string;
  variant?: "text" | "icon-text" | "icon";
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function CustomLink({ 
  href, 
  variant = "text", 
  children, 
  icon, 
  className = "" 
}: CustomLinkProps) {
  const baseClasses = "inline-flex items-center gap-2 text-zinc-800 font-medium hover:-translate-y-0.5 transition-transform duration-200";
  
  return (
    <Link href={href} className={`${baseClasses} ${className}`}>
      {variant === "icon-text" && icon && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      {variant === "icon-text" && children && (
        <span>{children}</span>
      )}
      {variant === "text" && children && (
        <span>{children}</span>
      )}
      {variant === "icon" && icon && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </Link>
  );
} 