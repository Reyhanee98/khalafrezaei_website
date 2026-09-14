import About from "@/components/home/About";
import Certificates from "@/components/home/Certificates";
import Contact from "@/components/home/Contact";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import ServicesPreview from "@/components/home/ServicesPreview";
import Trust from "@/components/home/Trust";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import JsonLd from "@/components/seo/JsonLd";
import { buildHomePageGraph } from "@/lib/schema";
import { SITE } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: "/",
    type: "website",
    locale: SITE.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={buildHomePageGraph()} />
      <Header />
      <main className="flex-1">
        <Hero />
        <Trust />
        <ServicesPreview />
        <Certificates />
        <Process />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
