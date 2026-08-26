/**
 * Estilo: página personal editorial. Una presentación cálida, texto indentado y ninguna animación.
 */
export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="profile-page">
      <article className="personal-site" aria-labelledby="profile-name">
        <header className="profile-hero">
          <div className="photo-frame" role="img" aria-label="Espacio reservado para foto de perfil">
            <span>Foto de<br />perfil</span>
          </div>

          <div className="hero-copy">
            <p className="eyebrow">PERFIL PERSONAL</p>
            <h1 id="profile-name">Tu nombre completo</h1>
            <p className="hero-text">
              Me interesa aprender, crear y aportar ideas que conviertan la tecnología en soluciones útiles.
            </p>
            <p className="photo-note">Reemplaza el recuadro por tu foto de perfil.</p>
          </div>
        </header>

        <div className="content-rule" aria-hidden="true" />

        <div className="profile-content">
          <section className="profile-section" aria-labelledby="about-title">
            <p className="section-number">01</p>
            <div>
              <h2 id="about-title">Sobre mí</h2>
              <p>
                Soy una persona en formación, con interés en comprender cómo funcionan las herramientas
                digitales y utilizarlas de manera creativa, clara y responsable.
              </p>
            </div>
          </section>

          <section className="profile-section" aria-labelledby="interests-title">
            <p className="section-number">02</p>
            <div>
              <h2 id="interests-title">Intereses profesionales</h2>
              <ul className="interest-list">
                <li>Desarrollo de páginas web claras, ordenadas y accesibles.</li>
                <li>Tecnología aplicada a la solución de problemas cotidianos.</li>
                <li>Aprendizaje continuo y fortalecimiento de habilidades digitales.</li>
              </ul>
            </div>
          </section>

          <section className="profile-section" aria-labelledby="contact-title">
            <p className="section-number">03</p>
            <div>
              <h2 id="contact-title">Contacto</h2>
              <p>
                Para comunicarte conmigo, escribe a <a href="mailto:tu-correo@ejemplo.com">tu-correo@ejemplo.com</a>.
              </p>
            </div>
          </section>
        </div>

        <footer className="profile-footer">
          <span>Hecho como página personal</span>
          <span>{currentYear}</span>
        </footer>
      </article>
    </main>
  );
}
