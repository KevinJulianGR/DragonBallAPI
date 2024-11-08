import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <main className="about-container">
      <div className="about-content">
        <h1 className="about-title">Bienvenido a Dragon Ball API</h1>
        <section className="about-section">
          <h2>¿Qué es este proyecto?</h2>
          <p>
            Bienvenido al universo de Dragon Ball en forma de API. Este
            es un espacio donde la magia de la serie que todos amamos se
            encuentra con la tecnología. Aquí encontrarás información
            sobre tus personajes favoritos, desde los poderosos Saiyajin
            hasta los terrícolas más valientes, incluyendo todas sus
            transformaciones y los planetas que han visitado en sus
            aventuras.
          </p>
        </section>
        <section className="about-section">
          <h2>Un poco sobre mí</h2>
          <p>
            ¡Hola! Soy Kevin Guaquez, un desarrollador y fan apasionado
            de Dragon Ball. Como muchos de ustedes, crecí viendo las
            aventuras de Goku y sus amigos, y siempre soñé con crear
            algo que pudiera compartir con otros fans de la serie.
          </p>
        </section>
        <section className="about-section">
          <h2>¿Por qué creé esta API?</h2>
          <p>
            Este proyecto nació de mi amor por Dragon Ball y mi deseo de
            crear algo útil para la comunidad. Quería construir un
            puente entre el mundo del desarrollo y el universo de
            Dragon Ball, permitiendo a otros fans y desarrolladores
            crear sus propias aplicaciones y proyectos inspirados en la
            serie.
          </p>
        </section>
        <section className="about-section">
          <h2>Tecnologías utilizadas</h2>
          <p>
            Esta API está construida con mucho cariño usando tecnologías
            modernas que aseguran su velocidad y confiabilidad.
            Utilizamos React para la interfaz, que hace que la
            experiencia sea fluida y agradable, junto con otras
            herramientas que mantienen todo funcionando de manera
            eficiente.
          </p>
        </section>
        <section className="about-section">
          <h2>Nota sobre derechos de autor</h2>
          <p>
            Dragon Ball y todos sus personajes son creación del
            brillante Akira Toriyama y propiedad de Toei Animation.
            Este es un proyecto hecho por fans para fans, sin ningún
            fin comercial, creado con respeto y admiración por la obra
            original.
          </p>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;