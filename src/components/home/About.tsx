import { Briefcase, GraduationCap, Scale } from "lucide-react";
import Image from "next/image";

const approach = [
  "بازدید میدانی دقیق و مستندسازی مشاهدات",
  "تحلیل فنی بر اساس استانداردهای مهندسی",
  "نگارش گزارش شفاف و قابل دفاع",
  "پاسخگویی به ابهامات طرفین پرونده",
];

const timeline = [
  {
    year: "آموزش و مبانی فنی",
    text: "شکل‌گیری دانش تخصصی در مهندسی عمران و حوزه‌های مرتبط با راه و ساختمان",
  },
  {
    year: "تجربه اجرایی",
    text: "سال‌ها فعالیت عملی در ارزیابی، برآورد و بررسی وضعیت فنی پروژه‌ها",
  },
  {
    year: "فعالیت کارشناسی",
    text: "تمرکز بر تهیه گزارش‌های رسمی برای نیازهای حقوقی، بانکی و سازمانی",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section section-light section-accent-line overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url('/images/backgrounds/green-gold-atmosphere.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -start-20 top-16 h-64 w-64 rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-inner">
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="absolute -inset-4 rounded-[var(--radius-xl)] border border-gold/25"
              aria-hidden="true"
            />
            <div className="ui-card ui-card-dark overflow-hidden p-3">
              <div className="media-frame media-ratio-portrait bg-mist">
                <Image
                  src="/images/portrait.jpg"
                  alt="محمد خلف رضایی در بخش درباره من"
                  fill
                  loading="lazy"
                  className="object-contain object-top"
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
              </div>
            </div>
          </div>

          <div>
            <header className="section-header">
              <p className="section-label">درباره من</p>
              <h2 id="about-heading" className="section-title">
                مسیر حرفه‌ای و رویکرد کارشناسی
              </h2>
              <div className="section-rule" />
            </header>

            <p className="section-lead mt-6">
              من{" "}
              <span className="font-bold text-navy">محمد خلف رضایی</span> هستم؛
              کارشناس رسمی دادگستری در رشته راه، ساختمان و نقشه‌برداری. در کار خود
              تلاش می‌کنم میان دانش مهندسی و الزامات حقوقی تعادل برقرار کنم تا
              هر گزارش، هم از نظر فنی دقیق و هم از نظر حقوقی قابل اتکا باشد.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="ui-card ui-card-light ui-card-pad !shadow-sm">
                <div className="icon-box !bg-navy !text-gold">
                  <Briefcase strokeWidth={1.75} />
                </div>
                <p className="mt-3 text-sm font-bold text-navy">سابقه فعالیت</p>
                <p className="mt-1 text-sm leading-7 text-slate">
                  بیش از سه دهه تجربه حرفه‌ای
                </p>
              </div>
              <div className="ui-card ui-card-light ui-card-pad !shadow-sm">
                <div className="icon-box !bg-navy !text-gold">
                  <GraduationCap strokeWidth={1.75} />
                </div>
                <p className="mt-3 text-sm font-bold text-navy">رشته تخصصی</p>
                <p className="mt-1 text-sm leading-7 text-slate">
                  راه، ساختمان و نقشه‌برداری
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-gold/40 pt-4">
              <p className="flex items-center gap-2 text-xs font-semibold text-slate">
                <Scale className="h-4 w-4 text-gold" strokeWidth={1.75} />
                شماره پروانه کارشناسی
              </p>
              <p className="mt-2 text-xl font-bold text-navy">۱۱-۰۱-۴۱-۸۱۹۸</p>
            </div>

            <div className="mt-8">
              <p className="section-label">روش کار</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {approach.map((item) => (
                  <li
                    key={item}
                    className="rounded-[var(--radius-md)] border border-gold/30 bg-white/60 px-3 py-2 text-sm text-navy"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-4">
              <p className="section-label">مسیر حرفه‌ای</p>
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="h-3 w-3 rounded-full bg-gold" />
                    {index < timeline.length - 1 ? (
                      <span className="mt-1 w-px flex-1 bg-gold/40" />
                    ) : null}
                  </div>
                  <div className="pb-4">
                    <p className="text-sm font-bold text-navy">{item.year}</p>
                    <p className="mt-1 text-sm leading-7 text-slate">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
