import clsx from "clsx";
import PageWrapper from "@/components/PageWrapper";
import { PageContextProvider } from "@/components/PageProvider";
import Footer from "@/components/Footer";
import Headerbar from "@/components/Headerbar";

export default function Home() {
  return (
    <PageContextProvider>
      <div className={clsx("h-[calc(100vh+4000px)]", "relative")}>
        <Headerbar />
        <PageWrapper />
        <Footer />
      </div>
    </PageContextProvider>
  );
}
