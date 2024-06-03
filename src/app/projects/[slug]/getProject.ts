import "server-only";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { projectFrontmatterSchema } from "../getProjects";
import { projectsMarkdownPath } from "@/app/constant";

export function getProject({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join(projectsMarkdownPath, slug + ".md"),
    "utf-8",
  );
  const { data: frontMatter, content, excerpt } = matter(markdownFile);

  return {
    frontMatter: projectFrontmatterSchema.parse(frontMatter),
    slug,
    content,
    excerpt,
  };
}

export type ProkectMarkdownData = ReturnType<typeof getProject>;
