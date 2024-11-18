import { useLocation, NavLink } from "@remix-run/react";
import type { LinksFunction } from "@vercel/remix";
import { useEffect, useState, useMemo } from "react";
import stylesheet from "./LeftNavigation.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

interface LeftNavigationProps {
  sections: { title: string; ref: React.RefObject<HTMLElement>; hash: string }[];
}

export function LeftNavigation({ sections }: LeftNavigationProps) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(location.hash || "#home");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const sectionId = location.hash.substring(1);
    const ref = sections.find(section => section.hash === sectionId)?.ref;

    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash, sections]);

  const navigationItems = useMemo(() => {
    return sections.map(({ title, hash }) => (
      <li key={hash} role="none">
        <NavLink
          to={`#${hash}`}
          className={`link${activeHash === `#${hash}` ? " pressed" : ""}`}
          role="menuitem"
          aria-current={activeHash === `#${hash}`}
        >
          <span>{title}</span>
        </NavLink>
      </li>
    ));
  }, [sections, activeHash]);

  return (
    <nav
      className={`nav${isOpen ? " menuOpened" : " menuClosed"}`}
      role="navigation"
      aria-label="Navigation de la page actuelle"
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
