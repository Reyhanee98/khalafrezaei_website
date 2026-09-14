import { CONTACT } from "@/lib/contact";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function ServiceContactCta() {
  return (
    <section className="section section-dark section-accent-line">
      <div className="section-inner">
        <header className="section-header">
          <p className="section-label">تماس</p>
          <h2 className="section-title">ارتباط مستقیم با کارشناس</h2>
          <div className="section-rule" />
          <p className="section-lead">
            برای هماهنگی بازدید، ارسال مدارک یا دریافت راهنمایی اولیه در تماس
            باشید.
          </p>
        </header>

        <div className="section-grid grid gap-5 sm:grid-cols-3">
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="ui-card ui-card-dark ui-card-pad block"
            aria-label={`تماس تلفنی با شماره ${CONTACT.phoneDisplay}`}
            title="تماس تلفنی با کارشناس"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-gold">
              <Phone className="h-4 w-4" strokeWidth={1.75} />
              تلفن
            </div>
            <p
              className="mt-4 text-2xl font-bold tracking-wide text-mist"
              dir="ltr"
            >
              {CONTACT.phoneDisplay}
            </p>
          </a>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ui-card ui-card-dark ui-card-pad block"
            aria-label={CONTACT.whatsappLabel}
            title={CONTACT.whatsappLabel}
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-gold">
              <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
              واتساپ
            </div>
            <p className="mt-4 text-lg font-bold leading-8 text-mist">
              {CONTACT.whatsappLabel}
            </p>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="ui-card ui-card-dark ui-card-pad block"
            aria-label={`ارسال ایمیل به ${CONTACT.email}`}
            title="ارسال ایمیل به کارشناس"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-gold">
              <Mail className="h-4 w-4" strokeWidth={1.75} />
              ایمیل
            </div>
            <p
              className="mt-4 break-all text-lg font-bold text-mist"
              dir="ltr"
            >
              {CONTACT.email}
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
