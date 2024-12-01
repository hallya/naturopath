import type { Section } from "~/contexts/SectionRefsContext";

interface ParcoursProps {
  section: Section;
}

export function Parcours({ section }: ParcoursProps) {
  return (
    <section ref={section.ref} className="section" id={section.hash}>
      <h2 className="section-title">Parcours</h2>

      <div className="cv-container">
        <div className="cv-section">
          <h3 className="cv-section-title">Formations principales</h3>

          <div className="cv-timeline">
            <article className="cv-card">
              <div className="cv-card-header">
                <div>
                  <time className="cv-date">2021/2022</time>
                </div>
                <h4 className="cv-card-title">Naturopathe certifiée</h4>
              </div>
              <div className="cv-card-body">
                <p>Diplômée de l&apos;Institut Euronature Bordeaux</p>
                <p className="cv-highlight">Formation de 1200h en présentiel</p>
              </div>
            </article>

            <article className="cv-card">
              <div className="cv-card-header">
                <div>
                  <time className="cv-date">2022</time>
                </div>
                <h4 className="cv-card-title">Praticienne en Réflexologie Plantaire</h4>
              </div>
              <div className="cv-card-body">
                <p>Institut Euronature Bordeaux</p>
              </div>
            </article>

            <article className="cv-card">
              <div className="cv-card-header">
                <div>
                  <time className="cv-date">2022</time>
                </div>
                <h4 className="cv-card-title">Formation au massage bien-être</h4>
              </div>
              <div className="cv-card-body">
                <p>À visée relaxante et thérapeutique, par Cécile</p>
              </div>
            </article>
          </div>
        </div>

        <div className="cv-section">
          <h3 className="cv-section-title">Séminaires et conférences</h3>

          <div className="cv-timeline">
            {[
              {
                date: "Juin 2023",
                title: "La thyroïde, clef de notre énergie",
                author: "Danielle Boussard",
              },
              {
                date: "Novembre 2022",
                title: "Endométriose part I & II",
                author: "Danielle Boussard",
              },
            ].map((seminar, index) => (
              <article key={index} className="cv-card cv-card-compact">
                <div className="cv-card-header">
                  <div>
                    <time className="cv-date">{seminar.date}</time>
                  </div>
                  <h4 className="cv-card-title">
                    {seminar.title}
                    {seminar.author && <small className="cv-author">par {seminar.author}</small>}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 