import "server-only";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { postFrontmatterSchema } from "../getPosts";
import { postsMarkdownPath } from "@/app/constant";

export function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join(postsMarkdownPath, slug + ".md"),
    "utf-8",
  );
  const { data: frontMatter, content, excerpt } = matter(markdownFile);

  return {
    frontMatter: postFrontmatterSchema.parse({
      ...frontMatter,
      slug,
    }),
    content,
    excerpt,
  };
}

export type ProkectMarkdownData = ReturnType<typeof getPost>;
