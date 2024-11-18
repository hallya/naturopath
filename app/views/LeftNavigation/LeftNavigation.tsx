import { NavLink, useLocation } from "@remix-run/react";
import type { LinksFunction } from "@vercel/remix";
import { useCallback, useEffect, useState } from "react";
import { useSectionRefs } from '~/contexts/SectionRefsContext';
import type { navItems } from "../../routes/navLinks";
import stylesheet from "./LeftNavigation.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

interface LeftNavigationProps {
  navItems: typeof navItems;
}

export function LeftNavigation({ navItems }: LeftNavigationProps) {
  const refs = useSectionRefs();
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const location = useLocation();
  const hash = location.hash || "#home";

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsPageLoaded(true);
    } else {
      window.addEventListener('load', () => setIsPageLoaded(true));
      return () => window.removeEventListener('load', () => setIsPageLoaded(true));
    }
  }, []);

  useEffect(() => {
    setActiveHash(hash);
    if (isPageLoaded) {
      const sectionId = hash.substring(1);
      const ref = refs[sectionId as keyof typeof refs]?.current;
      if (ref) {
        ref.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash, refs, isPageLoaded]);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      event.preventDefault();
        const sectionId = href.substring(1);
        const ref = refs[sectionId as keyof typeof refs]?.current;
        if (ref) {
          ref.scrollIntoView({ behavior: "smooth" });
          window.history.pushState({}, "", href);
          setActiveHash(href);
          setIsOpen(false);
      }
    },
    [refs, setIsOpen],
  );

  return (
    <nav
      className={`nav ${isOpen ? "menuOpened" : "menuClosed"}`}
      role="navigation"
      aria-label="Menu principal"
    >
      <button
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls="navigation-menu"
        aria-haspopup="true"
        className="toggleMenu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span aria-hidden="true">{isOpen ? "✺ fermer ✺" : "✺ menu ✺"}</span>
      </button>
      <ul id="navigation-menu" className="listContainer" role="menubar" aria-hidden={!isOpen}>
        {navItems.map(item => (
          <li key={item.id} role="none">
            <NavLink
              to={item.href}
              className={`link ${activeHash === item.href ? "pressed" : ""}`}
              onClick={e => handleClick(e, item.href)}
              role="menuitem"
              aria-current={activeHash === item.href}
            >
              <span>{item.pageTitle}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
