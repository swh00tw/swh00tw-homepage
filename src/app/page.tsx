import clsx from "clsx";
import PageWrapper from "@/app/components/PageWrapper";
import { PageContextProvider } from "@/app/components/PageProvider";
import Footer from "@/app/components/Footer";
import Headerbar from "@/app/components/HeaderBar";
import { pages as mobilePages } from "@/app/components/MobilePages";

export default function Home() {
  console.log(typeof window !== "undefined" ? "client" : "server");
  return (
    <PageContextProvider>
      <div className={clsx("lg:h-[calc(100svh+4000px)]", "relative")}>
        <Headerbar />
        <PageWrapper />
        <div
          className={clsx(
            "flex",
            "lg:hidden",
            "flex-col",
            "items-center",
            "justify-center"
          )}
        >
          {...mobilePages}
        </div>
        <Footer />
      </div>
    </PageContextProvider>
  );
}
