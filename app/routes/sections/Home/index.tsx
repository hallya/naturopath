import type { Section } from "~/contexts/SectionRefsContext";
import { Picture } from "~/views";

interface HomeProps {
  section: Section;
}

export function Home({ section }: HomeProps) {
  return (
    <section ref={section.ref} className="section" id={section.hash}>
      <div className="logo">
        <Picture alt="" src="/img/logo.webp" sizeAuto="height" loading="eager" />
      </div>
      <h1 className="title">LES SOINS DE LEA</h1>
      <h2 className="section-title">
        Praticienne en massage bien-être & énergétique à Bordeaux (33)
      </h2>
    </section>
  );
} 