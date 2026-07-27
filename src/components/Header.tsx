"use client";

import { Menu, Scale, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "خانه" },
  { href: "#about", label: "درباره من" },
  { href: "#services", label: "خدمات" },
  { href: "#contact", label: "تماس" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className={`flex items-center gap-2 text-base font-bold tracking-tight transition-colors sm:text-lg ${
            scrolled || open ? "text-navy" : "text-white"
          }`}
        >
          <Scale className="h-5 w-5 shrink-0" strokeWidth={1.75} />
          محمد خلف رضائی زارع
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-slate hover:text-navy"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`rounded px-4 py-2 text-sm font-semibold transition-colors ${
              scrolled
                ? "bg-navy text-white hover:bg-navy-soft"
                : "bg-white text-navy hover:bg-mist"
            }`}
          >
            درخواست مشاوره
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          className={`rounded p-2 md:hidden ${
            scrolled || open ? "text-navy" : "text-white"
          }`}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-navy"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center rounded bg-navy px-4 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              درخواست مشاوره
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
