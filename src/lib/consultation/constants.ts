import type {
  ConsultationServiceOption,
  PropertyTypeOption,
} from "@/lib/consultation/types";

export const SERVICE_OPTIONS: {
  value: ConsultationServiceOption;
  label: string;
}[] = [
  {
    value: "official-property-valuation",
    label: "ارزیابی رسمی املاک",
  },
  {
    value: "factory-appraisal",
    label: "ارزیابی کارخانه",
  },
  {
    value: "surveying",
    label: "نقشه‌برداری",
  },
  {
    value: "immigration-valuation",
    label: "ارزیابی برای مهاجرت",
  },
  {
    value: "mortgage-appraisal",
    label: "کارشناسی وثیقه",
  },
  {
    value: "goodwill-appraisal",
    label: "کارشناسی سرقفلی",
  },
  {
    value: "other",
    label: "سایر / نیاز به راهنمایی",
  },
];

export const PROPERTY_TYPE_OPTIONS: {
  value: PropertyTypeOption;
  label: string;
}[] = [
  { value: "apartment", label: "آپارتمان" },
  { value: "land", label: "زمین" },
  { value: "villa", label: "ویلا / ساختمان مستقل" },
  { value: "commercial", label: "تجاری / مغازه" },
  { value: "industrial", label: "صنعتی / سوله" },
  { value: "mixed", label: "کاربری مختلط" },
  { value: "other", label: "سایر" },
];

export const CONSULTATION_FILE_RULES = {
  maxFiles: 5,
  maxFileSizeBytes: 5 * 1024 * 1024,
  accept: ".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx",
  acceptedMimeTypes: [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/webp",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
} as const;
