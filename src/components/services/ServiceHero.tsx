import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import type { Service } from "@/data/services";
import { CONTACT } from "@/lib/contact";
import { getServiceIcon } from "@/lib/services";
import { ClipboardCheck, MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import { createElement } from "react";

type ServiceHeroProps = {
  service: Service;
};

export default function ServiceHero({ service }: ServiceHeroProps) {
  const icon = getServiceIcon(service.icon);

  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div className="hero-seal-gradient absolute inset-0" aria-hidden="true" />
      <div className="hero-grid absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="section-inner relative z-10 py-14 sm:py-16 lg:py-20">
        <ServiceBreadcrumb title={service.title} />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-gold/50 bg-navy/60 px-3.5 py-1.5 text-sm font-semibold text-gold backdrop-blur-sm">
              {createElement(icon, {
                className: "h-4 w-4",
                strokeWidth: 1.75,
                "aria-hidden": true,
              })}
              خدمات کارشناسی رسمی
            </div>

            <h1 className="mt-6 text-3xl font-bold leading-snug text-mist sm:text-4xl lg:text-[2.5rem]">
              {service.heroTitle}
            </h1>
            <div className="section-rule" />
            <p className="section-lead !text-mist/80">{service.heroSubtitle}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="btn btn-primary"
                aria-label={`تماس مستقیم با شماره ${CONTACT.phoneDisplay}`}
                title="تماس مستقیم با کارشناس"
              >
                <PhoneCall strokeWidth={1.75} aria-hidden="true" />
                تماس مستقیم
              </a>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label={CONTACT.whatsappLabel}
                title={CONTACT.whatsappLabel}
              >
                <MessageCircle strokeWidth={1.75} aria-hidden="true" />
                {CONTACT.whatsappLabel}
              </a>
              <a
                href="/contact"
                className="btn btn-secondary"
                title="درخواست مشاوره کارشناسی"
              >
                <ClipboardCheck strokeWidth={1.75} aria-hidden="true" />
                درخواست مشاوره
              </a>
            </div>
          </div>

          <div className="ui-card ui-card-dark overflow-hidden p-3">
            <div className="media-frame media-ratio">
              <Image
                src={service.coverImage}
                alt={service.coverImageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="media-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
