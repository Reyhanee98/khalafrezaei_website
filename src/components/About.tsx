import { BadgeCheck, Scale } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="border-b-2 border-gold bg-mist py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div>
            <p className="text-sm font-semibold text-gold">درباره من</p>
            <h2 className="mt-3 text-3xl font-bold leading-snug text-navy sm:text-4xl">
              تخصص فنی قابل اعتماد برای امور حقوقی و مهندسی
            </h2>
            <div className="mt-5 h-0.5 w-16 bg-gold" />
          </div>

          <div className="space-y-6">
            <p className="text-base leading-8 text-slate sm:text-lg">
              اینجانب{" "}
              <span className="font-bold text-navy">محمد خلف رضائی زارع</span>،
              کارشناس رسمی دادگستری در رشته راه، ساختمان و نقشه‌برداری هستم.
              خدمات کارشناسی خود را با دقت، بی‌طرفی و استناد به موازین فنی و
              قانونی ارائه می‌دهم تا تصمیم‌گیری‌های حقوقی و تخصصی بر پایه
              گزارش‌های مستند و قابل اتکا انجام شود.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border-t border-gold/40 pt-4">
                <p className="flex items-center gap-2 text-xs font-semibold text-slate">
                  <Scale className="h-4 w-4 text-gold" strokeWidth={1.75} />
                  عنوان حرفه‌ای
                </p>
                <p className="mt-2 text-sm leading-7 text-navy sm:text-base">
                  کارشناس رسمی دادگستری (راه، ساختمان و نقشه‌برداری)
                </p>
              </div>

              <div className="border-t border-gold/40 pt-4">
                <p className="flex items-center gap-2 text-xs font-semibold text-slate">
                  <BadgeCheck className="h-4 w-4 text-gold" strokeWidth={1.75} />
                  شماره پروانه
                </p>
                <p className="mt-2 text-xl font-bold text-navy">
                  ۱۱-۰۱-۴۱-۸۱۹۸
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
