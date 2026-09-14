import Image from "next/image";

const galleryItems = [
  {
    title: "ساختمان‌های مسکونی",
    image: "/images/gallery/residential-buildings.jpg",
    alt: "پروژه ارزیابی ساختمان‌های مسکونی",
  },
  {
    title: "ویلاهای لوکس",
    image: "/images/gallery/luxury-villas.jpg",
    alt: "ارزیابی ویلا و املاک لوکس",
  },
  {
    title: "کارخانه‌ها",
    image: "/images/gallery/factories.jpg",
    alt: "کارشناسی کارخانه و فضاهای صنعتی",
  },
  {
    title: "مراکز تجاری",
    image: "/images/gallery/commercial-centers.jpg",
    alt: "ارزیابی مراکز و املاک تجاری",
  },
  {
    title: "نقشه‌برداری",
    image: "/images/gallery/surveying.jpg",
    alt: "عملیات نقشه‌برداری و اندازه‌گیری",
  },
  {
    title: "اسناد مهندسی",
    image: "/images/gallery/engineering-documents.jpg",
    alt: "اسناد و مدارک فنی مهندسی",
  },
  {
    title: "کارگاه‌های ساختمانی",
    image: "/images/gallery/construction-sites.jpg",
    alt: "بازدید و کارشناسی کارگاه ساختمانی",
  },
  {
    title: "مشاوره تخصصی",
    image: "/images/gallery/office-consultation.jpg",
    alt: "جلسه مشاوره کارشناسی در دفتر",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="section section-light section-accent-line"
    >
      <div className="section-inner">
        <header className="section-header">
          <p className="section-label">نمونه‌کارها</p>
          <h2 id="gallery-heading" className="section-title">
            گالری پروژه‌ها
          </h2>
          <div className="section-rule" />
          <p className="section-lead">
            تصویری از انواع املاک، فضاهای صنعتی و موقعیت‌هایی که در فرآیند بازدید
            و کارشناسی با آن‌ها سروکار داریم.
          </p>
        </header>

        <div className="section-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="ui-card ui-card-dark group overflow-hidden"
            >
              <div className="media-frame media-ratio-portrait !rounded-lg">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  className="img-zoom object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="media-overlay" />
                <h3 className="absolute inset-x-0 bottom-0 p-4 text-base font-bold text-mist">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
