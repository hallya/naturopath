import type { LinksFunction } from "@vercel/remix";
import { useMemo } from "react";
import { useSections } from "~/contexts/SectionRefsContext";
import styles from "~/styles/_index.styles.css";
import { LeftNavigation, Picture } from "../views";
import { useSetUrlHashOnIntersection } from "./useSetUrlHasOnIntersection";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function IndexRoute() {
  const sections = useSections();

  const sectionRefs = useMemo(
    () => Object.values(sections).map(section => ({ ref: section.ref })),
    [sections],
  );

  useSetUrlHashOnIntersection(sectionRefs);

  return (
    <>
      <LeftNavigation sections={Object.values(sections)} />
      <main className="mainContainer">
        <div className="videoContainer">
          <video autoPlay loop muted playsInline className="backgroundVideo">
            <source src="/video/homepage-bg-video.mp4" type="video/mp4" />
          </video>
        </div>

        <section ref={sections.home.ref} className="section" id={sections.home.hash}>
          <div className="logo">
            <Picture alt="" src="/img/logo.webp" sizeAuto="height" loading="eager" />
          </div>
          <h1 className="title">LES SOINS DE LEA</h1>
          <h2 className="text">Praticienne en massage bien-être & énergétique à Bordeaux (33)</h2>
        </section>

        <section ref={sections["la-naturopathie"].ref} className="section" id={sections["la-naturopathie"].hash}>
          <h2 className="text">La naturopathie</h2>
        </section>

        <section ref={sections.parcours.ref} className="section" id={sections.parcours.hash}>
          <h2 className="text">Parcours</h2>
        </section>

        <section
          ref={sections["reflexologie-plantaire"].ref}
          className="section"
          id={sections["reflexologie-plantaire"].hash}
        >
          <h2 className="text">Réflexologie plantaire</h2>
        </section>

        <section ref={sections.massage.ref} className="section" id={sections.massage.hash}>
          <h2 className="text">Massage</h2>
        </section>

        <section ref={sections.tarifs.ref} className="section" id={sections.tarifs.hash}>
          <h2 className="text">Tarifs</h2>
        </section>

        <section ref={sections.contact.ref} className="section" id={sections.contact.hash}>
          <h2 className="text">Plan d&apos;accès et contact</h2>
        </section>
      </main>
    </>
  );
}
