import type { LinksFunction } from "@vercel/remix";
import { useSectionRefs } from "~/contexts/SectionRefsContext";
import styles from "~/styles/_index.styles.css";
import { Picture } from "../views";
import { useSetUrlHashOnIntersection } from "./useSetUrlHasOnIntersection";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function IndexRoute() {
  const refs = useSectionRefs();

  useSetUrlHashOnIntersection(Object.values(refs));

  return (
    <main className="mainContainer">
      <div className="videoContainer">
        <video autoPlay loop muted playsInline className="backgroundVideo">
          <source src="/video/homepage-bg-video.mp4" type="video/mp4" />
        </video>
      </div>

      <section ref={refs.home} className="section" id="home">
        <div className="logo">
          <Picture alt="" src="/img/logo.webp" sizeAuto="height" loading="eager" />
        </div>
        <h1 className="title">LES SOINS DE LEA</h1>
        <h2 className="text">Praticienne en massage bien-être & énergétique à Bordeaux (33)</h2>
      </section>

      <section ref={refs["la-naturopathie"]} className="section" id="la-naturopathie">
        <h2 className="text">La naturopathie</h2>
      </section>

      <section ref={refs.parcours} className="section" id="parcours">
        <h2 className="text">Parcours</h2>
      </section>

      <section ref={refs["reflexologie-plantaire"]} className="section" id="reflexologie-plantaire">
        <h2 className="text">Réflexologie plantaire</h2>
      </section>

      <section ref={refs.massage} className="section" id="massage">
        <h2 className="text">Massage</h2>
      </section>

      <section ref={refs.tarifs} className="section" id="tarifs">
        <h2 className="text">Tarifs</h2>
      </section>

      <section ref={refs.contact} className="section" id="contact">
        <h2 className="text">Plan d&apos;accès et contact</h2>
      </section>
    </main>
  );
}
