import { CONTACT } from "@/lib/contact";
import { ClipboardCheck, MessageCircle, PhoneCall } from "lucide-react";

type ServiceCtaProps = {
  title: string;
};

export default function ServiceCta({ title }: ServiceCtaProps) {
  return (
    <section className="section section-light section-accent-line">
      <div className="section-inner">
        <div className="ui-card ui-card-dark ui-card-pad relative overflow-hidden">
          <div
            className="pointer-events-none absolute -end-10 -top-10 h-40 w-40 rounded-full bg-gold/15 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative max-w-3xl">
            <p className="section-label">اقدام بعدی</p>
            <h2 className="section-title !text-mist">
              آماده‌اید برای شروع «{title}»؟
            </h2>
            <div className="section-rule" />
            <p className="section-lead !text-mist/75">
              برای هماهنگی بازدید، بررسی مدارک یا دریافت راهنمایی اولیه می‌توانید
              تماس بگیرید، در واتساپ پیام بفرستید یا درخواست مشاوره ثبت کنید.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="btn btn-primary"
                aria-label={`تماس مستقیم با شماره ${CONTACT.phoneDisplay}`}
                title="تماس مستقیم با کارشناس"
              >
                <PhoneCall strokeWidth={1.75} aria-hidden="true" />
                تماس مستقیم
              </a>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label={CONTACT.whatsappLabel}
                title={CONTACT.whatsappLabel}
              >
                <MessageCircle strokeWidth={1.75} aria-hidden="true" />
                {CONTACT.whatsappLabel}
              </a>
              <a
                href="/contact"
                className="btn btn-secondary"
                title="درخواست مشاوره کارشناسی"
              >
                <ClipboardCheck strokeWidth={1.75} aria-hidden="true" />
                درخواست مشاوره
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
