import type { LinkDescriptor } from "@vercel/remix";
import stylesheet from "./LeftNavigation.css";

export const leftNavigationStyles: LinkDescriptor = { rel: "stylesheet", href: stylesheet };

export function LeftNavigation() {
  return (
    <nav className="p-3 w-max grid gap-y-4 plastic-corner">
      <ul className="contents">
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/la-naturopathie">La naturopathie</a>
        </li>
        <li>
          <a href="/parcours">Parcours</a>
        </li>
        <li>
          <a href="/reflexologie-plantaire">Réﬂexologie plantaire</a>
        </li>
        <li>
          <a href="/massage">Massage</a>
        </li>
        <li>
          <a href="/tarif">Tarif</a>
        </li>
        <li>
          <a href="/plan-d-acces-&-contact">Plan d'accès et contact'</a>
        </li>
      </ul>
    </nav>
  );
}
