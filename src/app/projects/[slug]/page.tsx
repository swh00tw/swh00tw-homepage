import fs from "fs";
import path from "path";
import { getProject } from "./getProject";
import { MDXCustom } from "@/app/mdx/mdx-components";
import { projectsMarkdownPath as projectsDir } from "@/app/constant";
import { NewTabWrapper } from "@/app/NewTabWrapper";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(projectsDir), {
    withFileTypes: true,
  });

  const paths = files
    .filter((f) => f.isFile())
    .map((f) => f.name)
    .map((filename) => ({
      slug: filename.endsWith(".mdx")
        ? filename.replace(".mdx", "")
        : filename.replace(".md", ""),
    }));

  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog = getProject({
    slug: params.slug,
    markdownPath: projectsDir,
  });

  return {
    title: blog.frontMatter.displayName,
    description: "Frank Hsu",
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const data = getProject({
    slug: params.slug,
    markdownPath: projectsDir,
  });

  return (
    <NewTabWrapper>
      <MDXCustom source={data.content} />
    </NewTabWrapper>
  );
}
