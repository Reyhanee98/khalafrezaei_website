"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#home", label: "خانه" },
  { href: "/services", label: "خدمات" },
  { href: "/qualifications", label: "صلاحیت‌ها" },
  { href: "/#about", label: "درباره من" },
  { href: "/articles", label: "مقالات" },
  { href: "/contact", label: "تماس" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-gold/60 bg-mist/80 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-navy-deep/20 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className={`flex items-center gap-2.5 text-sm font-bold tracking-tight transition-colors sm:text-base ${
            scrolled || open ? "text-navy" : "text-mist"
          }`}
          title="محمد خلف رضایی — کارشناس رسمی دادگستری"
        >
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md border border-gold/50 bg-white shadow-sm sm:h-10 sm:w-10">
            <Image
              src="/images/association-logo.jpg"
              alt="لوگوی کانون کارشناسان رسمی دادگستری"
              fill
              priority
              className="object-contain p-1"
              sizes="40px"
            />
          </span>
          محمد خلف رضایی
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="منوی اصلی">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-slate hover:text-navy"
                  : "text-mist/85 hover:text-gold"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="btn btn-primary btn-compact"
            title="درخواست مشاوره کارشناسی"
          >
            درخواست مشاوره
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "بستن منوی اصلی" : "باز کردن منوی اصلی"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className={`rounded p-2 lg:hidden ${
            scrolled || open ? "text-navy" : "text-mist"
          }`}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-gold/50 bg-mist/95 px-5 py-6 backdrop-blur-xl lg:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="منوی موبایل">
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
              href="/contact"
              className="btn btn-primary mt-2 w-full"
              title="درخواست مشاوره کارشناسی"
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
