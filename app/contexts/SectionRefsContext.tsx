import { useRef } from "react";

interface SectionRefs {
  home: { title: string; hash: string; ref: React.RefObject<HTMLElement> };
  laNaturopathie: { title: string; hash: string; ref: React.RefObject<HTMLElement> };
  parcours: { title: string; hash: string; ref: React.RefObject<HTMLElement> };
  reflexologiePlantaire: {
    title: string;
    hash: string;
    ref: React.RefObject<HTMLElement>;
  };
  massage: { title: string; hash: string; ref: React.RefObject<HTMLElement> };
  tarifs: { title: string; hash: string; ref: React.RefObject<HTMLElement> };
  contact: { title: string; hash: string; ref: React.RefObject<HTMLElement> };
}

export function useSections() {
  const refs: SectionRefs = {
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
