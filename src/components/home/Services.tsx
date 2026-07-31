import {
  Building2,
  Calculator,
  ClipboardList,
  FileSearch,
  Home,
  type LucideIcon,
} from "lucide-react";

const services: { title: string; icon: LucideIcon }[] = [
  {
    title: "ارزیابی و تعیین قیمت اراضی و ابنیه",
    icon: Home,
  },
  {
    title: "برآورد خسارات ساختمانی",
    icon: FileSearch,
  },
  {
    title: "تعیین اجاره‌بهای عادله",
    icon: Building2,
  },
  {
    title: "برآورد هزینه ساخت و ساز",
    icon: ClipboardList,
  },
  {
    title: "محاسبات فنی و مهندسی",
    icon: Calculator,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-b-2 border-gold bg-navy-deep py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-gold">خدمات</p>
          <h2 className="mt-3 text-3xl font-bold text-mist sm:text-4xl">
            خدمات کارشناسی رسمی
          </h2>
          <div className="mt-5 h-0.5 w-16 bg-gold" />
          <p className="mt-4 text-base leading-8 text-mist/75 sm:text-lg">
            ارائه خدمات تخصصی کارشناسی در امور ملکی، ساختمانی و فنی مطابق با
            ضوابط قانونی و استانداردهای مهندسی.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="card-gold-glow border border-gold bg-navy p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded border border-gold/50 bg-navy-deep text-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-bold leading-8 text-mist">
                  {service.title}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
