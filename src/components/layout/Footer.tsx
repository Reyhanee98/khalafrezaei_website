import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "خانه" },
  { href: "/services", label: "خدمات" },
  { href: "/articles", label: "مقالات" },
  { href: "/contact", label: "تماس" },
  { href: "/services/official-property-valuation", label: "ارزیابی املاک" },
  { href: "/services/surveying", label: "نقشه‌برداری" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-texture relative overflow-hidden border-t border-gold/40 py-12 text-mist/70">
      <div className="absolute inset-0 bg-navy-deep/88" aria-hidden="true" />
      <div className="hero-grid absolute inset-0 opacity-20" aria-hidden="true" />

      <div className="section-inner relative z-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_auto_auto] md:items-center">
          <div className="flex items-start gap-4">
            <div className="media-frame relative h-16 w-16 shrink-0 border border-gold/50 bg-mist">
              <Image
                src="/images/portrait.jpg"
                alt="تصویر کوچک محمد خلف رضایی، کارشناس رسمی دادگستری"
                fill
                loading="lazy"
                className="object-cover object-top"
                sizes="64px"
              />
            </div>
            <div>
              <p className="font-bold text-gold">محمد خلف رضایی</p>
              <p className="mt-1 text-sm leading-7 text-mist/80">
                کارشناس رسمی دادگستری (راه، ساختمان و نقشه‌برداری) · شماره پروانه:
                ۱۱-۰۱-۴۱-۸۱۹۸
              </p>
              <nav
                aria-label="پیوندهای داخلی پاورقی"
                className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm"
              >
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-mist/70 transition-colors hover:text-gold"
                    title={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="media-frame relative h-20 w-20 border border-gold/50 bg-white p-1.5">
            <Image
              src="/images/association-logo.jpg"
              alt="لوگوی کانون کارشناسان رسمی دادگستری"
              fill
              loading="lazy"
              className="object-contain p-1.5"
              sizes="80px"
            />
          </div>

          <p className="text-sm text-mist/65 md:text-end">
            © {year} تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
