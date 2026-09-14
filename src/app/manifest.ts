import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.title,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0B1F16",
    theme_color: "#0F3D2E",
    lang: SITE.language,
    dir: "rtl",
    icons: [
      {
        src: SITE.logo,
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: SITE.logo,
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
