import {
  services,
  type Service,
  type ServiceIconName,
} from "@/data/services";
import { SITE } from "@/lib/site";
import {
  Building2,
  Factory,
  FileBadge,
  Globe2,
  Home,
  Map,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";

const iconMap: Record<ServiceIconName, LucideIcon> = {
  Home,
  Factory,
  Building2,
  Map,
  FileBadge,
  Globe2,
};

export function getAllServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((item): item is Service => Boolean(item));
}

export function getServiceIcon(name: ServiceIconName): LucideIcon {
  return iconMap[name];
}

export function buildServiceMetadata(service: Service): Metadata {
  const url = service.seo.canonical;
  const image = service.seo.openGraphImage ?? service.coverImage;

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url,
      type: "website",
      locale: SITE.locale,
      siteName: SITE.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: service.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seo.title,
      description: service.seo.description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
