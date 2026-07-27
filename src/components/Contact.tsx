import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-navy py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-white/60">تماس</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            درخواست مشاوره تخصصی
          </h2>
          <p className="mt-4 text-base leading-8 text-white/75 sm:text-lg">
            برای هماهنگی کارشناسی، ارزیابی یا مشاوره فنی از طریق تلفن یا ایمیل
            با اینجانب در ارتباط باشید.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <a
            href="tel:+989124129363"
            className="border border-white/15 bg-white/5 p-6 transition-colors hover:border-white/35 hover:bg-white/10 sm:p-8"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-white/60">
              <Phone className="h-4 w-4" strokeWidth={1.75} />
              تلفن
            </div>
            <p className="mt-4 text-2xl font-bold tracking-wide sm:text-3xl" dir="ltr">
              ۰۹۱۲۴۱۲۹۳۶۳
            </p>
            <p className="mt-2 text-sm text-white/55">برای تماس کلیک کنید</p>
          </a>

          <a
            href="mailto:mohammad.khalafrezae@gmail.com"
            className="border border-white/15 bg-white/5 p-6 transition-colors hover:border-white/35 hover:bg-white/10 sm:p-8"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-white/60">
              <Mail className="h-4 w-4" strokeWidth={1.75} />
              ایمیل
            </div>
            <p className="mt-4 break-all text-lg font-bold sm:text-xl" dir="ltr">
              mohammad.khalafrezae@gmail.com
            </p>
            <p className="mt-2 text-sm text-white/55">ارسال پیام الکترونیکی</p>
          </a>
        </div>
      </div>
    </section>
  );
}
