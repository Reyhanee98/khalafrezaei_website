export const SITE_URL = "https://khalafrezaei.ir" as const;

export const SITE = {
  name: "محمد خلف رضایی",
  title: "محمد خلف رضایی | کارشناس رسمی دادگستری",
  description:
    "ارزیابی رسمی املاک، ساختمان و دارایی‌ها با گزارش معتبر قابل ارائه به مراجع قضایی، بانک‌ها و سازمان‌های دولتی.",
  locale: "fa_IR",
  language: "fa",
  url: SITE_URL,
  licenseNumber: "۱۱-۰۱-۴۱-۸۱۹۸",
  specialty: "راه، ساختمان و نقشه‌برداری",
  jobTitle: "کارشناس رسمی دادگستری",
  areaServed: "ایران",
  portrait: "/images/portrait.jpg",
  logo: "/images/association-logo.jpg",
  ogImage: "/images/portrait.jpg",
} as const;

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
