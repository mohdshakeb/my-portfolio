"use client";

import { ReactNode } from "react";

interface ScrollButtonProps {
  sectionId: string;
  variant?: "text" | "icon-text" | "icon";
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function ScrollButton({ 
  sectionId, 
  variant = "text", 
  children, 
  icon, 
  className = "" 
}: ScrollButtonProps) {
  const baseClasses = "inline-flex items-center gap-3 text-zinc-800 font-medium hover:-translate-y-0.5 transition-transform duration-200 cursor-pointer";
  
  const scrollToSection = () => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <button 
      onClick={scrollToSection} 
      className={`${baseClasses} ${className}`}
    >
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
    </button>
  );
} 