import {
  ArrowLeft,
  ArrowDown,
  ClipboardCheck,
  FileSearch,
  FileText,
  MapPin,
  Send,
} from "lucide-react";

const steps = [
  {
    title: "ثبت درخواست",
    description: "ارسال درخواست کارشناسی و دریافت راهنمایی اولیه",
    icon: Send,
  },
  {
    title: "بررسی مدارک",
    description: "مطالعه اسناد، سوابق و اطلاعات اولیه پرونده",
    icon: FileSearch,
  },
  {
    title: "بازدید میدانی",
    description: "بازدید از ملک یا پروژه و برداشت اطلاعات فنی",
    icon: MapPin,
  },
  {
    title: "ارزیابی رسمی",
    description: "تحلیل فنی و تعیین ارزش یا موضوع کارشناسی",
    icon: ClipboardCheck,
  },
  {
    title: "گزارش نهایی",
    description: "تهیه گزارش رسمی قابل ارائه به مراجع ذی‌صلاح",
    icon: FileText,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section section-dark section-accent-line"
    >
      <div className="section-inner">
        <header className="section-header">
          <p className="section-label">فرآیند همکاری</p>
          <h2 id="process-heading" className="section-title">
            مسیر شفاف از درخواست تا گزارش رسمی
          </h2>
          <div className="section-rule" />
        </header>

        <ol className="section-grid grid gap-3 md:grid-cols-5 md:gap-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative flex flex-col items-center">
                <div className="ui-card ui-card-dark flex h-full w-full flex-row items-center gap-3 px-4 py-4 md:flex-col md:text-center">
                  <div className="icon-box !h-11 !w-11 !shrink-0 !rounded-full">
                    <Icon strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="section-label !text-[0.65rem]">مرحله {index + 1}</p>
                    <h3 className="mt-1 text-base font-bold text-mist">{step.title}</h3>
                    <p className="mt-1 text-xs leading-6 text-mist/65">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 ? (
                  <>
                    <ArrowDown className="my-1 h-5 w-5 text-gold md:hidden" aria-hidden="true" />
                    <ArrowLeft className="absolute -end-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-gold md:block" aria-hidden="true" />
                  </>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
