import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f0e4",
    theme_color: "#e8590c",
    icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }],
  };
}
