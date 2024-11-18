import { NavLink, useLocation } from "@remix-run/react";
import type { LinksFunction } from "@vercel/remix";
import { useCallback, useEffect, useState, useMemo } from "react";
import { useSectionRefs } from "~/contexts/SectionRefsContext";
import type { navItems } from "../../routes/navLinks";
import stylesheet from "./LeftNavigation.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

interface LeftNavigationProps {
  navItems: typeof navItems;
}

export function LeftNavigation({ navItems }: LeftNavigationProps) {
  const refs = useSectionRefs();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeHash, setActiveHash] = useState(location.hash || "#home");
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsPageLoaded(true);
    } else {
      const handleLoad = () => setIsPageLoaded(true);
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      event.preventDefault();
      if (isPageLoaded) {
        const sectionId = href.substring(1);
        const ref = refs[sectionId as keyof typeof refs]?.current;
        if (ref) {
          ref.scrollIntoView({ behavior: "smooth" });
          window.history.pushState({}, "", href);
          setActiveHash(href);
          setIsOpen(false);
        }
      }
    },
    [refs, isPageLoaded, setIsOpen],
  );

  const navigationItems = useMemo(
    () =>
      navItems.map(item => (
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
      )),
    [activeHash, handleClick, navItems],
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
        {navigationItems}
      </ul>
    </nav>
  );
}
