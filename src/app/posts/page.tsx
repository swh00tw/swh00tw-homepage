import { cn } from "@/utils/cn";
import { Text } from "@radix-ui/themes";
import Link from "next/link";
import { z } from "zod";

const BlogUrl = "https://blog.swh00tw.me";

const postSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  publishedAt: z.string(),
  tags: z.array(z.string()),
  published: z.boolean(),
  coverImgSrc: z.string(),
  backgroundImgSrc: z.string().optional(),
  lang: z.union([z.literal("en"), z.literal("zh")]),
});

const postsSchema = z.array(postSchema);

async function loadBlogPosts() {
  try {
    const data = await fetch(`${BlogUrl}/api/posts`, {
      next: {
        revalidate: 60 * 60,
      },
    });
    const posts = await data.json();
    const res = postsSchema.safeParse(posts);
    if (!res.success) {
      return [];
    }
    return res.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export default async function Page() {
  const posts = await loadBlogPosts();

  return (
    <div
      className={cn(
        "flex flex-col my-16",
        "w-[80vw] sm:w-[60vw] md:w-[40vw] gap-y-4",
      )}
    >
      {posts.map((post) => {
        return (
          <Link
            href={`${BlogUrl}/${post.slug}`}
            key={post.slug}
            target="_blank"
          >
            <div className="flex flex-col gap-y-2 text-gray-12 px-2 py-1">
              <Text size="2">
                {post.title}
                <span className="ml-2 text-[12px] text-gray-9">
                  {post.lang}
                </span>
              </Text>
              <Text size="1" className="text-gray-11 px-1">
                {new Date(post.publishedAt).toLocaleDateString()}
              </Text>
              <Text size="1" className="text-gray-11 px-1">
                {post.description}
              </Text>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
