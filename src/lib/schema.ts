import type { Service } from "@/data/services";
import { CONTACT } from "@/lib/contact";
import { SITE, absoluteUrl } from "@/lib/site";
import { getAllServices } from "@/lib/services";

type JsonLd = Record<string, unknown>;

function contactPoint(): JsonLd {
  return {
    "@type": "ContactPoint",
    telephone: CONTACT.phoneTel,
    email: CONTACT.email,
    contactType: "customer service",
    availableLanguage: ["fa", "Persian"],
    areaServed: SITE.areaServed,
  };
}

export function buildPersonSchema(): JsonLd {
  return {
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: SITE.name,
    jobTitle: SITE.jobTitle,
    description: `${SITE.jobTitle} در رشته ${SITE.specialty}`,
    image: absoluteUrl(SITE.portrait),
    url: absoluteUrl("/"),
    email: CONTACT.email,
    telephone: CONTACT.phoneTel,
    identifier: SITE.licenseNumber,
    knowsAbout: [
      "ارزیابی رسمی املاک",
      "ارزیابی کارخانه",
      "نقشه‌برداری",
      "کارشناسی وثیقه",
      "کارشناسی سرقفلی",
      "ارزیابی برای مهاجرت",
    ],
  };
}

export function buildOrganizationSchema(): JsonLd {
  return {
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: SITE.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl(SITE.logo),
    image: absoluteUrl(SITE.portrait),
    email: CONTACT.email,
    telephone: CONTACT.phoneTel,
    description: SITE.description,
    contactPoint: contactPoint(),
  };
}

export function buildWebsiteSchema(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: SITE.title,
    url: absoluteUrl("/"),
    inLanguage: SITE.language,
    description: SITE.description,
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export function buildProfessionalServiceSchema(pagePath = "/"): JsonLd {
  const serviceCatalog = getAllServices().map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      url: absoluteUrl(`/services/${service.slug}`),
      description: service.shortDescription,
    },
  }));

  return {
    "@type": "ProfessionalService",
    "@id": absoluteUrl(`${pagePath}#professional-service`),
    name: `${SITE.name} — ${SITE.jobTitle}`,
    description: SITE.description,
    url: absoluteUrl(pagePath),
    image: absoluteUrl(SITE.portrait),
    telephone: CONTACT.phoneTel,
    email: CONTACT.email,
    areaServed: SITE.areaServed,
    priceRange: "$$",
    provider: { "@id": absoluteUrl("/#person") },
    contactPoint: contactPoint(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات کارشناسی رسمی",
      itemListElement: serviceCatalog,
    },
  };
}

export function buildHomePageGraph(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildWebsiteSchema(),
      buildOrganizationSchema(),
      buildPersonSchema(),
      buildProfessionalServiceSchema("/"),
    ],
  };
}

export function buildContactPageGraph(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildProfessionalServiceSchema("/contact"),
      {
        ...contactPoint(),
        "@id": absoluteUrl("/contact#contact-point"),
        name: "ارتباط با کارشناس رسمی دادگستری",
        url: absoluteUrl("/contact"),
      },
    ],
  };
}

export function buildServiceSchema(service: Service): JsonLd {
  return {
    "@type": "Service",
    "@id": absoluteUrl(`/services/${service.slug}#service`),
    name: service.title,
    description: service.seo.description,
    url: absoluteUrl(`/services/${service.slug}`),
    image: absoluteUrl(service.coverImage),
    serviceType: service.title,
    areaServed: SITE.areaServed,
    provider: {
      "@type": "Person",
      "@id": absoluteUrl("/#person"),
      name: SITE.name,
      jobTitle: SITE.jobTitle,
    },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/services/${service.slug}`),
      availability: "https://schema.org/InStock",
    },
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[],
): JsonLd {
  return {
    "@type": "BreadcrumbList",
    "@id": absoluteUrl(`${items[items.length - 1]?.path ?? "/"}#breadcrumb`),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqSchema(service: Service): JsonLd {
  return {
    "@type": "FAQPage",
    "@id": absoluteUrl(`/services/${service.slug}#faq`),
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildServicePageGraph(service: Service): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildServiceSchema(service),
      buildBreadcrumbSchema([
        { name: "خانه", path: "/" },
        { name: "خدمات", path: "/services" },
        { name: service.title, path: `/services/${service.slug}` },
      ]),
      buildFaqSchema(service),
    ],
  };
}

export function buildServicesIndexGraph(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbSchema([
        { name: "خانه", path: "/" },
        { name: "خدمات", path: "/services" },
      ]),
      {
        "@type": "CollectionPage",
        "@id": absoluteUrl("/services#collection"),
        name: "خدمات کارشناسی رسمی",
        url: absoluteUrl("/services"),
        description:
          "فهرست خدمات کارشناسی رسمی شامل ارزیابی املاک، کارخانه، نقشه‌برداری، سرقفلی، وثیقه و ارزیابی مهاجرتی.",
        isPartOf: { "@id": absoluteUrl("/#website") },
      },
    ],
  };
}
