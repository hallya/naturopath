import { LeftNavigation, PageHeader } from "../../views";
import { mapNavLinks, navItems } from "../navLinks";
import { useLocation } from "@remix-run/react";

export default function Route() {
  const { pathname } = useLocation();

  return (
    <>
      <LeftNavigation navItems={navItems} />
      <PageHeader title={mapNavLinks[pathname].pageTitle} />
    </>
  );
}
