import {
  Award,
  BadgeCheck,
  Briefcase,
  Building,
  ShieldCheck,
  Scale,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

const certificates: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "پروانه رسمی کارشناسی",
    description:
      "دارای پروانه معتبر به شماره ۱۱-۰۱-۴۱-۸۱۹۸ در رشته راه، ساختمان و نقشه‌برداری",
    icon: Award,
  },
  {
    title: "عضویت سازمانی",
    description:
      "فعال در چارچوب ضوابط و نظارت حرفه‌ای کانون کارشناسان رسمی دادگستری",
    icon: BadgeCheck,
  },
  {
    title: "سابقه تخصصی",
    description:
      "تجربه متمرکز در ارزیابی دارایی، بررسی وضعیت فنی و پشتیبانی از تصمیم‌گیری‌های ملکی",
    icon: Briefcase,
  },
  {
    title: "کارشناسی قضایی",
    description:
      "آمادگی برای انجام کارشناسی‌های ارجاعی مرتبط با دعاوی و اختلافات ملکی و ساختمانی",
    icon: Scale,
  },
  {
    title: "نظام مهندسی",
    description: "دارای سابقه و جایگاه حرفه‌ای در حوزه مهندسی ساختمان",
    icon: Building,
  },
  {
    title: "کارشناس رسمی بیمه مرکزی",
    description: "فعالیت حرفه‌ای در جایگاه کارشناس رسمی بیمه مرکزی",
    icon: ShieldCheck,
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="section section-dark section-accent-line"
    >
      <div className="section-inner">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <header className="section-header">
            <p className="section-label">مدارک و مجوزها</p>
            <h2 id="certificates-heading" className="section-title">
              مجوزها و جایگاه حرفه‌ای
            </h2>
            <div className="section-rule" />
          </header>
          <div className="media-frame relative h-24 w-24 border border-gold/50 bg-white p-2 shadow-[0_0_24px_rgba(201,168,76,0.25)] sm:h-28 sm:w-28">
            <Image
              src="/images/association-logo.jpg"
              alt="لوگوی کانون کارشناسان رسمی دادگستری"
              fill
              loading="lazy"
              className="object-contain p-2"
              sizes="112px"
            />
          </div>
        </div>

        <div className="section-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="ui-card ui-card-dark ui-card-pad relative overflow-hidden"
              >
                <div
                  className="pointer-events-none absolute -end-8 -top-8 h-28 w-28 rounded-full bg-gold/10 blur-2xl"
                  aria-hidden="true"
                />
                <div className="icon-box">
                  <Icon strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-gold">{item.title}</h3>
                <p className="card-text text-mist/75">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
