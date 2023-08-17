import type { LinksFunction } from "@vercel/remix";
import { Picture } from "../views";
import styles from "~/styles/_index.styles.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function IndexRoute() {
  return (
    <main>
      <figure className="figure">
        <div className="pictureContainer">
          <Picture
            alt="Dew on a dandelion"
            srcSets={[
              { media: "(max-width: 360px)", srcSet: "/img/mobile/dew_on_a_dandelion.jpg" },
            ]}
            src="/img/desktop/dew_on_a_dandelion.jpg"
            sizeAuto="width"
          />
          <div className="pictureFrame" />
        </div>
        <figcaption className="figcaption">
          <cite className="citation">
            “Les graines d’un vieillissement en bonne santé se sèment tôt
          </cite>
          <div className="author">
            <span className="smokeLetter">K</span>
            <span className="smokeLetter">o</span>
            <span className="smokeLetter">f</span>
            <span className="smokeLetter">i</span>
            <span> </span>
            <span className="smokeLetter">A</span>
            <span className="smokeLetter">n</span>
            <span className="smokeLetter">n</span>
            <span className="smokeLetter">a</span>
            <span className="smokeLetter">n</span>
          </div>
        </figcaption>
      </figure>
    </main>
  );
}
