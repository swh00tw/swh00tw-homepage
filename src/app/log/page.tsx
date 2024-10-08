import { cn } from "@/utils/cn";
import { Text } from "@radix-ui/themes";
import Link from "next/link";
import { getPosts } from "./getPosts";

export default async function Page() {
  const posts = getPosts();

  return (
    <div
      className={cn(
        "flex flex-col my-16",
        "w-[80vw] sm:w-[60vw] md:w-[40vw] gap-y-4",
      )}
    >
      {posts.map((post) => {
        return (
          <Link href={`log/${post.meta.slug}`} key={post.meta.slug}>
            <div className="flex flex-col gap-y-2 text-gray-12 px-2 py-1">
              <Text size="2">
                {post.meta.title}
                <span className="ml-2 text-[12px] text-gray-9">
                  {post.meta.lang}
                </span>
              </Text>
              <Text size="1" className="text-gray-11 px-1">
                {new Date(post.meta.publishedAt).toLocaleDateString()}
              </Text>
              <Text size="1" className="text-gray-11 px-1">
                {post.meta.description}
              </Text>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
