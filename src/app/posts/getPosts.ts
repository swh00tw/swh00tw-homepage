import "server-only";
import { z } from "zod";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notEmpty } from "@/utils/notEmpty";
import { postsMarkdownPath } from "../constant";

export const postFrontmatterSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  publishedAt: z.date(),
  tags: z.array(z.string()).default([]),
  published: z.boolean().default(false),
  coverImgSrc: z.string().optional(),
  lang: z.union([z.literal("en"), z.literal("zh")]),
});
export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>;

export function getPosts() {
  const markdownDir = postsMarkdownPath;
  const files = fs.readdirSync(path.resolve(markdownDir), {
    withFileTypes: true,
  });
  const markdowns = files
    .filter((f) => f.isFile())
    .map((f) => f.name)
    .map((filename) => {
      const fileContent = fs.readFileSync(
        path.join(markdownDir, filename),
        "utf-8",
      );
      const { data: frontMatter } = matter(fileContent);
      const slug = filename.endsWith(".mdx")
        ? filename.replace(".mdx", "")
        : filename.replace(".md", "");
      const res = postFrontmatterSchema.safeParse({
        ...frontMatter,
        slug,
      });
      if (!res.success) {
        console.log(res.error);
        return null;
      }
      return {
        meta: res.data,
      };
    })
    .filter(notEmpty);

  // sort by date, from new to old
  return markdowns.sort((a, b) => {
    const aDate = new Date(a.meta.publishedAt).getTime();
    const bDate = new Date(b.meta.publishedAt).getTime();
    return bDate - aDate;
  });
}
