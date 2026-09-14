export type ServiceIconName =
  | "Home"
  | "Factory"
  | "Building2"
  | "Map"
  | "FileBadge"
  | "Globe2";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type RelatedArticle = {
  title: string;
  excerpt: string;
  href: string;
  image: string;
  imageAlt: string;
};

export type ServiceSeo = {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  openGraphImage?: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  introduction: string;
  fullDescription: string;
  whyItMatters: string[];
  whenNeeded: string[];
  whenNeededIntro: string;
  documents: string[];
  documentsIntro: string;
  coveredAssets: string[];
  coveredAssetsIntro: string;
  heroTitle: string;
  heroSubtitle: string;
  icon: ServiceIconName;
  coverImage: string;
  coverImageAlt: string;
  benefits: string[];
  process: ServiceProcessStep[];
  faq: ServiceFaq[];
  relatedServices: string[];
  relatedArticles: RelatedArticle[];
  seo: ServiceSeo;
};
