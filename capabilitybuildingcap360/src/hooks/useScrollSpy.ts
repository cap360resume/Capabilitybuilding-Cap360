import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds: string[], offset = 120) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;
      let current = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            current = id;
          }
        }
      }

      // If we're near the bottom of the page, activate the last section
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
        const lastId = sectionIds[sectionIds.length - 1];
        if (document.getElementById(lastId)) {
          current = lastId;
        }
      }

      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
