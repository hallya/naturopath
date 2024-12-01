import type { Section } from "~/contexts/SectionRefsContext";

interface TarifsProps {
  section: Section;
}

export function Tarifs({ section }: TarifsProps) {
  return (
    <section ref={section.ref} className="section" id={section.hash}>
      <h2 className="section-title">Tarifs</h2>

      <div className="tarifs-container">
        <div className="tarifs-grid">
          <article className="tarif-card">
            <div className="tarif-header">
              <h3>Consultation Naturopathie</h3>
              <div className="tarif-price">60€</div>
            </div>
            <div className="tarif-details">
              <p>Première consultation (1h30)</p>
              <ul className="tarif-features">
                <li>Bilan de vitalité complet</li>
                <li>Analyse des habitudes de vie</li>
                <li>Programme personnalisé</li>
                <li>Suivi par email pendant 3 mois</li>
              </ul>
            </div>
          </article>

          <article className="tarif-card">
            <div className="tarif-header">
              <h3>Suivi Naturopathie</h3>
              <div className="tarif-price">45€</div>
            </div>
            <div className="tarif-details">
              <p>Consultation de suivi (1h)</p>
              <ul className="tarif-features">
                <li>Ajustement du programme</li>
                <li>Accompagnement personnalisé</li>
                <li>Nouvelles recommandations</li>
              </ul>
            </div>
          </article>

          <article className="tarif-card">
            <div className="tarif-header">
              <h3>Réflexologie Plantaire</h3>
              <div className="tarif-price">50€</div>
            </div>
            <div className="tarif-details">
              <p>Séance complète (1h)</p>
              <ul className="tarif-features">
                <li>Bilan énergétique</li>
                <li>Massage des zones réflexes</li>
                <li>Conseils personnalisés</li>
              </ul>
            </div>
          </article>

          <article className="tarif-card">
            <div className="tarif-header">
              <h3>Massage Bien-être</h3>
              <div className="tarif-price">55€</div>
            </div>
            <div className="tarif-details">
              <p>Séance relaxante (1h)</p>
              <ul className="tarif-features">
                <li>Massage personnalisé</li>
                <li>Techniques adaptées</li>
                <li>Moment de détente</li>
              </ul>
            </div>
          </article>
        </div>

        <div className="tarif-note">
          <p>
            <strong>Note :</strong> Les tarifs indiqués sont donnés à titre indicatif et peuvent être
            ajustés selon vos besoins spécifiques. N&apos;hésitez pas à me contacter pour plus
            d&apos;informations.
          </p>
        </div>
      </div>
    </section>
  );
} 