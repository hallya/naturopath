import type { LinksFunction } from "@vercel/remix";
import { NavLink } from "@remix-run/react";
import type { navItems } from "../../routes/navLinks";
import stylesheet from "./LeftNavigation.css";
import { useState } from "react";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

interface LeftNavigationProps {
  navItems: typeof navItems;
}

export function LeftNavigation(props: LeftNavigationProps) {
  const { navItems } = props;
  const [isOpen, setIsOpen] = useState(false);
  const desktopClass = "sm:translate-y-0";

  return (
    <nav
      className={`${
        isOpen ? "menuOpened" : "menuClosed"
      } ${desktopClass} nav sm:p-5 m-auto bg-neutral-100 duration-200 firstLayer`}
    >
      <button
        aria-label={`${isOpen ? "close" : "open"} menu`}
        className="toggleMenu"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✺ fermer ✺" : "✺ menu ✺"}
      </button>
      <ul className="pt-0 gap-[8px] listContainer">
        {navItems.map(item => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `link p-3 w-full min-w-max block rounded-lg ${isActive ? "pressed" : ""}`
                }
                onClick={() => setIsOpen(!isOpen)}
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
