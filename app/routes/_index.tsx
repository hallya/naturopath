import { useLoaderData } from "@remix-run/react";
import type { LinksFunction } from "@vercel/remix";
import { useMemo } from "react";
import { useSections } from "~/contexts/SectionRefsContext";
import styles from "~/styles/_index.styles.css";
import { LeftNavigation } from "../views";
import { Contact } from "./sections/Contact";
import { Home } from "./sections/Home";
import { Massage } from "./sections/Massage";
import { Naturopathie } from "./sections/Naturopathie";
import { Parcours } from "./sections/Parcours";
import { ReflexologiePlantaire } from "./sections/ReflexologiePlantaire";
import { Tarifs } from "./sections/Tarifs";
import { useSetUrlHashOnIntersection } from "./useSetUrlHasOnIntersection";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export async function loader() {
  return {
    googleMapSrc: `https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=38+Rue+Pierre+Massieux,+33400+Talence/@44.805014,-0.5777371,17z&language=fr&zoom=15&maptype=roadmap`,
  };
}

export default function IndexRoute() {
  const { googleMapSrc } = useLoaderData<typeof loader>();
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
        <div className="home-container">
          <Home section={sections.home} />
          <Naturopathie section={sections.laNaturopathie} />
          <Parcours section={sections.parcours} />
          <ReflexologiePlantaire section={sections.reflexologiePlantaire} />
          <Massage section={sections.massage} />
          <Tarifs section={sections.tarifs} />
          <Contact section={sections.contact} googleMapSrc={googleMapSrc} />
        </div>
      </main>
    </>
  );
}
