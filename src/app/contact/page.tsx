import ConsultationRequestSection from "@/components/consultation/ConsultationRequestSection";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import JsonLd from "@/components/seo/JsonLd";
import { buildContactPageGraph } from "@/lib/schema";
import { SITE } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تماس با کارشناس رسمی دادگستری | محمد خلف رضایی",
  description:
    "ثبت درخواست مشاوره و کارشناسی رسمی، ارسال مدارک اولیه و ارتباط مستقیم با محمد خلف رضایی.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "تماس با کارشناس رسمی دادگستری | محمد خلف رضایی",
    description:
      "ثبت درخواست مشاوره و کارشناسی رسمی، ارسال مدارک اولیه و ارتباط مستقیم با محمد خلف رضایی.",
    url: "/contact",
    type: "website",
    locale: SITE.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: "تماس با کارشناس رسمی دادگستری",
    description:
      "ثبت درخواست مشاوره و کارشناسی رسمی، ارسال مدارک اولیه و ارتباط مستقیم با محمد خلف رضایی.",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={buildContactPageGraph()} />
      <Header />
      <main className="flex-1">
        <ConsultationRequestSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
