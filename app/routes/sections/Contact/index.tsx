import type { Section } from "~/contexts/SectionRefsContext";

interface ContactProps {
  section: Section;
  googleMapSrc: string;
}

export function Contact({ section, googleMapSrc }: ContactProps) {
  return (
    <section ref={section.ref} className="section" id={section.hash}>
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
  );
} 