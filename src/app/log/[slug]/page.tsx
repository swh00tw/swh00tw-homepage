import { NewTabWrapper } from "@/app/NewTabWrapper";
import { getPost } from "./getPost";
import { MDXCustom } from "@/app/mdx/mdx-components";
import { getPosts } from "../getPosts";

export async function generateStaticParams() {
  return getPosts().map((p) => ({
    slug: p.meta.slug,
  }));
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
