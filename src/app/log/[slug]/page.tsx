import fs from "fs";
import path from "path";
import { NewTabWrapper } from "@/app/NewTabWrapper";
import { postsMarkdownPath } from "@/app/constant";
import { getPost } from "./getPost";
import { MDXCustom } from "@/app/mdx/mdx-components";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(postsMarkdownPath), {
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
  const blog = getPost({
    slug: params.slug,
  });

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const data = getPost({
    slug: params.slug,
  });

  return (
    <NewTabWrapper>
      <MDXCustom source={data.content} />
    </NewTabWrapper>
  );
}
