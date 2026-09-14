import { factoryAppraisal } from "@/data/services/factory-appraisal";
import { goodwillAppraisal } from "@/data/services/goodwill-appraisal";
import { immigrationValuation } from "@/data/services/immigration-valuation";
import { mortgageAppraisal } from "@/data/services/mortgage-appraisal";
import { officialPropertyValuation } from "@/data/services/official-property-valuation";
import { surveying } from "@/data/services/surveying";
import type { Service } from "@/data/services/types";

export type {
  RelatedArticle,
  Service,
  ServiceFaq,
  ServiceIconName,
  ServiceProcessStep,
  ServiceSeo,
} from "@/data/services/types";

export const services: Service[] = [
  officialPropertyValuation,
  factoryAppraisal,
  surveying,
  immigrationValuation,
  mortgageAppraisal,
  goodwillAppraisal,
];
