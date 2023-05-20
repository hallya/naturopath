import { LeftNavigation, MainLayout, links as viewsLinks } from "./views";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import type { LinksFunction } from "@remix-run/node";
import type { MetaFunction } from "@vercel/remix";
import globalStylesheet from "~/styles/global.css";
import { navItems } from "./routes/navLinks";
import tailwindStylesheet from "~/tailwind.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Léa Dulac - Naturopathe",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheet },
    { rel: "stylesheet", href: globalStylesheet },
    ...viewsLinks(),
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@500&family=Prata&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <MainLayout>
          <LeftNavigation navItems={navItems} />
          <Outlet />
        </MainLayout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}
