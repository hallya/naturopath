import type { LinksFunction } from "@remix-run/node";
import stylesheet from "./MainLayout.css";

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

export function MainLayout(props: MainLayoutProps) {
  const { children } = props;

  return <div className="mainLayoutContainer h-screen bg-neutral-100 ">{children}</div>;
}
