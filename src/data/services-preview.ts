import {
  Building2,
  Factory,
  FileBadge,
  Globe2,
  Home,
  Map,
  type LucideIcon,
} from "lucide-react";

export type ServicePreviewItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  href: string;
};

export const servicePreviewItems: ServicePreviewItem[] = [
  {
    title: "ارزیابی رسمی املاک",
    description:
      "تعیین ارزش روز املاک و مستغلات با گزارش رسمی قابل استناد در مراجع قانونی.",
    icon: Home,
    image: "/images/services/official-property-valuation.jpg",
    imageAlt: "ارزیابی رسمی املاک و مستغلات مسکونی",
    href: "/services/official-property-valuation",
  },
  {
    title: "ارزیابی کارخانه و ماشین‌آلات",
    description:
      "کارشناسی تخصصی دارایی‌های صنعتی، خطوط تولید و ماشین‌آلات کارخانه‌ای.",
    icon: Factory,
    image: "/images/services/industrial-factory.jpg",
    imageAlt: "ارزیابی کارخانه و ماشین‌آلات صنعتی",
    href: "/services/factory-appraisal",
  },
  {
    title: "کارشناسی سرقفلی",
    description:
      "برآورد دقیق حق سرقفلی و حقوق کسبی بر اساس ضوابط کارشناسی رسمی.",
    icon: Building2,
    image: "/images/services/commercial-building.jpg",
    imageAlt: "ساختمان تجاری مرتبط با کارشناسی سرقفلی",
    href: "/services/goodwill-appraisal",
  },
  {
    title: "نقشه برداری",
    description:
      "تهیه و کنترل نقشه‌های فنی و موقعیت‌یابی دقیق برای امور ثبتی و عمرانی.",
    icon: Map,
    image: "/images/services/surveying-engineer.jpg",
    imageAlt: "نقشه‌برداری و اسناد فنی مهندسی",
    href: "/services/surveying",
  },
  {
    title: "کارشناسی وثیقه",
    description:
      "ارزیابی وثایق ملکی و دارایی‌ها برای بانک‌ها، مؤسسات مالی و مراجع قضایی.",
    icon: FileBadge,
    image: "/images/services/legal-property-documents.jpg",
    imageAlt: "اسناد حقوقی مرتبط با کارشناسی وثیقه",
    href: "/services/mortgage-appraisal",
  },
  {
    title: "ارزیابی برای مهاجرت",
    description:
      "تهیه گزارش‌های ارزیابی دارایی برای پرونده‌های مهاجرتی و ارائه به مراجع خارجی.",
    icon: Globe2,
    image: "/images/services/luxury-apartment.jpg",
    imageAlt: "ارزیابی دارایی برای پرونده‌های مهاجرتی",
    href: "/services/immigration-valuation",
  },
];
