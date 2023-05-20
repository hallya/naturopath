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
  const mobileClass = `fixed bottom-0 right-3 left-3 rounded-lg p-5 pt-0 p ${
    isOpen ? "" : "translate-y-full bottom-14"
  }`;
  const desktopClass = `sm:relative sm:right-0 sm:left-0 sm:top-0 sm:translate-y-0 sm:h-screen sm:rounded-none`;

  return (
    <nav
      className={`${mobileClass} ${desktopClass} nav sm:p-5 left-5 m-auto bg-neutral-100 duration-200`}
    >
      <button
        aria-label={`${isOpen ? "close" : "open"} menu`}
        className="toggleMenu sm:hidden"
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
