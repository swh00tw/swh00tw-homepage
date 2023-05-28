import "@/app/globals.css";
import { Work_Sans } from "next/font/google";
import clsx from "clsx";

const workSans = Work_Sans({ subsets: ["latin"] });

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
    <html lang="en">
      <body
        className={clsx(workSans.className, "relative", "bg-main")}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
