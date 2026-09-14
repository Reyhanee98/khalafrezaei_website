import ServiceCard from "@/components/home/ServiceCard";
import { servicePreviewItems } from "@/data/services-preview";

export default function ServicesPreview() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section section-dark section-accent-line"
    >
      <div className="section-inner">
        <header className="section-header">
          <p className="section-label">حوزه فعالیت</p>
          <h2 id="services-heading" className="section-title">
            خدمات تخصصی
          </h2>
          <div className="section-rule" />
          <p className="section-lead">
            از ارزیابی املاک و سرقفلی تا کارشناسی وثیقه و نیازهای مهاجرتی؛ هر
            خدمت متناسب با هدف پرونده و مرجع دریافت‌کننده گزارش تعریف می‌شود.
          </p>
        </header>

        <div className="section-grid grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {servicePreviewItems.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
