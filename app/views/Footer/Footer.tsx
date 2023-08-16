import type { LinksFunction } from "@vercel/remix";
import styles from "./Footer.styles.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export function Footer() {
  return (
    <footer>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
    </footer>
  );
}
