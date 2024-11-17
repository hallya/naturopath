import { useEffect } from "react";

export function useSetUrlHashOnIntersection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            window.history.replaceState({}, "", `#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.9,
      },
    );

    document.querySelectorAll("section[id]").forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
}
