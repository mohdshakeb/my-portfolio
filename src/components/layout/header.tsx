"use client";

import { FileText } from "lucide-react";
import { CustomLink } from "@/components/ui/link";

export function Header() {
  return (
    <header className="sticky top-0 w-full flex justify-between items-center z-50 bg-white/30 backdrop-blur-sm border-b sm:bg-transparent sm:backdrop-blur-none sm:border-none border-zinc-100 px-8 py-4">
      <p className="font-outfit font-medium text-3xl text-zinc-800">m.</p>
      <nav className="flex items-center">
        <CustomLink 
          href="#" 
          variant="icon-text"
          icon={<FileText size={16} />}
        >
          Resume
        </CustomLink>
      </nav>
    </header>
  );
} 