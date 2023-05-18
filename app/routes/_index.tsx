import { PageHeader } from "../views";
import type { LinksFunction } from "@vercel/remix";
import { mapNavLinks } from "./navLinks";
import { useLocation } from "@remix-run/react";

export const links: LinksFunction = () => {
  return [];
};

export default function IndexRoute() {
  const { pathname } = useLocation();
  return (
    <main>
      <PageHeader title={mapNavLinks[pathname].pageTitle} />
      <section>
        <h2>Coucou</h2>
      </section>
    </main>
  );
}
