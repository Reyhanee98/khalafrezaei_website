import Services from "@/components/home/Services";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { SITE } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "صلاحیت‌های کارشناسی | محمد خلف رضایی",
  description:
    "محورهای اصلی صلاحیت کارشناسی شامل ارزیابی اراضی و ابنیه، خسارات ساختمانی، اجاره‌بها، هزینه ساخت و محاسبات مهندسی.",
  alternates: { canonical: "/qualifications" },
  openGraph: {
    title: "صلاحیت‌های کارشناسی | محمد خلف رضایی",
    description: "محورهای اصلی صلاحیت حرفه‌ای کارشناس رسمی دادگستری.",
    url: "/qualifications",
    type: "website",
    locale: SITE.locale,
  },
};

export default function QualificationsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Services asPage />
      </main>
      <Footer />
    </>
  );
}
