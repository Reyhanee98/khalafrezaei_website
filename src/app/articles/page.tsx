import Articles from "@/components/home/Articles";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { SITE } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مقالات تخصصی کارشناسی رسمی | محمد خلف رضایی",
  description:
    "مطالب تخصصی درباره ارزیابی رسمی املاک، گزارش کارشناسی دادگستری و خسارات ساختمانی.",
  alternates: {
    canonical: "/articles",
  },
  openGraph: {
    title: "مقالات تخصصی کارشناسی رسمی | محمد خلف رضایی",
    description:
      "مطالب تخصصی درباره ارزیابی رسمی املاک، گزارش کارشناسی دادگستری و خسارات ساختمانی.",
    url: "/articles",
    type: "website",
    locale: SITE.locale,
  },
};

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Articles />
      </main>
      <Footer />
    </>
  );
}
