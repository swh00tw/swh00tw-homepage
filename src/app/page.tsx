import clsx from "clsx";
import PageWrapper from "@/components/PageWrapper";
import { PageContextProvider } from "@/components/PageProvider";
import Footer from "@/components/Footer";
import Headerbar from "@/components/HeaderBar";

export default function Home() {
  return (
    <PageContextProvider>
      <div className={clsx("lg:h-[calc(100svh+4000px)]", "relative")}>
        <Headerbar />
        <PageWrapper />
        <Footer />
      </div>
    </PageContextProvider>
  );
}
