import clsx from "clsx";
import DesktopPages from "@/app/components/DesktopPages";
import { PageContextProvider } from "@/app/components/PageProvider";
import Footer from "@/app/components/Footer";
import Headerbar from "@/app/components/HeaderBar";
import MobilePages from "@/app/components/MobilePages";

export default function Home() {
  return (
    <PageContextProvider>
      <div
        className={clsx("lg:h-[calc(100svh+4000px)]", "relative", "bg-main")}
      >
        <Headerbar />
        <DesktopPages />
        <MobilePages />
        <Footer />
      </div>
    </PageContextProvider>
  );
}
