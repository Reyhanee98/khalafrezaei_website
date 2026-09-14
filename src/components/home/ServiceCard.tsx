import { ArrowLeft, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  href: string;
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  image,
  imageAlt,
  href,
}: ServiceCardProps) {
  return (
    <article className="ui-card ui-card-dark group flex h-full flex-col overflow-hidden">
      <div className="media-frame media-ratio">
        <Image
          src={image}
          alt={imageAlt}
          fill
          loading="lazy"
          className="img-zoom object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="media-overlay" />
        <div className="icon-box absolute bottom-3 start-3 bg-navy-deep/90 backdrop-blur-sm">
          <Icon strokeWidth={1.75} aria-hidden="true" />
        </div>
      </div>

      <div className="ui-card-pad flex flex-1 flex-col">
        <h3 className="card-title text-mist">{title}</h3>
        <p className="card-text flex-1 text-mist/75">{description}</p>
        <Link
          href={href}
          className="btn btn-ghost btn-compact mt-5 self-start"
          title={`مشاهده جزئیات ${title}`}
        >
          مشاهده جزئیات
          <ArrowLeft strokeWidth={1.75} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
