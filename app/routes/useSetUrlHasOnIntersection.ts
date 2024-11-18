import { useEffect } from "react";

export function useSetUrlHashOnIntersection(sectionRefs: { ref: React.RefObject<HTMLElement> }[]) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            window.history.replaceState({}, "", `#${entry.target.id}`);
            window.dispatchEvent(new Event('hashchange'));
          }
        });
      },
      {
        threshold: 0.8,
      },
    );

    sectionRefs.forEach(section => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => observer.disconnect();
  }, [sectionRefs]);
}
