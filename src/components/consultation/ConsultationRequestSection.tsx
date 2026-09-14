import ConsultationRequestForm from "@/components/consultation/ConsultationRequestForm";

export default function ConsultationRequestSection() {
  return (
    <section
      id="consultation-request"
      aria-labelledby="consultation-request-heading"
      className="section section-light section-accent-line"
    >
      <div className="section-inner">
        <header className="section-header">
          <p className="section-label">درخواست مشاوره</p>
          <h1 id="consultation-request-heading" className="section-title">
            ثبت درخواست کارشناسی
          </h1>
          <div className="section-rule" />
          <p className="section-lead">
            برای ارزیابی رسمی، نقشه‌برداری یا سایر خدمات کارشناسی، مشخصات خود و
            موضوع درخواست را ارسال کنید.
          </p>
        </header>

        <div className="ui-card ui-card-light ui-card-pad mt-8">
          <ConsultationRequestForm />
        </div>
      </div>
    </section>
  );
}
