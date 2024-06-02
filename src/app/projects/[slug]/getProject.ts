import "server-only";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { projectFrontmatterSchema } from "../getProjects";

export function getProject({
  slug,
  markdownPath,
}: {
  slug: string;
  markdownPath: string;
}) {
  const markdownFile = fs.readFileSync(
    path.join(markdownPath, slug + ".md"),
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
