import "server-only";
import { z } from "zod";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notEmpty } from "@/utils/notEmpty";

export const projectFrontmatterSchema = z.object({
  displayName: z.string(),
  date: z.date(),
  tags: z.array(z.string()).nullish(),
  coverImageSrc: z.string().nullish(),
  published: z.boolean(),
});
export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;

export function getProjects() {
  // 1} project dir
  const markdownDir = "src/mdx/projects";
  // 2) Find all files in the project directory
  const files = fs.readdirSync(path.resolve(markdownDir), {
    withFileTypes: true,
  });
  // 3) For each mdx found
  const markdowns = files
    .filter((f) => f.isFile())
    .map((f) => f.name)
    .map((filename) => {
      // 4) Read the content of that blog
      const fileContent = fs.readFileSync(
        path.join(markdownDir, filename),
        "utf-8",
      );
      // 5) Extract the metadata from the blog's content
      const { data: frontMatter } = matter(fileContent);
      // 5.5) Validate the metadata
      const res = projectFrontmatterSchema.safeParse(frontMatter);
      if (!res.success) {
        console.log(res.error);
        return null;
      }
      return {
        meta: res.data,
        slug: filename.replace(".md", ""),
      };
    })
    .filter(notEmpty);

  // sort by date, from new to old
  return markdowns.sort((a, b) => {
    const aDate = new Date(a.meta.date).getTime();
    const bDate = new Date(b.meta.date).getTime();
    return bDate - aDate;
  });
}
