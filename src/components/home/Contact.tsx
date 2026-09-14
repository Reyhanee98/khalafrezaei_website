import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section section-dark section-accent-line"
    >
      <div className="section-inner">
        <header className="section-header">
          <p className="section-label">تماس</p>
          <h2 id="contact-heading" className="section-title !text-gold">
            راه‌های ارتباط مستقیم
          </h2>
          <div className="section-rule" />
          <p className="section-lead">
            برای تعیین وقت بازدید، ارسال مدارک اولیه یا پیگیری وضعیت پرونده، از
            طریق تلفن یا ایمیل در تماس باشید.
          </p>
        </header>

        <div className="section-grid grid gap-6 lg:grid-cols-2">
          <div className="space-y-5">
            <a
              href="tel:+989124129363"
              className="ui-card ui-card-dark ui-card-pad block"
              aria-label="تماس تلفنی با شماره ۰۹۱۲۴۱۲۹۳۶۳"
              title="تماس تلفنی با کارشناس"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-gold">
                <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                تلفن
              </div>
              <p
                className="mt-4 text-2xl font-bold tracking-wide text-mist sm:text-3xl"
                dir="ltr"
              >
                ۰۹۱۲۴۱۲۹۳۶۳
              </p>
              <p className="mt-2 text-sm text-mist/60">برای تماس کلیک کنید</p>
            </a>

            <a
              href="mailto:mohammad.khalafrezae@gmail.com"
              className="ui-card ui-card-dark ui-card-pad block"
              aria-label="ارسال ایمیل به mohammad.khalafrezae@gmail.com"
              title="ارسال ایمیل به کارشناس"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-gold">
                <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                ایمیل
              </div>
              <p
                className="mt-4 break-all text-lg font-bold text-mist sm:text-xl"
                dir="ltr"
              >
                mohammad.khalafrezae@gmail.com
              </p>
              <p className="mt-2 text-sm text-mist/60">ارسال پیام الکترونیکی</p>
            </a>

            <div className="ui-card ui-card-dark ui-card-pad">
              <div className="flex items-center gap-2 text-sm font-semibold text-gold">
                <MapPin className="h-4 w-4" strokeWidth={1.75} />
                محل فعالیت
              </div>
              <p className="mt-4 text-base leading-8 text-mist/80">
                ارائه خدمات کارشناسی در تهران و سایر مناطق بر اساس هماهنگی قبلی
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="ui-card ui-card-dark group overflow-hidden">
              <div className="media-frame relative aspect-[16/11] !rounded-lg">
                <Image
                  src="/images/office/office-workspace.jpg"
                  alt="فضای کاری و مشاوره کارشناسی محمد خلف رضایی"
                  fill
                  loading="lazy"
                  className="img-zoom object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="media-overlay" />
                <p className="absolute inset-x-0 bottom-0 p-5 text-sm font-semibold text-mist">
                  فضای مشاوره تخصصی
                </p>
              </div>
            </div>

            <div className="ui-card ui-card-dark overflow-hidden">
              <div className="media-frame media-ratio !rounded-lg">
                <Image
                  src="/images/office/map-placeholder.jpg"
                  alt="نقشه موقعیت مکانی دفتر کارشناسی — جایگزین نقشه تعاملی"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-navy-deep/35" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="rounded-[var(--radius-md)] border border-gold/70 bg-navy-deep/80 px-4 py-2 text-sm font-semibold text-gold backdrop-blur-sm">
                    نقشه موقعیت (به‌زودی)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
