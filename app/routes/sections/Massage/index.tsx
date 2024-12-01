import type { Section } from "~/contexts/SectionRefsContext";

interface MassageProps {
  section: Section;
}

export function Massage({ section }: MassageProps) {
  return (
    <section ref={section.ref} className="section" id={section.hash}>
      <h2 className="section-title">Massage bien-être</h2>

      <div className="service-content">
        <div className="service-intro">
          <p className="service-highlight">
            Le massage bien-être est une approche naturelle et holistique qui vise à harmoniser le
            corps et l&apos;esprit. En tant que naturopathe, je vous accompagne sur le chemin
            d&apos;une santé naturelle à travers des techniques manuelles adaptées.
          </p>
        </div>

        <div className="service-details">
          <article className="info-card">
            <h3>Mon approche</h3>
            <p>
              En tant que praticienne en massage bien-être, je vous propose un accompagnement
              personnalisé basé sur des techniques naturelles et des conseils hygiéno-diététiques
              adaptés à vos besoins.
            </p>
          </article>

          <article className="info-card">
            <h3>Cadre légal</h3>
            <ul className="legal-list">
              <li>Les massages proposés sont des massages de bien-être à but non thérapeutique</li>
              <li>Aucun diagnostic médical n&apos;est établi</li>
              <li>Aucune prescription de médicaments n&apos;est délivrée</li>
              <li>
                Les compléments alimentaires conseillés ne sont pas remboursés par la sécurité sociale
              </li>
            </ul>
          </article>

          <article className="info-card info-card-important">
            <h3>Important</h3>
            <div className="warning-box">
              <p>
                <strong>
                  Ne modifiez jamais un traitement médical en cours sans l&apos;avis de votre médecin.
                </strong>
              </p>
            </div>
          </article>

          <article className="info-card">
            <h3>Remboursements</h3>
            <p>
              Les séances ne sont pas prises en charge par la sécurité sociale. Certaines mutuelles
              peuvent proposer un remboursement partiel - n&apos;hésitez pas à vous renseigner auprès
              de la vôtre.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
} 