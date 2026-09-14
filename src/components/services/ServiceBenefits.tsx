import { CheckCircle2 } from "lucide-react";

type ServiceBenefitsProps = {
  benefits: string[];
};

export default function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  return (
    <section className="section section-light section-accent-line">
      <div className="section-inner">
        <header className="section-header">
          <p className="section-label">مزایای کارشناسی رسمی</p>
          <h2 className="section-title">
            مزایای بهره‌گیری از کارشناس رسمی دادگستری
          </h2>
          <div className="section-rule" />
        </header>

        <ul className="section-grid grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="ui-card ui-card-light ui-card-pad flex items-start gap-3"
            >
              <div className="icon-box">
                <CheckCircle2 strokeWidth={1.75} />
              </div>
              <p className="pt-2 text-sm font-semibold leading-7 text-navy sm:text-base">
                {benefit}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
