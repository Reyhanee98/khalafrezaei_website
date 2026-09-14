type ServiceContentSectionProps = {
  label: string;
  title: string;
  paragraphs: string[];
  tone?: "light" | "dark";
};

export default function ServiceContentSection({
  label,
  title,
  paragraphs,
  tone = "light",
}: ServiceContentSectionProps) {
  const sectionTone =
    tone === "dark" ? "section-dark" : "section-light";

  return (
    <section className={`section ${sectionTone} section-accent-line`}>
      <div className="section-inner">
        <header className="section-header">
          <p className="section-label">{label}</p>
          <h2 className="section-title">{title}</h2>
          <div className="section-rule" />
        </header>
        <div className="mt-8 max-w-4xl space-y-5">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className={
                tone === "dark"
                  ? "text-base leading-9 text-mist/80 sm:text-lg"
                  : "text-base leading-9 text-slate sm:text-lg"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
