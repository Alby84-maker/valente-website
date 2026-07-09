"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-orange-100 bg-white/90 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <img
            src="/logo.png"
            alt="Valente Events"
            className="h-12 w-auto"
          />

          <div>
            <h1 className="text-xl font-bold text-orange-600">
              Valente Events
            </h1>

            <p className="text-xs text-gray-500">
              Where Every Moment Matters
            </p>
          </div>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-gray-700 transition hover:text-orange-500"
            >
              {item.name}
            </Link>
          ))}

        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">

          <Link
            href="/plan-your-event"
            className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Plan Your Event
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-700 lg:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-orange-100 bg-white lg:hidden">

          <div className="flex flex-col gap-6 p-6">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-gray-700 transition hover:text-orange-500"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/plan-your-event"
              className="rounded-xl bg-orange-500 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
            >
              Plan Your Event
            </Link>

          </div>

        </div>
      )}
    </header>
  );
}
