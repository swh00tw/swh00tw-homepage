"use client";
import { createContext, useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export type HeaderbarLink = {
  label: string;
  href: string;
  allowClose?: boolean;
};

type OpenTabContextType = {
  openTabs: HeaderbarLink[];
  pushTab: (tab: HeaderbarLink) => void;
  closeTab: (tabLabel: string) => void;
};

const openTabContext = createContext<OpenTabContextType>({
  openTabs: [],
  pushTab: () => {},
  closeTab: () => {},
});

const fixedLinks: HeaderbarLink[] = [
  { label: "index", href: "/", allowClose: false },
  { label: "/about", href: "/about", allowClose: false },
  { label: "/projects", href: "/projects", allowClose: false },
  { label: "/posts", href: "/posts", allowClose: false },
];

export function OpenTabsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [openTabs, setOpenTabs] = useState<HeaderbarLink[]>(fixedLinks);
  const router = useRouter();

  const pushTab = (tab: HeaderbarLink) => {
    if (!openTabs.some((t) => t.href === tab.href)) {
      setOpenTabs([...openTabs, tab]);
    }
  };

  const closeTab = (tabHref: string) => {
    setOpenTabs(
      openTabs.filter((t) => (t.label === tabHref ? !t.allowClose : true)),
    );
    // if the tab is the current tab, navigate to the previous tab
    if (pathname === tabHref) {
      if (window?.history?.length === 1) {
        router.push("/");
      } else {
        router.back();
      }
    }
  };

  return (
    <openTabContext.Provider value={{ openTabs, pushTab, closeTab }}>
      {children}
    </openTabContext.Provider>
  );
}

export function useOpenTabs() {
  return useContext(openTabContext);
}
