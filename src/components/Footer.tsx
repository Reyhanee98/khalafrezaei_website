import { Scale } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-soft bg-navy-deep py-10 text-white/65">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-start gap-3">
          <Scale
            className="mt-0.5 h-5 w-5 shrink-0 text-white/80"
            strokeWidth={1.75}
          />
          <div>
            <p className="font-bold text-white">محمد خلف رضائی زارع</p>
            <p className="mt-1 text-sm leading-7">
              کارشناس رسمی دادگستری (راه، ساختمان و نقشه‌برداری) · شماره پروانه:
              ۱۱-۰۱-۴۱-۸۱۹۸
            </p>
          </div>
        </div>
        <p className="text-sm">© {year} تمامی حقوق محفوظ است.</p>
      </div>
    </footer>
  );
}
