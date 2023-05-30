import "@/app/globals.css";
import { Work_Sans } from "next/font/google";
import clsx from "clsx";
import Headerbar from "@/app/components/HeaderBar";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Frank Hsu",
  description: "Welcome to Frank's portfolio site!",
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon.ico",
  },
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
        <Headerbar />
        {children}
      </body>
    </html>
  );
}
