import clsx from "clsx";
import { z } from "zod";
import { FaChevronRight } from "react-icons/fa";

const BlogUrl = "https://swh00tw.dev";

export const postSchema = z.object({
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

export type Post = z.infer<typeof postSchema>;
export const postsSchema = z.array(postSchema);
export type Posts = z.infer<typeof postsSchema>;

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

async function BlogPosts() {
  const data = await loadBlogPosts();

  if (data.length === 0) {
    return null;
  }

  return (
    <div
      className={clsx(
        "bg-[#303030]",
        "p-4",
        "border-[#3E3E3E]",
        "border-[2px]",
        "rounded-[14px]",
        "flex-col",
        "flex",
        "text-[#ffffff]"
      )}
    >
      {data.map((post, i) => {
        return (
          <>
            {i === 0 ? null : (
              <div
                className={clsx("w-full", "h-[1px]", "bg-[#bbbbbb]", "my-2")}
              />
            )}
            <div
              key={post.slug}
              className={clsx(
                "hover:scale-[101%]",
                "transition-all",
                "duration-200",
                "ease-in-out",
                "hover:text-[#9F3AE0]",
                "group"
              )}
            >
              <a
                href={`${BlogUrl}/${post.slug}`}
                className="flex-row flex gap-x-4 items-center justify-between"
              >
                <div className="flex flex-col">
                  <div className="flex flex-row gap-x-2">
                    <p>{post.title}</p>{" "}
                    <p
                      className={clsx(
                        "text-[12px]",
                        "bg-[#9F3AE090]",
                        "h-fit",
                        "px-1",
                        "rounded-[4px]",
                        "group-hover:text-white"
                      )}
                    >
                      {post.lang}
                    </p>
                  </div>
                  <div className={clsx("text-[10px]")}>{post.description}</div>
                </div>
                <FaChevronRight
                  className={clsx(
                    "relative group-hover:translate-x-1",
                    "ease-in-out",
                    "transition-all",
                    "duration-200"
                  )}
                />
              </a>
            </div>
          </>
        );
      })}
    </div>
  );
}

export { BlogPosts };
