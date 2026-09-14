import type { ServiceProcessStep } from "@/data/services";
import { ClipboardCheck } from "lucide-react";

type ServiceProcessProps = {
  steps: ServiceProcessStep[];
};

export default function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <section className="section section-light section-accent-line">
      <div className="section-inner">
        <header className="section-header">
          <p className="section-label">فرآیند انجام کار</p>
          <h2 className="section-title">مراحل ارائه خدمت</h2>
          <div className="section-rule" />
        </header>

        <ol className="section-grid space-y-0">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="icon-box !h-14 !w-14 !rounded-full border-2">
                  <ClipboardCheck strokeWidth={1.75} />
                </div>
                {index < steps.length - 1 ? (
                  <div className="mt-2 w-px flex-1 bg-gradient-to-b from-gold to-gold/20" />
                ) : null}
              </div>
              <div className="ui-card ui-card-light ui-card-pad flex-1 !shadow-sm">
                <p className="section-label !text-xs">مرحله {index + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-navy">{step.title}</h3>
                <p className="card-text text-slate">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
