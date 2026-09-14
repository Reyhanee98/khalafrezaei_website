import {
  Building2,
  Calculator,
  ClipboardList,
  FileSearch,
  Home,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

const services: {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
}[] = [
  {
    title: "ارزیابی و تعیین قیمت اراضی و ابنیه",
    description: "ارزیابی رسمی زمین و ساختمان با گزارش مستند.",
    icon: Home,
    image: "/images/services/official-property-valuation.jpg",
    imageAlt: "ارزیابی اراضی و ابنیه",
  },
  {
    title: "برآورد خسارات ساختمانی",
    description: "تعیین علت و میزان خسارت بر پایه بازدید فنی.",
    icon: FileSearch,
    image: "/images/services/construction-plans.jpg",
    imageAlt: "برآورد خسارات ساختمانی",
  },
  {
    title: "تعیین اجاره‌بهای عادله",
    description: "کارشناسی اجاره‌بها مطابق ضوابط قانونی.",
    icon: Building2,
    image: "/images/services/luxury-apartment.jpg",
    imageAlt: "تعیین اجاره‌بهای عادله",
  },
  {
    title: "برآورد هزینه ساخت و ساز",
    description: "متره و برآورد پروژه‌های ساختمانی.",
    icon: ClipboardList,
    image: "/images/services/land-measurement.jpg",
    imageAlt: "برآورد هزینه ساخت و ساز",
  },
  {
    title: "محاسبات فنی و مهندسی",
    description: "محاسبات تخصصی پشتیبان گزارش کارشناسی.",
    icon: Calculator,
    image: "/images/services/legal-property-documents.jpg",
    imageAlt: "محاسبات فنی و مهندسی",
  },
];

type ServicesProps = {
  asPage?: boolean;
};

export default function Services({ asPage = false }: ServicesProps) {
  return (
    <section
      id="core-services"
      aria-labelledby="core-services-heading"
      className="section section-dark section-accent-line"
    >
      <div className="section-inner">
        <header className="section-header">
          <p className="section-label">صلاحیت‌های پروانه</p>
          {asPage ? (
            <h1 id="core-services-heading" className="section-title">
              محورهای اصلی صلاحیت کارشناسی
            </h1>
          ) : (
            <h2 id="core-services-heading" className="section-title">
              محورهای اصلی صلاحیت کارشناسی
            </h2>
          )}
          <div className="section-rule" />
          <p className="section-lead">
            این بخش، صلاحیت‌های فنی مندرج در پروانه کارشناسی را نشان می‌دهد؛
            مواردی مانند تعیین خسارت، اجاره‌بهای عادله و محاسبات مهندسی که مبنای
            گزارش‌های رسمی قرار می‌گیرند.
          </p>
        </header>

        <div className="section-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="ui-card ui-card-dark group overflow-hidden"
              >
                <div className="media-frame media-ratio !rounded-none !rounded-t-[var(--radius-lg)]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    loading="lazy"
                    className="img-zoom object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="media-overlay" />
                </div>
                <div className="ui-card-pad">
                  <div className="icon-box">
                    <Icon strokeWidth={1.75} />
                  </div>
                  <h3 className="card-title mt-5 text-mist">{service.title}</h3>
                  <p className="card-text text-mist/70">{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
