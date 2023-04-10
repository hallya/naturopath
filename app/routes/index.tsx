import { LeftNavigation, leftNavigationStyles } from "../views/LeftNavigation";
import type { LinksFunction } from "@vercel/remix";

export const links: LinksFunction = () => {
  return [leftNavigationStyles];
};

export default function IndexRoute() {
  return (
    <div className="p-3">
      <header className="w-1/2 m-auto flex justify-center">
        <h1>Accueil</h1>
      </header>
      <LeftNavigation />
    </div>
  );
}
