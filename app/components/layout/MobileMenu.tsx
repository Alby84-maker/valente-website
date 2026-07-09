"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <div
      className={`
      fixed
      top-0
      right-0
      h-screen
      w-72
      bg-white
      dark:bg-slate-900
      shadow-2xl
      z-50
      transition-transform
      duration-300
      ${open ? "translate-x-0" : "translate-x-full"}
    `}
    >
      <div className="flex justify-between items-center p-6 border-b">
        <h2 className="font-bold text-xl">Menu</h2>

        <button onClick={onClose}>
          <X size={26} />
        </button>
      </div>

      <nav className="flex flex-col p-6 gap-6 text-lg">
        <Link href="/" onClick={onClose}>Home</Link>

        <Link href="/plan-your-event" onClick={onClose}>
          Plan Your Event
        </Link>

        <a href="#services" onClick={onClose}>
          Services
        </a>

        <a href="#gallery" onClick={onClose}>
          Gallery
        </a>

        <a href="#contact" onClick={onClose}>
          Contact
        </a>
      </nav>
    </div>
  );
}
