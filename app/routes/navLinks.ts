export const mapNavLinks: Record<string, { id: string; href: string; pageTitle: string }> = {
  "/": {
    id: "nav_item_home",
    href: "/",
    pageTitle: "Accueil",
  },
  "/la-naturopathie": {
    id: "nav_item_naturopathy",
    href: "/la-naturopathie",
    pageTitle: "La naturopathie",
  },
  "/parcours": {
    id: "nav_item_pathway",
    href: "/parcours",
    pageTitle: "Parcours",
  },
  "/reflexologie-plantaire": {
    id: "nav_item_plantar_reﬂexology",
    href: "/reflexologie-plantaire",
    pageTitle: "Réflexologie plantaire",
  },
  "/massage": {
    id: "nav_item_massage",
    href: "/massage",
    pageTitle: "Massage",
  },
  "/tarifs": {
    id: "nav_item_tariffs",
    href: "/tarifs",
    pageTitle: "Tarifs",
  },
  "/plan-d-acces-&-contact": {
    id: "nav_item_access_map_and_contact",
    href: "/plan-d-acces-&-contact",
    pageTitle: "Plan d'accès et contact",
  },
};

export const navItems = Object.values(mapNavLinks);
