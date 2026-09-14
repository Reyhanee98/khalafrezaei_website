type ServiceListSectionProps = {
  label: string;
  title: string;
  intro: string;
  items: string[];
  tone?: "light" | "dark";
};

export default function ServiceListSection({
  label,
  title,
  intro,
  items,
  tone = "light",
}: ServiceListSectionProps) {
  const sectionTone =
    tone === "dark" ? "section-dark" : "section-light";
  const cardTone =
    tone === "dark" ? "ui-card-dark text-mist" : "ui-card-light text-navy";
  const introTone =
    tone === "dark" ? "section-lead !text-mist/75" : "section-lead";

  return (
    <section className={`section ${sectionTone} section-accent-line`}>
      <div className="section-inner">
        <header className="section-header">
          <p className="section-label">{label}</p>
          <h2 className="section-title">{title}</h2>
          <div className="section-rule" />
          <p className={introTone}>{intro}</p>
        </header>

        <ul className="section-grid grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className={`ui-card ${cardTone} ui-card-pad text-sm font-medium leading-8`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
