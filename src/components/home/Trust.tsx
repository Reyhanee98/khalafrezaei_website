import {
  BadgeCheck,
  FileCheck2,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import TrustCard from "@/components/home/TrustCard";

const trustItems = [
  {
    title: "عضو کانون کارشناسان رسمی دادگستری",
    icon: BadgeCheck,
  },
  {
    title: "قابلیت استناد در پرونده‌های بانکی و ثبتی",
    icon: Landmark,
  },
  {
    title: "استقلال نظر و بی‌طرفی کارشناسی",
    icon: ShieldCheck,
  },
  {
    title: "هماهنگی شفاف از درخواست تا تحویل گزارش",
    icon: FileCheck2,
  },
];

export default function Trust() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="section section-light section-accent-line !py-16 sm:!py-20"
    >
      <div className="section-inner">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-start">
          <div className="media-frame relative h-20 w-20 shrink-0 border border-gold/40 bg-white shadow-sm sm:h-24 sm:w-24">
            <Image
              src="/images/association-logo.jpg"
              alt="لوگوی رسمی کانون کارشناسان رسمی دادگستری"
              fill
              loading="lazy"
              className="object-contain p-1.5"
              sizes="96px"
            />
          </div>
          <header className="section-header">
            <p className="section-label">اعتبار حرفه‌ای</p>
            <h2 id="trust-heading" className="section-title">
              ضمانت‌های حرفه‌ای همکاری با شما
            </h2>
            <div className="section-rule mx-auto sm:mx-0" />
          </header>
        </div>

        <div className="section-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <TrustCard key={item.title} title={item.title} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
