import type { LinksFunction } from "@vercel/remix";
import type { navItems } from "../../routes/navLinks";
import stylesheet from "./LeftNavigation.css";
import { useLocation } from "@remix-run/react";
import { useState } from "react";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

interface LeftNavigationProps {
  navItems: typeof navItems;
}

export function LeftNavigation(props: LeftNavigationProps) {
  const { navItems } = props;
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const mobileClass = `fixed bottom-0 right-3 left-3 rounded-lg m ${isOpen ? "" : "translate-y-full bottom-14"}`;
  const desktopClass = `sm:relative sm:right-0 sm:left-0 sm:top-0 sm:translate-y-0 sm:h-screen sm:rounded-none`;

  return (
    <nav className={`${mobileClass} ${desktopClass} nav p-5 left-5 m-auto bg-neutral-100 duration-200`}>
      <button aria-label="open menu" className="toggleMenu sm:hidden" onClick={() => setIsOpen(!isOpen)}><div className="buttonTexture" /></button>
      <ul className="pt-0 sm:pt-28 gap-[8px] listContainer">
        {navItems.map(item => {
          return (
            <li key={item.id}>
              <a
                href={item.href}
                className={`link p-3 w-full min-w-max block rounded-lg ${
                  pathname === item.href ? "text-yellow-600 pressed" : "hover:text-yellow-500"
                }`}
              >
                {item.pageTitle}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
