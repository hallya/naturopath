import { mapNavLinks, navItems } from "./navLinks";
import { LeftNavigation } from "../views";
import type { LinksFunction } from "@vercel/remix";
import { PageHeader } from "../views";
import { useLocation } from "@remix-run/react";

export const links: LinksFunction = () => {
  return [];
};

export default function IndexRoute() {
  const { pathname } = useLocation();
  return (
    <>
      <LeftNavigation navItems={navItems} />
      <PageHeader title={mapNavLinks[pathname].pageTitle} />
    </>
  );
}
