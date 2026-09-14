import type { RelatedArticle } from "@/data/services";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type RelatedArticlesProps = {
  articles: RelatedArticle[];
};

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="section section-light section-accent-line">
      <div className="section-inner">
        <header className="section-header">
          <p className="section-label">مقالات مرتبط</p>
          <h2 className="section-title">مطالعه بیشتر</h2>
          <div className="section-rule" />
        </header>

        <div className="section-grid grid gap-5 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.title}
              className="ui-card ui-card-light group flex h-full flex-col overflow-hidden"
            >
              <div className="media-frame media-ratio !rounded-none !rounded-t-[var(--radius-lg)]">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  loading="lazy"
                  className="img-zoom object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
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
