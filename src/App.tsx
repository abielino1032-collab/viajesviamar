/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <>
      <nav>
        <a className="brand" href="#inicio">
          VIAMAR<small>AGENCIA DE VIAJES</small>
        </a>
        <div className="links">
          <a href="#experiencias">Experiencias</a>
          <a href="#destinos">Destinos</a>
          <a href="#incluye">Experiencia premium</a>
          <a href="#proceso">Cómo trabajamos</a>
          <a
            className="btn"
            href="https://wa.me/message/NH4IZVJIGD4JG1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotizar
          </a>
        </div>
      </nav>

      <header className="hero" id="inicio">
        <div className="wrap">
          <svg
            className="sun"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M50 4v20M50 76v20M4 50h20M76 50h20M17 17l14 14M69 69l14 14M83 17L69 31M31 69L17 83" />
            <path
              d="M50 14c-3 8-3 14 0 20M50 66c3 8 3 14 0 20M14 50c8-3 14-3 20 0M66 50c8 3 14 3 20 0"
              opacity=".6"
            />
          </svg>
          <h1>
            Viaja con propósito. <em>Vive</em> tu próxima experiencia.
          </h1>
          <p className="lead">
            Santuarios, historias, encuentros y momentos de fe que se convierten en recuerdos
            para toda la vida. Nosotros nos encargamos de cada detalle del camino.
          </p>
          <div className="hero-rating" aria-label="Calificación de 4.9 sobre 5 estrellas">
            <div className="rating-stars" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="rating-star-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="rating-val">4.9</span>
            <span className="rating-divider" aria-hidden="true">•</span>
            <span className="rating-caption">Calificación promedio de nuestros viajeros</span>
          </div>
          <div className="cta">
            <a
              className="btn ghost"
              href="https://wa.me/message/NH4IZVJIGD4JG1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Planea tu viaje por WhatsApp
            </a>
          </div>
        </div>
        <svg
          className="road"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="wave-back"
            d="M0 90V58C240 22 420 70 720 46C1020 22 1200 66 1440 44V90Z"
            fill="#0d2622"
            opacity=".55"
          >
            <animate
              attributeName="d"
              dur="9s"
              repeatCount="indefinite"
              values="
                M0 90V58C240 22 420 70 720 46C1020 22 1200 66 1440 44V90Z;
                M0 90V48C220 68 460 26 720 56C980 80 1220 30 1440 54V90Z;
                M0 90V64C260 32 440 64 720 38C1000 16 1240 60 1440 40V90Z;
                M0 90V58C240 22 420 70 720 46C1020 22 1200 66 1440 44V90Z
              "
            />
          </path>
          <path
            className="wave-front"
            d="M0 90V72C260 42 460 80 760 64C1060 48 1220 74 1440 66V90Z"
            fill="#fbf9f4"
          >
            <animate
              attributeName="d"
              dur="7s"
              repeatCount="indefinite"
              values="
                M0 90V72C260 42 460 80 760 64C1060 48 1220 74 1440 66V90Z;
                M0 90V65C230 84 480 52 760 72C1040 90 1260 54 1440 70V90Z;
                M0 90V76C280 50 440 72 760 56C1080 42 1200 70 1440 62V90Z;
                M0 90V72C260 42 460 80 760 64C1060 48 1220 74 1440 66V90Z
              "
            />
          </path>
        </svg>
      </header>

      <main>
        <section className="wrap purpose" aria-labelledby="t-prop">
          <div>
            <h2 id="t-prop">Un viaje distinto desde el primer día</h2>
            <p>
              En Viamar no vendemos paquetes genéricos. Construimos y diseñamos cada experiencia a
              tu medida: el ritmo, los hoteles, las etapas y los momentos que importan para ti y tu
              grupo.
            </p>
            <p>
              Trabajamos con viajeros de Monterrey y de todo México que buscan algo más que conocer
              un lugar: llegar a él con sentido, acompañados y sin preocuparse por la logística.
            </p>
          </div>
          <blockquote className="quote">
            Tras una huella que permanece.
            <span>
              Peregrinaciones, circuitos y viajes premium con acompañamiento de principio a fin.
            </span>
          </blockquote>
        </section>

        <section className="experiences" id="experiencias" aria-labelledby="t-exp">
          <div className="wrap">
            <div className="exp-header">
              <span className="eyebrow">Maneras de viajar</span>
              <h2 id="t-exp">Experiencias diseñadas con alma</h2>
              <p className="intro">
                Cada viaje responde a un anhelo particular: el sosiego y lujo del agua, la llamada profunda de lo sagrado o el pulso vibrante de nuevas ciudades recorridas a tu ritmo.
              </p>
            </div>

            <div className="exp-grid">
              {/* Cruceros */}
              <article className="exp-card">
                <div className="exp-icon-wrap" aria-hidden="true">
                  <svg
                    className="exp-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                    <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.03" />
                    <path d="M12 10V4" />
                    <path d="m4.5 13 7.5-3.5 7.5 3.5" />
                    <path d="M12 4c2.5 0 4 1.5 4 3.5" />
                  </svg>
                </div>
                <span className="exp-tag">Alta Mar y Fluviales</span>
                <h3>Cruceros</h3>
                <p className="exp-subtitle">El arte de navegar sin apresurarse</p>
                <p className="exp-desc">
                  La tranquilidad de despertar en un nuevo puerto cada mañana sin tener que desempacar dos veces. Cruceros fluviales íntimos por los ríos más emblemáticos de Europa y travesías marítimas selectas con alta gastronomía y servicio de primera categoría.
                </p>
                <ul className="exp-features">
                  <li>Camarotes exteriores y suites de selección</li>
                  <li>Gastronomía gourmet y excursiones curadas en tierra</li>
                  <li>Todo el confort, traslados y logística resuelta a bordo</li>
                </ul>
                <a
                  className="exp-link"
                  href="https://wa.me/message/NH4IZVJIGD4JG1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar cruceros <span>→</span>
                </a>
              </article>

              {/* Peregrinaciones */}
              <article className="exp-card exp-card-featured">
                <div className="exp-icon-wrap" aria-hidden="true">
                  <svg
                    className="exp-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                </div>
                <span className="exp-tag">Nuestra Especialidad</span>
                <h3>Peregrinaciones</h3>
                <p className="exp-subtitle">Caminos con sentido y trascendencia</p>
                <p className="exp-desc">
                  Nuestra firma distintiva. Recorridos por los grandes santuarios de fe —Camino de Santiago, Roma, Tierra Santa y santuarios marianos— con acompañamiento de sacerdotes, celebraciones de misa y momentos íntimos de reflexión comunitaria.
                </p>
                <ul className="exp-features">
                  <li>Acompañamiento sacerdotal y espiritual continuo</li>
                  <li>Misas privadas en basílicas y santuarios históricos</li>
                  <li>Kit del peregrino y transporte de equipaje garantizado</li>
                </ul>
                <a
                  className="exp-link"
                  href="https://wa.me/message/NH4IZVJIGD4JG1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver peregrinaciones <span>→</span>
                </a>
              </article>

              {/* Circuitos */}
              <article className="exp-card">
                <div className="exp-icon-wrap" aria-hidden="true">
                  <svg
                    className="exp-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="6" cy="19" r="3" />
                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
                    <circle cx="18" cy="5" r="3" />
                  </svg>
                </div>
                <span className="exp-tag">Europa y el Mundo</span>
                <h3>Circuitos</h3>
                <p className="exp-subtitle">Cultura viva al compás de tu grupo</p>
                <p className="exp-desc">
                  Rutas diseñadas para recorrer múltiples ciudades sin el agotamiento de los tours masivos. Diseñadas a la medida para familias o grupos de amigos, combinando patrimonio histórico, gastronomía regional y tiempo libre genuino.
                </p>
                <ul className="exp-features">
                  <li>Guías expertos locales de habla hispana</li>
                  <li>Hoteles céntricos seleccionados por ubicación y calidez</li>
                  <li>Itinerarios flexibles adaptados a tu propio ritmo</li>
                </ul>
                <a
                  className="exp-link"
                  href="https://wa.me/message/NH4IZVJIGD4JG1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Diseñar circuito <span>→</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="dest" id="destinos" aria-labelledby="t-dest">
          <div className="wrap">
            <h2 id="t-dest">Destinos para 2027</h2>
            <p className="intro">
              Salidas con fechas y cupos limitados, y la opción de diseñar tu propio itinerario si
              viajas en familia, con amigos o con tu comunidad.
            </p>
            <div className="grid">
              <article className="card featured">
                <span className="when">Salida: julio 2027</span>
                <h3>Camino de Santiago</h3>
                <p>
                  Madrid, Sarria, Santiago de Compostela, Oviedo y Gijón. Once desayunos, dos cenas, kit
                  del peregrino, traslado de maletas y entrada a la Cámara Santa.
                </p>
                <div className="meta">Cotización personalizada</div>
                <a
                  className="more"
                  href="https://wa.me/message/NH4IZVJIGD4JG1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservar lugar
                </a>
              </article>

              <article className="card">
                <span className="when">Salida: septiembre–octubre 2027</span>
                <h3>Camino Frances</h3>
                <p>
                  Hacia un encuentro que permanece. Vuelo internacional, hoteles de selección,
                  transporte terrestre y acompañamiento espiritual durante todo el recorrido.
                </p>
                <div className="meta">Cotización personalizada</div>
                <a
                  className="more"
                  href="https://wa.me/message/NH4IZVJIGD4JG1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservar lugar
                </a>
              </article>

              <article className="card">
                <span className="when">Fechas a tu medida</span>
                <h3>Circuitos por Europa</h3>
                <p>
                  Lourdes, Barcelona, Sevilla y más. Armamos el recorrido de santuarios y ciudades que
                  quieras, con guías de habla hispana y entradas incluidas.
                </p>
                <div className="meta">Cotización personalizada</div>
                <a
                  className="more"
                  href="https://wa.me/message/NH4IZVJIGD4JG1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pedir itinerario
                </a>
              </article>

              <article className="card">
                <span className="when">Fechas a tu medida</span>
                <h3>Tailandia</h3>
                <p>
                  Varias ciudades, un solo plan. Vuelos, hoteles y traslados coordinados para que solo
                  te ocupes de disfrutar.
                </p>
                <div className="meta">Cotización personalizada</div>
                <a
                  className="more"
                  href="https://wa.me/message/NH4IZVJIGD4JG1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pedir itinerario
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="includes" id="incluye" aria-labelledby="t-inc">
          <div className="wrap">
            <h2 id="t-inc">La experiencia premium incluye</h2>
            <p>Lo esencial ya viene resuelto, para que el camino sea lo único que tengas en mente.</p>
            <div className="inc-grid">
              <div className="inc">
                <h3>Vuelo internacional</h3>
                <p>Salida desde México con la logística coordinada por nosotros.</p>
              </div>
              <div className="inc">
                <h3>Hoteles de selección</h3>
                <p>Alojamiento elegido por ubicación y comodidad, no solo por precio.</p>
              </div>
              <div className="inc">
                <h3>Transporte terrestre</h3>
                <p>Traslados y, en el Camino, transporte de tus maletas entre etapas.</p>
              </div>
              <div className="inc">
                <h3>Desayunos y cenas</h3>
                <p>Comidas incluidas según el itinerario de cada viaje.</p>
              </div>
              <div className="inc">
                <h3>Entradas y guías de habla hispana</h3>
                <p>Recorridos explicados en tu idioma, con acceso a los sitios clave.</p>
              </div>
              <div className="inc">
                <h3>Kit del peregrino</h3>
                <p>Lo necesario para empezar el camino bien preparado.</p>
              </div>
              <div className="inc">
                <h3>Acompañamiento espiritual</h3>
                <p>Un sacerdote viaja con el grupo en las peregrinaciones.</p>
              </div>
              <div className="inc">
                <h3>Embajador Viamar en destino</h3>
                <p>Una persona del equipo contigo en el lugar, para resolver lo que surja.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="process" id="proceso" aria-labelledby="t-proc">
          <div className="wrap">
            <h2 id="t-proc">Así diseñamos tu viaje</h2>
            <ol className="steps">
              <li>
                <h3>Escuchamos historias</h3>
                <p>
                  Nos escribes por WhatsApp con el destino, las fechas aproximadas y cuántas
                  personas viajan.
                </p>
              </li>
              <li>
                <h3>Entendemos sueños</h3>
                <p>Te enviamos un itinerario con hoteles, etapas, qué incluye y precio por persona.</p>
              </li>
              <li>
                <h3>Lo convertimos en realidad</h3>
                <p>
                  Cambiamos el ritmo, los hoteles o las visitas hasta que el viaje sea justo lo que
                  buscas.
                </p>
              </li>
              <li>
                <h3>Tú solo viaja</h3>
                <p>Te acompañamos antes, durante y después, con un embajador Viamar en destino.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="final" aria-labelledby="t-cta">
          <div className="wrap">
            <h2 id="t-cta">Viaja como debe ser</h2>
            <p>
              Escríbenos y cuéntanos a dónde quieres llegar. Nosotros nos encargamos de cada
              detalle del camino.
            </p>
            <a
              className="btn"
              href="https://wa.me/message/NH4IZVJIGD4JG1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Escríbenos por WhatsApp
            </a>
            <div className="contact">
              <a href="tel:+528140075925">+52 814 007 5925</a>
              <a
                href="https://www.instagram.com/viajesviamar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @viajesviamar
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        © 2026 Viamar Agencia de Viajes. Precios por persona en habitación doble, sujetos a cambios y
        disponibilidad.
      </footer>
    </>
  );
}


