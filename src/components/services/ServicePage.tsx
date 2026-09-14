import RelatedArticles from "@/components/services/RelatedArticles";
import RelatedServices from "@/components/services/RelatedServices";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceContactCta from "@/components/services/ServiceContactCta";
import ServiceContentSection from "@/components/services/ServiceContentSection";
import ServiceCta from "@/components/services/ServiceCta";
import ServiceFaqSection from "@/components/services/ServiceFaq";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceListSection from "@/components/services/ServiceListSection";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceProcess from "@/components/services/ServiceProcess";
import type { Service } from "@/data/services";
import { getRelatedServices } from "@/lib/services";

type ServicePageProps = {
  service: Service;
};

export default function ServicePage({ service }: ServicePageProps) {
  const relatedServices = getRelatedServices(service);

  return (
    <>
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <ServiceContentSection
        label="اهمیت خدمت"
        title="چرا این خدمت اهمیت دارد؟"
        paragraphs={service.whyItMatters}
      />
      <ServiceListSection
        label="موارد کاربرد"
        title="چه زمانی به این خدمت نیاز دارید؟"
        intro={service.whenNeededIntro}
        items={service.whenNeeded}
        tone="dark"
      />
      <ServiceProcess steps={service.process} />
      <ServiceListSection
        label="مدارک"
        title="مدارک مورد نیاز"
        intro={service.documentsIntro}
        items={service.documents}
      />
      <ServiceListSection
        label="دامنه پوشش"
        title="املاک و دارایی‌های قابل پوشش"
        intro={service.coveredAssetsIntro}
        items={service.coveredAssets}
        tone="dark"
      />
      <ServiceBenefits benefits={service.benefits} />
      <ServiceFaqSection items={service.faq} />
      <ServiceCta title={service.title} />
      <RelatedServices services={relatedServices} />
      <RelatedArticles articles={service.relatedArticles} />
      <ServiceContactCta />
    </>
  );
}
