import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js",
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

const GA_MEASUREMENT_ID = "G-WJNK5J351S";

export function useAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
    });
  }, [location.pathname, location.search]);
}
