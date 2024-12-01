import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import globalStylesheet from "~/styles/global.css";
import { MainLayout, links as viewsLinks } from "./views";
import { Footer } from "./views/Footer";

export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Les Soins de Léa - Naturopathe à Bordeaux (33)" },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    },
    {
      name: "description",
      content:
        "Naturopathe et praticienne en massage bien-être & énergétique à Bordeaux. Réflexologie plantaire, massages, accompagnement naturopathique personnalisé.",
    },
    // Open Graph tags pour un meilleur partage sur les réseaux sociaux
    {
      property: "og:title",
      content: "Les Soins de Léa - Naturopathe à Bordeaux",
    },
    {
      property: "og:description",
      content:
        "Naturopathe et praticienne en massage bien-être & énergétique à Bordeaux. Réflexologie plantaire, massages, accompagnement naturopathique personnalisé.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content: "/img/logo.webp", // Assurez-vous que ce chemin est correct
    },
    // Meta tags additionnels pour le SEO
    {
      name: "keywords",
      content:
        "naturopathie, massage, réflexologie plantaire, bien-être, Bordeaux, Talence, thérapie naturelle, santé holistique",
    },
    {
      name: "author",
      content: "Léa Dulac",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    // Pour la géolocalisation
    {
      name: "geo.region",
      content: "FR-33",
    },
    {
      name: "geo.placename",
      content: "Talence",
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
