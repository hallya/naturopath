import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import globalStylesheet from "~/styles/global.css";
import { MainLayout, links as viewsLinks } from "./views";
import { Footer } from "./views/Footer";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Léa Dulac - Naturopathe",
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1",
    },
    {
      name: "description",
      content: "Léa Dulac - Naturopathe",
    },
  ];
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStylesheet },
    {
      rel: "preload",
      href: "/fonts/Mulish-Light.woff",
      as: "font",
      type: "font/woff",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/Prata-Regular.woff",
      as: "font",
      type: "font/woff",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/PlayfairDisplay.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/Poppins-Light.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    ...viewsLinks(),
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <MainLayout>
          <Outlet />
          <Footer />
        </MainLayout>
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}
