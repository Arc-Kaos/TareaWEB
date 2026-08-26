/**
 * Estilo: ficha académica minimalista. Una columna indentada, tinta azul y ninguna animación.
 */
const placeholderPhoto = "/manus-storage/perfil-placeholder_cdaf5ef8.png";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="profile-page">
      <article className="profile-sheet" aria-labelledby="profile-name">
        <header className="profile-header">
          <p className="document-label">PERFIL PERSONAL · INTERESES PROFESIONALES</p>
          <div className="header-rule" aria-hidden="true" />
        </header>

        <section className="intro-section" aria-label="Presentación">
          <img
            className="profile-photo"
            src={placeholderPhoto}
            alt="Espacio reservado para foto de perfil"
          />
          <div className="intro-copy">
            <div className="name-block">
              <h1 id="profile-name">Tu nombre completo</h1>
              <p className="role">Estudiante / profesional en formación</p>
            </div>
            <p className="photo-note">Sustituye este marcador por tu foto de perfil.</p>
          </div>
        </section>

        <section className="content-section" aria-labelledby="about-title">
          <h2 id="about-title">Sobre mí</h2>
          <p>
            Me interesa diseñar y desarrollar soluciones digitales claras, útiles y accesibles.
            Esta página reúne las áreas en las que deseo seguir aprendiendo y creciendo
            profesionalmente.
          </p>
        </section>

        <section className="content-section interests" aria-labelledby="interests-title">
          <h2 id="interests-title">Intereses profesionales</h2>
          <ul>
            <li>Desarrollo web y creación de experiencias digitales accesibles.</li>
            <li>Tecnología aplicada a la resolución de problemas cotidianos.</li>
            <li>Aprendizaje continuo y fortalecimiento de habilidades digitales.</li>
          </ul>
        </section>

        <section className="content-section" aria-labelledby="contact-title">
          <h2 id="contact-title">Contacto</h2>
          <p>Correo electrónico: tu-correo@ejemplo.com</p>
        </section>

        <footer className="profile-footer">
          <span>Perfil personal</span>
          <span>{currentYear}</span>
        </footer>
      </article>
    </main>
  );
}
