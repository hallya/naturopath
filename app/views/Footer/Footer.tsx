import type { LinksFunction } from "@vercel/remix";
import { Suspense } from "react";
import styles from "./Footer.styles.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

function FooterContent() {
  return (
    <footer>
    </footer>
  );
}

export function Footer() {
  return (
    <Suspense fallback={null}>
      <FooterContent />
    </Suspense>
  );
}
