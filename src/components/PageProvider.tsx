"use client";
import React, { useState, createContext, useContext, useEffect } from "react";
import debounce from "lodash.debounce";
const DebounceInterval =
  parseInt(process.env.NEXT_PUBLIC_DEBOUNCE_INTERVAL as string, 10) ?? 500;
export const pageBreakPoints = [0, 300, 1100, 1900, 2700, 3500, Infinity];
export const getPageIndex = (scrollY: number) => {
  return pageBreakPoints.findIndex((breakpoint, index) => {
    if (
      (breakpoint <= scrollY && scrollY < pageBreakPoints?.[index + 1]) ??
      Infinity
    ) {
      return true;
    }
  });
};
interface PageContextProps {
  pageIndex: number;
}
const PageContext = createContext<PageContextProps>({
  pageIndex: 0,
});

export const PageContextProvider: React.FC<{
  readonly children: React.ReactNode;
}> = ({ children }) => {
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    // when hydration, set pageIndex according to scrollY
    setPageIndex(getPageIndex(window.scrollY));
    // then, bind scroll event listener
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      const scrollY = window.scrollY;
      const index = getPageIndex(scrollY);
      setPageIndex(index);
      // console.log(index);
    };
    window.addEventListener("scroll", debounce(handleScroll, DebounceInterval));
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageContext.Provider value={{ pageIndex: pageIndex }}>
      {children}
    </PageContext.Provider>
  );
};

export function usePageContext() {
  return useContext(PageContext);
}
