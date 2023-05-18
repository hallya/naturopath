import type { LinksFunction } from "@vercel/remix";
import type { navItems } from "../../routes/navLinks";
import stylesheet from "./LeftNavigation.css";
import { useLocation } from "@remix-run/react";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

interface LeftNavigationProps {
  navItems: typeof navItems;
}

export function LeftNavigation(props: LeftNavigationProps) {
  const { navItems } = props;
  const { pathname } = useLocation();

  return (
    <nav className="nav p-5 bg-neutral-100">
      <ul className="pt-28 gap-[8px] listContainer">
        {navItems.map(item => {
          return (
            <li key={item.id}>
              <a
                href={item.href}
                className={`link p-3 w-full block rounded-lg ${
                  pathname === item.href
                    ? "text-yellow-600 pressed"
                    : "hover:text-yellow-500"
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
