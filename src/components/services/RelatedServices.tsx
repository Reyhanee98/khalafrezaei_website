import type { Service } from "@/data/services";
import { getServiceIcon } from "@/lib/services";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type RelatedServicesProps = {
  services: Service[];
};

export default function RelatedServices({ services }: RelatedServicesProps) {
  if (services.length === 0) return null;

  return (
    <section className="section section-dark section-accent-line">
      <div className="section-inner">
        <header className="section-header">
          <p className="section-label">خدمات مرتبط</p>
          <h2 className="section-title">سایر خدمات پیشنهادی</h2>
          <div className="section-rule" />
        </header>

        <div className="section-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                    <Icon strokeWidth={1.75} />
                  </div>
                </div>
                <div className="ui-card-pad flex flex-1 flex-col">
                  <h3 className="card-title text-mist">{service.title}</h3>
                  <p className="card-text flex-1 text-mist/75">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="btn btn-ghost btn-compact mt-5 self-start"
                    title={`مشاهده جزئیات ${service.title}`}
                  >
                    مشاهده جزئیات
                    <ArrowLeft strokeWidth={1.75} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
