import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Headerbar } from "./Headerbar";
import { workSans } from "@/utils/fonts";
import { cn } from "@/utils/cn";

export const metadata: Metadata = {
  title: "Frank Hsu",
  description: "Everything about Frank Hsu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(workSans.className)}>
        <Theme accentColor="gray">
          <div className="bg-main w-screen h-screen">
            <Headerbar />
            <div className="p-4">{children}</div>
          </div>
        </Theme>
      </body>
    </html>
  );
}
