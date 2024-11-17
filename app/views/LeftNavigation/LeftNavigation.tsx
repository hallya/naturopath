import { NavLink } from "@remix-run/react";
import type { LinksFunction } from "@vercel/remix";
import { useState } from "react";
import type { navItems } from "../../routes/navLinks";
import stylesheet from "./LeftNavigation.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

interface LeftNavigationProps {
  navItems: typeof navItems;
}

export function LeftNavigation(props: LeftNavigationProps) {
  const { navItems } = props;
  const [isOpen, setIsOpen] = useState(false);

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
        <span aria-hidden="true">
          {isOpen ? "✺ fermer ✺" : "✺ menu ✺"}
        </span>
      </button>
      <ul 
        id="navigation-menu"
        className="listContainer"
        role="menubar"
        aria-hidden={!isOpen}
      >
        {navItems.map(item => {
          return (
            <li 
              key={item.id}
              role="none"
            >
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `link ${isActive ? "pressed" : ""}`
                }
                onClick={() => setIsOpen(!isOpen)}
                role="menuitem"
                aria-current="page"
              >
                <span>{item.pageTitle}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
