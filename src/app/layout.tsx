import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Headerbar } from "./Headerbar";
import { workSans } from "@/utils/fonts";
import { cn } from "@/utils/cn";
import GridBackground from "./GridBackground";
import { ViewTransitions } from "next-view-transitions";

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
    <ViewTransitions>
      <html lang="en">
        <body className={cn(workSans.className)}>
          <Theme accentColor="gray">
            <div className="bg-offwhite w-screen h-screen">
              <Headerbar />
              <GridBackground>{children}</GridBackground>
            </div>
          </Theme>
        </body>
      </html>
    </ViewTransitions>
  );
}
