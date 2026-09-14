import ServicesIndex from "@/components/services/ServicesIndex";
import JsonLd from "@/components/seo/JsonLd";
import { buildServicesIndexGraph } from "@/lib/schema";
import { getAllServices } from "@/lib/services";
import { SITE } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدمات کارشناسی رسمی | محمد خلف رضایی",
  description:
    "فهرست خدمات کارشناسی رسمی شامل ارزیابی املاک، کارخانه، نقشه‌برداری، سرقفلی، وثیقه و ارزیابی مهاجرتی.",
  keywords: [
    "خدمات کارشناس رسمی دادگستری",
    "ارزیابی رسمی املاک",
    "کارشناسی سرقفلی",
    "نقشه برداری",
    "کارشناسی وثیقه",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "خدمات کارشناسی رسمی | محمد خلف رضایی",
    description:
      "فهرست خدمات کارشناسی رسمی شامل ارزیابی املاک، کارخانه، نقشه‌برداری، سرقفلی، وثیقه و ارزیابی مهاجرتی.",
    url: "/services",
    type: "website",
    locale: SITE.locale,
    images: [
      {
        url: SITE.ogImage,
        alt: `پرتره حرفه‌ای ${SITE.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "خدمات کارشناسی رسمی | محمد خلف رضایی",
    description:
      "فهرست خدمات کارشناسی رسمی شامل ارزیابی املاک، کارخانه، نقشه‌برداری، سرقفلی، وثیقه و ارزیابی مهاجرتی.",
    images: [SITE.ogImage],
  },
};

export default function ServicesPage() {
  const services = getAllServices();
  return (
    <>
      <JsonLd data={buildServicesIndexGraph()} />
      <ServicesIndex services={services} />
    </>
  );
}
