import type { MetadataRoute } from "next";
import { projects } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "http://localhost:3000", lastModified: new Date() },
    ...projects.map((project) => ({
      url: `http://localhost:3000/projects/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
