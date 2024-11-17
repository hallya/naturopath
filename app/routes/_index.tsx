import type { LinksFunction } from "@vercel/remix";
import styles from "~/styles/_index.styles.css";
import { Picture } from "../views";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function IndexRoute() {
  return (
    <main className="mainContainer">
      <div className="videoContainer">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="backgroundVideo"
        >
          <source src="/video/4779866-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
      </div>

      <section className="section">
        <div className="logo">
          <Picture alt="" src="/img/logo.webp" sizeAuto="height" loading="eager" />
        </div>
        <h1 className="title">LES SOINS DE LEA</h1>
        <h2 className="text">
          Praticienne en massage bien-être & énergétique à Bordeaux (33)
        </h2>
      </section>
    </main>
  );
}
