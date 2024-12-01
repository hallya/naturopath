import type { Section } from "~/contexts/SectionRefsContext";

interface NaturopathieProps {
  section: Section;
}

export function Naturopathie({ section }: NaturopathieProps) {
  return (
    <section ref={section.ref} className="section" id={section.hash}>
      <h2 className="section-title">La naturopathie</h2>

      <div className="service-content">
        <div className="service-intro">
          <p className="service-highlight">
            La naturopathie est une approche holistique de la santé, reconnue par l&apos;OMS depuis
            2001. Elle vise à maintenir ou restaurer la santé par des moyens naturels, en suivant le
            principe fondamental d&apos;Hippocrate : &quot;d&apos;abord ne pas nuire&quot;.
          </p>
        </div>

        <div className="service-details">
          <article className="info-card">
            <h3>Une approche globale</h3>
            <p>
              La naturopathie considère l&apos;individu dans son ensemble, reconnaissant
              l&apos;interdépendance entre le corps et l&apos;esprit.
            </p>
            <p>
              Elle travaille en complémentarité avec la médecine conventionnelle pour accompagner
              chacun vers un meilleur équilibre de santé.
            </p>
          </article>

          <article className="info-card">
            <h3>Les trois piliers</h3>
            <ul className="pillars-list">
              <li>
                <span className="pillar-title">Alimentation</span>
                <span className="pillar-desc">Nutrition adaptée et personnalisée</span>
              </li>
              <li>
                <span className="pillar-title">Activité physique</span>
                <span className="pillar-desc">Mouvement et exercices adaptés</span>
              </li>
              <li>
                <span className="pillar-title">Équilibre émotionnel</span>
                <span className="pillar-desc">Gestion du stress et des émotions</span>
              </li>
            </ul>
          </article>

          <article className="info-card">
            <h3>Outils thérapeutiques</h3>
            <div className="tools-grid">
              <div className="tool-item">
                <p>Phytothérapie</p>
                <small>Plantes médicinales</small>
              </div>
              <div className="tool-item">
                <p>Aromathérapie</p>
                <small>Huiles essentielles</small>
              </div>
              <div className="tool-item">
                <p>Nutrithérapie</p>
                <small>Micronutrition</small>
              </div>
              <div className="tool-item">
                <p>Techniques manuelles</p>
                <small>Massages, réflexologie</small>
              </div>
            </div>
          </article>

          <article className="info-card">
            <h3>Domaines d&apos;application</h3>
            <div className="conditions-grid">
              <div className="condition-category">
                <h4>Prévention</h4>
                <p>Maintien de la santé et équilibre de vie</p>
              </div>
              <div className="condition-category">
                <h4>Accompagnement</h4>
                <p>Stress, sommeil, digestion, hormones</p>
              </div>
              <div className="condition-category">
                <h4>Soutien</h4>
                <p>Maladies chroniques, convalescence</p>
              </div>
            </div>
          </article>

          <article className="info-card consultation-info">
            <h3>Déroulement des séances</h3>
            <p>
              Les consultations durent environ 1 heure et sont suivies d&apos;une fiche de conseils
              personnalisés dans les 48 heures.
            </p>
            <p>
              Le rythme des séances est adapté à chacun, pouvant être mensuel, trimestriel ou
              saisonnier selon vos besoins.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
} 