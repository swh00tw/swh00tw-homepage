"use client";
import { usePageContext } from "@/app/components/PageProvider";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { pageBreakPoints } from "@/app/components/PageProvider";

function FooterItem({
  children,
  index,
}: {
  index: number;
  children: React.ReactNode;
}) {
  const { pageIndex } = usePageContext();
  return (
    <div
      className={clsx(
        pageIndex === index + 1 ? "text-primary" : "text-[#808080]",
        "font-semibold",
        "h-full",
        "w-fit",
        "whitespace-nowrap",
        "overflow-x-hidden",
        "flex",
        "relative",
        "items-center",
        "justify-center",
        "p-[18px]",
        "cursor-pointer",
        "ease-in-out",
        "duration-300",
        "after:content-['']",
        "after:absolute",
        "after:bottom-0",
        "after:left-0",
        "after:block",
        pageIndex === index + 1 ? "after:w-full" : "after:w-0",
        "after:h-1",
        "after:bg-primary",
        "after:transition-all",
        "after:ease-in-out",
        "after:duration-300"
      )}
      onClick={() => {
        window?.scrollTo?.({
          top: pageBreakPoints[index + 1],
          behavior: "smooth",
        });
      }}
    >
      {children}
    </div>
  );
}

export default function Footer() {
  const { pageIndex } = usePageContext();
  const items = ["about me", "career", "skills", "projects", "contact me"];

  return (
    <AnimatePresence>
      {pageIndex === 0 ? null : (
        <motion.div
          key="footer"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className={clsx(
            "fixed",
            "bottom-0",
            "w-full",
            "justify-center",
            "items-center",
            "lg:flex",
            "hidden"
          )}
        >
          <div
            className={clsx(
              "flex",
              "flex-row",
              "w-[80%]",
              "lg:w-[70%]",
              "gap-x-[5%]",
              "mx-auto",
              "h-[100px]",
              "items-center",
              "md:px-[60px]",
              "lg:px-[120px]",
              "bg-[#ffffff95]",
              "justify-center",
              "rounded-t-lg",
              "drop-shadow-footer",
              "shadow-lg"
            )}
          >
            {items.map((item, index) => (
              <FooterItem key={index} index={index}>
                {item}
              </FooterItem>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
