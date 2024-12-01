import { useRef } from "react";

export interface Section {
  title: string;
  hash: string;
  ref: React.RefObject<HTMLElement>;
}

interface IndexSections {
  home: Section;
  laNaturopathie: Section;
  parcours: Section;
  reflexologiePlantaire: Section;
  massage: Section;
  tarifs: Section;
  contact: Section;
}

export function useSections() {
  const refs: IndexSections = {
    home: { title: "Accueil", hash: "home", ref: useRef<HTMLElement>(null) },
    laNaturopathie: {
      title: "La naturopathie",
      hash: "la-naturopathie",
      ref: useRef<HTMLElement>(null),
    },
    parcours: { title: "Parcours", hash: "parcours", ref: useRef<HTMLElement>(null) },
    reflexologiePlantaire: {
      title: "Réflexologie plantaire",
      hash: "reflexologie-plantaire",
      ref: useRef<HTMLElement>(null),
    },
    massage: { title: "Massage", hash: "massage", ref: useRef<HTMLElement>(null) },
    tarifs: { title: "Tarifs", hash: "tarifs", ref: useRef<HTMLElement>(null) },
    contact: { title: "Plan d'accès et contact", hash: "contact", ref: useRef<HTMLElement>(null) },
  };
  return refs;
}
