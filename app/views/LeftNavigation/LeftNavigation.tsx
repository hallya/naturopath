import { NavLink, useLocation } from "@remix-run/react";
import type { LinksFunction } from "@vercel/remix";
import { useCallback, useEffect, useState } from "react";
import type { navItems } from "../../routes/navLinks";
import stylesheet from "./LeftNavigation.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

interface LeftNavigationProps {
  navItems: typeof navItems;
}

export function LeftNavigation(props: LeftNavigationProps) {
  const { navItems } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  const location = useLocation();
  const hash = location.hash || "#home";

  useEffect(() => {
    setActiveHash(hash);
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      event.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState({}, "", href);
        setActiveHash(href);
        setIsOpen(false);
      }
    },
    [setIsOpen],
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
