/**
 * Estilo: página personal editorial en blanco y negro. Lectura simple, proyectos en lista y ninguna animación.
 */
export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="profile-page">
      <article className="personal-site" aria-labelledby="profile-name">
        <header className="profile-hero">
          <img
            className="profile-photo"
            src="/manus-storage/foto-perfil_e3d024f5.jpg"
            alt="Foto de perfil"
          />

          <div className="hero-copy">
            <p className="eyebrow">PÁGINA PERSONAL</p>
            <h1 id="profile-name">Mi espacio personal</h1>
            <p className="hero-text">
              Me interesa aprender, crear y aportar ideas que conviertan la tecnología en soluciones útiles.
            </p>
          </div>
        </header>

        <div className="profile-layout">
          <aside className="profile-aside" aria-label="Información de perfil">
            <section className="aside-section" aria-labelledby="about-title">
              <p className="section-number">01</p>
              <h2 id="about-title">Sobre mí</h2>
              <p>
                Soy una persona en formación, con interés en comprender las herramientas digitales y utilizarlas
                de manera creativa, clara y responsable.
              </p>
            </section>

            <section className="aside-section" aria-labelledby="interests-title">
              <p className="section-number">02</p>
              <h2 id="interests-title">Intereses</h2>
              <ul className="interest-list">
                <li>Desarrollo web y experiencias digitales accesibles.</li>
                <li>Tecnología aplicada a problemas cotidianos.</li>
                <li>Aprendizaje y habilidades digitales.</li>
              </ul>
            </section>
          </aside>

          <section className="projects-section" aria-labelledby="projects-title">
            <div className="projects-heading">
              <p className="section-number">03</p>
              <div>
                <p className="eyebrow">TRABAJO RECIENTE</p>
                <h2 id="projects-title">Proyectos</h2>
              </div>
            </div>

            <article className="project-item">
              <p className="project-index">01</p>
              <div>
                <h3>Página personal</h3>
                <p>
                  Diseño y desarrollo de una página web para presentar mi perfil, mi fotografía y mis intereses
                  profesionales de forma clara y sencilla.
                </p>
                <p className="project-tools">HTML · CSS · JavaScript</p>
              </div>
            </article>

            <article className="project-item">
              <p className="project-index">02</p>
              <div>
                <h3>Práctica de desarrollo web</h3>
                <p>
                  Trabajo de aprendizaje en desarrollo, enfocado en organizar contenido, aplicar estilos con CSS y
                  mejorar la presentación de una página web.
                </p>
                <p className="project-tools">HTML · CSS · JavaScript</p>
              </div>
            </article>
          </section>
        </div>

        <footer className="profile-footer">
          <span>Página personal</span>
          <span>{currentYear}</span>
        </footer>
      </article>
    </main>
  );
}
