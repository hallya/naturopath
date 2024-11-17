import { useLocation } from "@remix-run/react";
import { PageHeader } from "../../views";
import { mapNavLinks } from "../navLinks";

export default function Route() {
  const { pathname } = useLocation();

  return <PageHeader title={mapNavLinks[pathname].pageTitle} />;
}
