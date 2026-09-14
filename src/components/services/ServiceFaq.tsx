import type { ServiceFaq } from "@/data/services";

type ServiceFaqProps = {
  items: ServiceFaq[];
};

export default function ServiceFaqSection({ items }: ServiceFaqProps) {
  return (
    <section className="section section-dark section-accent-line">
      <div className="section-inner">
        <header className="section-header">
          <p className="section-label">سؤالات متداول</p>
          <h2 className="section-title">پاسخ به پرسش‌های رایج</h2>
          <div className="section-rule" />
        </header>

        <div className="section-grid space-y-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="ui-card ui-card-dark ui-card-pad group"
            >
              <summary className="cursor-pointer list-none text-base font-bold text-mist marker:content-none">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <span className="text-gold transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="card-text text-mist/75">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
