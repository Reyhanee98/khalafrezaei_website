import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "راهنمای ارزیابی رسمی املاک",
    excerpt:
      "آشنایی با اصول ارزیابی رسمی املاک و کاربرد گزارش کارشناسی در معاملات و دعاوی.",
    image: "/images/articles/property-valuation-guide.jpg",
    alt: "تصویر شاخص مقاله راهنمای ارزیابی رسمی املاک",
    href: "/services/official-property-valuation",
  },
  {
    title: "گزارش کارشناس دادگستری چیست؟",
    excerpt:
      "تفاوت گزارش کارشناسی رسمی با اظهارنظرهای غیررسمی و اهمیت استنادپذیری آن.",
    image: "/images/articles/court-expert-report.jpg",
    alt: "تصویر شاخص مقاله گزارش کارشناس دادگستری",
    href: "/services",
  },
  {
    title: "برآورد خسارات ساختمانی",
    excerpt:
      "نگاهی به فرآیند کارشناسی خسارات ساختمانی و نکات فنی مهم در تهیه گزارش.",
    image: "/images/articles/construction-damage.jpg",
    alt: "تصویر شاخص مقاله برآورد خسارات ساختمانی",
    href: "/contact",
  },
];

export default function Articles() {
  return (
    <section
      id="articles"
      aria-labelledby="articles-heading"
      className="section section-light section-accent-line"
    >
      <div className="section-inner">
        <header className="section-header">
          <p className="section-label">مقالات</p>
          <h1 id="articles-heading" className="section-title">
            مقالات تخصصی
          </h1>
          <div className="section-rule" />
          <p className="section-lead">
            مطالبی برای آشنایی بهتر با فرآیند کارشناسی رسمی و ارزیابی دارایی‌ها.
          </p>
        </header>

        <div className="section-grid grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="ui-card ui-card-light group flex h-full flex-col overflow-hidden"
            >
              <div className="media-frame media-ratio !rounded-none !rounded-t-[var(--radius-lg)]">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  loading="lazy"
                  className="img-zoom object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="ui-card-pad flex flex-1 flex-col">
                <h3 className="card-title text-navy">{article.title}</h3>
                <p className="card-text flex-1 text-slate">{article.excerpt}</p>
                <Link
                  href={article.href}
                  className="btn btn-ghost btn-compact mt-5 self-start !border-gold/30 !text-gold hover:!text-navy"
                  title={`مطالعه بیشتر: ${article.title}`}
                >
                  مطالعه بیشتر
                  <ArrowLeft strokeWidth={1.75} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
