import { CONTACT } from "@/lib/contact";
import { SITE } from "@/lib/site";
import {
  BadgeCheck,
  ClipboardCheck,
  ExternalLink,
  MessageCircle,
  PhoneCall,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-deep">
      <div className="hero-seal-gradient absolute inset-0" aria-hidden="true" />
      <div className="hero-grid absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-9 sm:px-8 sm:py-12 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-4 lg:grid-cols-[8rem_minmax(0,1fr)]">
              <div className="rounded-[var(--radius-lg)] border border-gold/60 bg-mist p-1.5 shadow-[0_14px_34px_rgba(0,0,0,0.32)]">
                <Image
                  src={SITE.portrait}
                  alt={`پرتره حرفه‌ای ${SITE.name}`}
                  width={720}
                  height={900}
                  priority
                  className="h-auto w-full rounded-[calc(var(--radius-lg)-0.25rem)] object-contain"
                />
              </div>
              <div className="rounded-[var(--radius-lg)] border border-gold/60 bg-white p-1.5 shadow-[0_14px_34px_rgba(0,0,0,0.32)]">
                <Image
                  src="/images/business-card.jpg"
                  alt={`کارت حرفه‌ای ${SITE.name}`}
                  width={1063}
                  height={709}
                  priority
                  quality={100}
                  className="h-auto w-full rounded-[calc(var(--radius-lg)-0.25rem)] object-contain"
                  sizes="(max-width: 640px) 68vw, (max-width: 1024px) 60vw, 360px"
                />
              </div>
            </div>
            <p className="mt-3 text-center text-xs leading-6 text-mist/60">
              هویت و مجوز حرفه‌ای
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded border border-gold/50 bg-navy/60 px-3 py-1 text-sm font-semibold text-gold">
              <Scale className="h-4 w-4" strokeWidth={1.75} />
              {SITE.jobTitle}
            </div>
            <p className="mt-4 text-xl font-bold text-mist sm:text-2xl">{SITE.name}</p>
            <p className="mt-1 text-sm text-mist/70">
              {SITE.specialty} · شماره پروانه {SITE.licenseNumber}
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-snug text-mist sm:text-4xl lg:text-[2.55rem]">
              ارزیابی رسمی املاک، ساختمان و دارایی‌ها
              <span className="mt-2 block text-lg font-semibold leading-8 text-gold sm:text-xl">
                گزارش دقیق و معتبر برای مراجع قضایی، بانک‌ها و سازمان‌ها
              </span>
            </h1>
            <div className="section-rule !mt-4" />
            <p className="mt-4 max-w-xl text-sm leading-7 text-mist/75 sm:text-base">
              برای ارزیابی، بازدید و دریافت گزارش رسمی، درخواست خود را ثبت کنید یا مستقیماً تماس بگیرید.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-mist/75">
              <span className="inline-flex items-center gap-1.5 rounded border border-gold/30 bg-navy/50 px-3 py-1.5">
                <BadgeCheck className="h-4 w-4 text-gold" /> بیش از ۳۰ سال تجربه
              </span>
              <span className="inline-flex items-center gap-1.5 rounded border border-gold/30 bg-navy/50 px-3 py-1.5">
                <BadgeCheck className="h-4 w-4 text-gold" /> گزارش رسمی و قابل استناد
              </span>
            </div>
            <a
              href="https://karshenasan.ir/page-Expert/fa/0/?expretcode=208198"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 flex max-w-xl items-center gap-3 rounded-[var(--radius-md)] border border-gold/35 bg-navy/45 px-3.5 py-2.5 text-start transition-all hover:border-gold/65 hover:bg-navy/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
              aria-label="مشاهده پروفایل رسمی محمد خلف رضایی در سامانه کانون کارشناسان رسمی دادگستری استان تهران؛ باز شدن در پنجره جدید"
            >
              <ShieldCheck
                className="h-5 w-5 shrink-0 text-gold"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold leading-6 text-mist sm:text-sm">
                  مشاهده پروفایل در سامانه کانون کارشناسان رسمی دادگستری
                </span>
                <span className="block text-[0.7rem] leading-5 text-mist/60 sm:text-xs">
                  مشاهده اطلاعات و سوابق رسمی
                </span>
              </span>
              <ExternalLink
                className="h-4 w-4 shrink-0 text-gold/70 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Link href="/contact#consultation-request" className="btn btn-primary">
            <ClipboardCheck strokeWidth={1.75} /> ثبت درخواست
          </Link>
          <a href={`tel:${CONTACT.phoneTel}`} className="btn btn-secondary">
            <PhoneCall strokeWidth={1.75} /> تماس: {CONTACT.phoneDisplay}
          </a>
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
            <MessageCircle strokeWidth={1.75} /> واتساپ
          </a>
        </div>
      </div>
    </section>
  );
}
