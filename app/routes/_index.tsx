import { useLoaderData } from "@remix-run/react";
import type { LinksFunction } from "@vercel/remix";
import { useMemo } from "react";
import { useSections } from "~/contexts/SectionRefsContext";
import styles from "~/styles/_index.styles.css";
import { LeftNavigation, Picture } from "../views";
import { useSetUrlHashOnIntersection } from "./useSetUrlHasOnIntersection";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export async function loader() {
  return {
    googleMapSrc: `https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=38+Rue+Pierre+Massieux,+33400+Talence/@44.805014,-0.5777371,17z&language=fr&zoom=15&maptype=roadmap`,
  };
}

export default function IndexRoute() {
  const { googleMapSrc } = useLoaderData<typeof loader>();
  const sections = useSections();

  const sectionRefs = useMemo(
    () => Object.values(sections).map(section => ({ ref: section.ref })),
    [sections],
  );

  useSetUrlHashOnIntersection(sectionRefs);

  return (
    <>
      <LeftNavigation sections={Object.values(sections)} />
      <main className="mainContainer">
        <div className="videoContainer">
          <video autoPlay loop muted playsInline className="backgroundVideo">
            <source src="/video/homepage-bg-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="home-container">
          <section ref={sections.home.ref} className="section" id={sections.home.hash}>
            <div className="logo">
              <Picture alt="" src="/img/logo.webp" sizeAuto="height" loading="eager" />
            </div>
            <h1 className="title">LES SOINS DE LEA</h1>
            <h2 className="section-title">
              Praticienne en massage bien-être & énergétique à Bordeaux (33)
            </h2>
          </section>

          <section
            ref={sections.laNaturopathie.ref}
            className="section"
            id={sections.laNaturopathie.hash}
          >
            <h2 className="section-title">La naturopathie</h2>

            <div className="service-content">
              <div className="service-intro">
                <p className="service-highlight">
                  La naturopathie est une approche holistique de la santé, reconnue par l&apos;OMS
                  depuis 2001. Elle vise à maintenir ou restaurer la santé par des moyens naturels,
                  en suivant le principe fondamental d&apos;Hippocrate : &quot;d&apos;abord ne pas
                  nuire&quot;.
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
                    Elle travaille en complémentarité avec la médecine conventionnelle pour
                    accompagner chacun vers un meilleur équilibre de santé.
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
                    Les consultations durent environ 1 heure et sont suivies d&apos;une fiche de
                    conseils personnalisés dans les 48 heures.
                  </p>
                  <p>
                    Le rythme des séances est adapté à chacun, pouvant être mensuel, trimestriel ou
                    saisonnier selon vos besoins.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section ref={sections.parcours.ref} className="section" id={sections.parcours.hash}>
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
                          {seminar.author && (
                            <small className="cv-author">par {seminar.author}</small>
                          )}
                        </h4>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            ref={sections.reflexologiePlantaire.ref}
            className="section"
            id={sections.reflexologiePlantaire.hash}
          >
            <h2 className="section-title">Réflexologie plantaire</h2>

            <div className="service-content">
              <div className="service-intro">
                <p className="service-highlight">
                  La réflexologie plantaire est une technique thérapeutique millénaire qui considère
                  le pied comme le miroir du corps, où chaque zone réflexe correspond à un organe ou
                  une partie spécifique.
                </p>
              </div>

              <div className="service-details">
                <article className="info-card">
                  <h3>Qu&apos;est-ce que c&apos;est ?</h3>
                  <p>
                    Cette approche thérapeutique consiste en un soin complet des pieds, utilisant
                    des pressions et lissages précis sur des zones réflexes spécifiques.
                  </p>
                  <p>
                    Chaque point travaillé correspond à une projection d&apos;un organe, permettant
                    d&apos;agir à distance sur l&apos;ensemble du corps.
                  </p>
                </article>

                <article className="info-card">
                  <h3>Origines et histoire</h3>
                  <p>
                    Ancrée dans la Médecine Traditionnelle Chinoise, la réflexologie plantaire
                    partage ses fondements avec l&apos;acupression, le shiatsu et
                    l&apos;acupuncture.
                  </p>
                  <p>
                    Son histoire remonte à plus de 5000 ans, avec des traces retrouvées en Chine et
                    en Égypte ancienne, notamment sur le sarcophage d&apos;Ankhmahor (2330 av.
                    J.-C.).
                  </p>
                  <p>
                    Au 20e siècle, le Dr Fitzgerald, médecin ORL, a contribué à sa reconnaissance
                    moderne en étudiant les effets antalgiques des pressions plantaires.
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
                    <strong>Note importante :</strong> Bien que généralement très relaxante, la
                    réflexologie reste un soin thérapeutique. Certains points peuvent être sensibles
                    lors du traitement, ce qui est normal et fait partie du processus de soin.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section ref={sections.massage.ref} className="section" id={sections.massage.hash}>
            <h2 className="section-title">Massage bien-être</h2>

            <div className="service-content">
              <div className="service-intro">
                <p className="service-highlight">
                  Le massage bien-être est une approche naturelle et holistique qui vise à
                  harmoniser le corps et l&apos;esprit. En tant que naturopathe, je vous accompagne
                  sur le chemin d&apos;une santé naturelle à travers des techniques manuelles
                  adaptées.
                </p>
              </div>

              <div className="service-details">
                <article className="info-card">
                  <h3>Mon approche</h3>
                  <p>
                    En tant que praticienne en massage bien-être, je vous propose un accompagnement
                    personnalisé basé sur des techniques naturelles et des conseils
                    hygiéno-diététiques adaptés à vos besoins.
                  </p>
                </article>

                <article className="info-card">
                  <h3>Cadre légal</h3>
                  <ul className="legal-list">
                    <li>
                      Les massages proposés sont des massages de bien-être à but non thérapeutique
                    </li>
                    <li>Aucun diagnostic médical n&apos;est établi</li>
                    <li>Aucune prescription de médicaments n&apos;est délivrée</li>
                    <li>
                      Les compléments alimentaires conseillés ne sont pas remboursés par la sécurité
                      sociale
                    </li>
                  </ul>
                </article>

                <article className="info-card info-card-important">
                  <h3>Important</h3>
                  <div className="warning-box">
                    <p>
                      <strong>
                        Ne modifiez jamais un traitement médical en cours sans l&apos;avis de votre
                        médecin.
                      </strong>
                    </p>
                  </div>
                </article>

                <article className="info-card">
                  <h3>Remboursements</h3>
                  <p>
                    Les séances ne sont pas prises en charge par la sécurité sociale. Certaines
                    mutuelles peuvent proposer un remboursement partiel - n&apos;hésitez pas à vous
                    renseigner auprès de la vôtre.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section ref={sections.tarifs.ref} className="section" id={sections.tarifs.hash}>
            <h2 className="section-title">Tarifs</h2>
          </section>

          <section ref={sections.contact.ref} className="section" id={sections.contact.hash}>
            <h2 className="section-title">Contact et accès</h2>

            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-card">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="contact-details">
                      <h3>Adresse</h3>
                      <p>38 Rue Pierre Massieux</p>
                      <p>33400 Talence</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <div className="contact-details">
                      <h3>Horaires</h3>
                      <p>Du lundi au samedi</p>
                      <p>Sur rendez-vous uniquement</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div className="contact-details">
                      <h3>Téléphone</h3>
                      <p>
                        <a href="tel:+33764189601" className="phone-link">
                          07 64 18 96 01
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="map-container">
                <iframe
                  className="google-map"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={googleMapSrc}
                  title="Localisation du cabinet"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
