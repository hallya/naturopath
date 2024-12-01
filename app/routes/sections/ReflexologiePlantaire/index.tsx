import type { Section } from "~/contexts/SectionRefsContext";

interface ReflexologiePlantaireProps {
  section: Section;
}

export function ReflexologiePlantaire({ section }: ReflexologiePlantaireProps) {
  return (
    <section ref={section.ref} className="section" id={section.hash}>
      <h2 className="section-title">Réflexologie plantaire</h2>

      <div className="service-content">
        <div className="service-intro">
          <p className="service-highlight">
            La réflexologie plantaire est une technique thérapeutique millénaire qui considère le pied
            comme le miroir du corps, où chaque zone réflexe correspond à un organe ou une partie
            spécifique.
          </p>
        </div>

        <div className="service-details">
          <article className="info-card">
            <h3>Qu&apos;est-ce que c&apos;est ?</h3>
            <p>
              Cette approche thérapeutique consiste en un soin complet des pieds, utilisant des
              pressions et lissages précis sur des zones réflexes spécifiques.
            </p>
            <p>
              Chaque point travaillé correspond à une projection d&apos;un organe, permettant
              d&apos;agir à distance sur l&apos;ensemble du corps.
            </p>
          </article>

          <article className="info-card">
            <h3>Origines et histoire</h3>
            <p>
              Ancrée dans la Médecine Traditionnelle Chinoise, la réflexologie plantaire partage ses
              fondements avec l&apos;acupression, le shiatsu et l&apos;acupuncture.
            </p>
            <p>
              Son histoire remonte à plus de 5000 ans, avec des traces retrouvées en Chine et en Égypte
              ancienne, notamment sur le sarcophage d&apos;Ankhmahor (2330 av. J.-C.).
            </p>
            <p>
              Au 20e siècle, le Dr Fitzgerald, médecin ORL, a contribué à sa reconnaissance moderne en
              étudiant les effets antalgiques des pressions plantaires.
            </p>
          </article>

          <article className="info-card">
            <h3>Bienfaits</h3>
            <ul className="benefits-list">
              <li>Rééquilibrage énergétique du corps</li>
              <li>Libération des tensions physiques</li>
              <li>Effet relaxant et régénérant</li>
              <li>Action sur la circulation énergétique</li>
              <li>Détente profonde et apaisement</li>
            </ul>
          </article>

          <div className="service-note">
            <p>
              <strong>Note importante :</strong> Bien que généralement très relaxante, la réflexologie
              reste un soin thérapeutique. Certains points peuvent être sensibles lors du traitement,
              ce qui est normal et fait partie du processus de soin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 