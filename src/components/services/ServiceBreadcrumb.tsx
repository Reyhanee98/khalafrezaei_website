import { ChevronLeft } from "lucide-react";
import Link from "next/link";

type ServiceBreadcrumbProps = {
  title: string;
};

export default function ServiceBreadcrumb({ title }: ServiceBreadcrumbProps) {
  return (
    <nav aria-label="مسیر صفحه" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-mist/70">
        <li>
          <Link href="/" className="transition-colors hover:text-gold">
            خانه
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
        </li>
        <li>
          <Link href="/services" className="transition-colors hover:text-gold">
            خدمات
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
        </li>
        <li className="font-semibold text-gold" aria-current="page">
          {title}
        </li>
      </ol>
    </nav>
  );
}
