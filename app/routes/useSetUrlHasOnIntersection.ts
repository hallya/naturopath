import { useEffect, useState } from "react";

interface SectionRef {
  ref: React.RefObject<HTMLElement>;
}

export function useSetUrlHashOnIntersection(sectionRefs: SectionRef[]) {
  const [threshold, setThreshold] = useState(0.5);

  // Effet pour détecter le mobile et définir le threshold
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    setThreshold(isMobile ? 0.2 : 0.5);
  }, []);

  // Effet pour l'intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const hash = entry.target.id;
            window.history.replaceState(null, "", `#${hash}`);
          }
        });
      },
      {
        threshold,
      },
    );

    sectionRefs.forEach(section => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sectionRefs.forEach(section => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [sectionRefs, threshold]);
}
