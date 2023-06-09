import type { LinksFunction } from "@vercel/remix";
import { links as leftNavigationLinks } from "./LeftNavigation";
import { links as mainLayoutLinks } from "./MainLayout";
import { links as pageHeaderLinks } from "./PageHeader";

export { LeftNavigation } from "./LeftNavigation";
export { MainLayout } from "./MainLayout";
export { PageHeader } from "./PageHeader";

export const links: LinksFunction = () => {
  return [...leftNavigationLinks(), ...mainLayoutLinks(), ...pageHeaderLinks()];
};
