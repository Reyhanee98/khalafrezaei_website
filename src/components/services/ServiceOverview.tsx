import type { Service } from "@/data/services";

type ServiceOverviewProps = {
  service: Service;
};

export default function ServiceOverview({ service }: ServiceOverviewProps) {
  return (
    <section className="section section-light section-accent-line">
      <div className="section-inner">
        <header className="section-header">
          <p className="section-label">معرفی خدمت</p>
          <h2 className="section-title">{service.title}</h2>
          <div className="section-rule" />
        </header>
        <div className="mt-6 max-w-4xl space-y-5">
          <p className="text-base leading-9 text-slate sm:text-lg">
            {service.introduction}
          </p>
          <p className="text-base leading-9 text-slate sm:text-lg">
            {service.fullDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
