import { useEffect, useState } from "react";

export function useSetUrlHashOnIntersection(sectionRefs: React.RefObject<HTMLElement>[]) {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsPageLoaded(true);
    } else {
      const handleLoad = () => setIsPageLoaded(true);
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  useEffect(() => {
    if (!isPageLoaded) return;

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

    sectionRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [sectionRefs, isPageLoaded]);
}
