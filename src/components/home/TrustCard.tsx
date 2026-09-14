import { type LucideIcon } from "lucide-react";

type TrustCardProps = {
  title: string;
  icon: LucideIcon;
};

export default function TrustCard({ title, icon: Icon }: TrustCardProps) {
  return (
    <article className="ui-card ui-card-dark ui-card-pad flex items-start gap-3">
      <div className="icon-box">
        <Icon strokeWidth={1.75} />
      </div>
      <p className="pt-2 text-sm font-semibold leading-7 text-mist sm:text-base">
        {title}
      </p>
    </article>
  );
}
