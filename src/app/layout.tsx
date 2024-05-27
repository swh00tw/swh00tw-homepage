import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"] });

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
      <body className={workSans.className}>
        <Theme accentColor="gray">{children}</Theme>
      </body>
    </html>
  );
}
