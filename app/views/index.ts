import type { LinksFunction } from "@vercel/remix";
import { links as leftNavigationLinks } from "./LeftNavigation";
import { links as mainLayoutLinks } from "./MainLayout";
import { links as pageHeaderLinks } from "./PageHeader";
import { links as pictureLinks } from "./Picture";

export const links: LinksFunction = () => {
  return [
    ...leftNavigationLinks(),
    ...mainLayoutLinks(),
    ...pageHeaderLinks(),
    ...pictureLinks(),
  ];
};
export { LeftNavigation } from "./LeftNavigation";
export { MainLayout } from "./MainLayout";
export { PageHeader } from "./PageHeader";
export { Picture } from "./Picture";
