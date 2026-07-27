import { ArrowDown, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80')",
        }}
        role="img"
        aria-label="نمای معماری مدرن نماد تخصص مهندسی عمران"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/85 to-navy/50" />
      <div className="hero-grid absolute inset-0 opacity-70" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
        <p className="animate-fade-up delay-1 mb-4 text-sm font-semibold text-white/70">
          کارشناس رسمی دادگستری
        </p>

        <h1 className="animate-fade-up delay-2 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          محمد خلف رضائی زارع
        </h1>

        <p className="animate-fade-up delay-2 mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-xl">
          کارشناس رسمی دادگستری (راه، ساختمان و نقشه‌برداری)
        </p>

        <p className="animate-fade-up delay-3 mt-4 text-sm text-white/75 sm:text-base">
          شماره پروانه: ۱۱-۰۱-۴۱-۸۱۹۸
        </p>

        <div className="animate-fade-up delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-mist"
          >
            <Phone className="h-4 w-4" strokeWidth={2} />
            تماس با کارشناس
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            مشاهده خدمات
            <ArrowDown className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
