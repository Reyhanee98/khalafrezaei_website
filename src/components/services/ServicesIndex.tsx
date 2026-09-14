import type { Service } from "@/data/services";
import { getServiceIcon } from "@/lib/services";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ServicesIndexProps = {
  services: Service[];
};

export default function ServicesIndex({ services }: ServicesIndexProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep">
        <div className="hero-seal-gradient absolute inset-0" aria-hidden="true" />
        <div className="hero-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="section-inner relative z-10 py-16 sm:py-20">
          <nav aria-label="مسیر صفحه" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-mist/70">
              <li>
                <Link href="/" className="transition-colors hover:text-gold">
                  خانه
                </Link>
              </li>
              <li className="text-gold">/</li>
              <li className="font-semibold text-gold" aria-current="page">
                خدمات
              </li>
            </ol>
          </nav>

          <p className="section-label">فهرست خدمات</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-snug text-mist sm:text-4xl lg:text-5xl">
            خدمات کارشناسی رسمی
          </h1>
          <div className="section-rule" />
          <p className="section-lead max-w-2xl !text-mist/80">
            مجموعه خدمات تخصصی ارزیابی و کارشناسی برای پرونده‌های ملکی، صنعتی،
            بانکی و حقوقی — با گزارش‌های رسمی قابل استناد.
          </p>
        </div>
      </section>

      <section className="section section-light section-accent-line">
        <div className="section-inner">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = getServiceIcon(service.icon);
              return (
                <article
                  key={service.slug}
                  className="ui-card ui-card-dark group flex h-full flex-col overflow-hidden"
                >
                  <div className="media-frame media-ratio">
                    <Image
                      src={service.coverImage}
                      alt={service.coverImageAlt}
                      fill
                      loading="lazy"
                      className="img-zoom object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="media-overlay" />
                    <div className="icon-box absolute bottom-3 start-3 bg-navy-deep/90 backdrop-blur-sm">
                      <Icon strokeWidth={1.75} aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ui-card-pad flex flex-1 flex-col">
                    <h2 className="card-title text-mist">{service.title}</h2>
                    <p className="card-text flex-1 text-mist/75">
                      {service.shortDescription}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="btn btn-ghost btn-compact mt-5 self-start"
                      title={`مشاهده جزئیات ${service.title}`}
                    >
                      مشاهده جزئیات
                      <ArrowLeft strokeWidth={1.75} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
