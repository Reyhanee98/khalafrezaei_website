import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-b-2 border-gold bg-navy-deep py-20 text-mist sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-gold">تماس</p>
          <h2 className="mt-3 text-3xl font-bold text-gold sm:text-4xl">
            درخواست مشاوره تخصصی
          </h2>
          <div className="mt-5 h-0.5 w-16 bg-gold" />
          <p className="mt-4 text-base leading-8 text-mist/80 sm:text-lg">
            برای هماهنگی کارشناسی، ارزیابی یا مشاوره فنی از طریق تلفن یا ایمیل
            با اینجانب در ارتباط باشید.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <a
            href="tel:+989124129363"
            className="card-gold-glow border border-gold bg-navy p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-gold">
              <Phone className="h-4 w-4" strokeWidth={1.75} />
              تلفن
            </div>
            <p
              className="mt-4 text-2xl font-bold tracking-wide text-mist sm:text-3xl"
              dir="ltr"
            >
              ۰۹۱۲۴۱۲۹۳۶۳
            </p>
            <p className="mt-2 text-sm text-mist/60">برای تماس کلیک کنید</p>
          </a>

          <a
            href="mailto:mohammad.khalafrezae@gmail.com"
            className="card-gold-glow border border-gold bg-navy p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-gold">
              <Mail className="h-4 w-4" strokeWidth={1.75} />
              ایمیل
            </div>
            <p
              className="mt-4 break-all text-lg font-bold text-mist sm:text-xl"
              dir="ltr"
            >
              mohammad.khalafrezae@gmail.com
            </p>
            <p className="mt-2 text-sm text-mist/60">ارسال پیام الکترونیکی</p>
          </a>
        </div>
      </div>
    </section>
  );
}
