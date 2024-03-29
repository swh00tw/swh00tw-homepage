import "@/app/globals.css";
import { Work_Sans } from "next/font/google";
import clsx from "clsx";
import Headerbar from "@/app/components/HeaderBar";
import { BlogPosts } from "@/app/components/BlogPosts";
import { Suspense } from "react";

const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-worksans" });

export const metadata = {
  title: "Frank Hsu",
  description: "Welcome to Frank's portfolio site!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={workSans.variable}>
      <body
        className={clsx("relative", "bg-main")}
        suppressHydrationWarning={true}
      >
        <Headerbar>
          <Suspense fallback={<div>Loading...</div>}>
            <BlogPosts />
          </Suspense>
        </Headerbar>
        {children}
      </body>
    </html>
  );
}
