import { PageHeader } from "../../views";
import { mapNavLinks } from "../navLinks";
import { useLocation } from "@remix-run/react";

export default function Route() {
  const { pathname } = useLocation();

  return (
      <PageHeader title={mapNavLinks[pathname].pageTitle} />
  );
}
