"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useOpenTabs } from "./OpenTabProvider";

export function NewTabWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { pushTab } = useOpenTabs();

  // invoke on mount
  useEffect(() => {
    pushTab({
      label: pathname,
      href: pathname,
      allowClose: true,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}
