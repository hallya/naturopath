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
    <nav  className="p-5 border-r-indigo-100 border-r-[1px]">
      <ul  className="pt-28 gap-[8px] listContainer">
        {navItems.map(item => {
          return (
            <li key={item.id}>
              <a
                href={item.href}
                className={`py-2 px-3 w-full block ease-linear duration-100 text-black ${
                  pathname === item.href
                    ? "text-violet-700 bg-neutral-100 rounded-lg"
                    : "hover:text-violet-700 hover:bg-neutral-100 hover:rounded-lg"
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
