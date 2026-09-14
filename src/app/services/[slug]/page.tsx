import ServicePage from "@/components/services/ServicePage";
import JsonLd from "@/components/seo/JsonLd";
import { buildServicePageGraph } from "@/lib/schema";
import {
  buildServiceMetadata,
  getServiceBySlug,
  getServiceSlugs,
} from "@/lib/services";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ServiceRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "خدمت یافت نشد",
      robots: { index: false, follow: false },
    };
  }

  return buildServiceMetadata(service);
}

export default async function ServiceSlugPage({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd data={buildServicePageGraph(service)} />
      <ServicePage service={service} />
    </>
  );
}

export const dynamicParams = false;
