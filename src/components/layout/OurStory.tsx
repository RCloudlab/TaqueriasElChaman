import { IMAGES } from "../../constants/images";

export const OurStory = () => {

  const fechaApertura = new Date("2024-07-10");
  const hoy = new Date();

  const difMeses =
    (hoy.getFullYear() - fechaApertura.getFullYear()) * 12 +
    (hoy.getMonth() - fechaApertura.getMonth());

  const años = Math.floor(difMeses / 12);
  const meses = difMeses % 12;

  const tiempo = `${años > 0 ? años + (años === 1 ? " año" : " años") : ""}${
    meses > 0 ? (años > 0 ? " y " : "") + meses + (meses === 1 ? " mes" : " meses") : ""
  }`;

  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="md:w-1/2 w-full">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={IMAGES.storyMobile}
            type="image/png"
          />
          <source srcSet={IMAGES.story} />
          <source src={IMAGES.storyweb} />
          <img
            src={IMAGES.storyjpg}
            alt="Taquero preparando tacos al pastor"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      <div className="text-pretty md:w-1/2 w-full bg-neutral-900 text-white p-10 flex flex-col justify-center">
        <h2 className=" text-center text-2xl sm:text-4xl font-bold text-red-600 mb-6">
          ¡NUESTRA HISTORIA!
        </h2>

        <p className="text-gray-700 md:leading-relaxed mb-6">
          Taquerías El Chamán nació de un sueño y de la pasión por la cocina. Durante varios años trabajé como panadero, aprendiendo la importancia de la dedicación, el esfuerzo diario y el trabajo con las manos. Con el tiempo, la vida me llevó a buscar un nuevo camino, y fue entonces cuando me adentré en el mundo de las taquerías, sin saber absolutamente nada, pero con ganas de aprenderlo todo.
        </p>

        <p className="text-gray-200 md:leading-relaxed mb-6">
          Trabajé en distintas taquerías, observando, practicando y perfeccionando el sazón que hoy nos distingue. Mientras hacía mis jornadas nocturnas, al terminar, me dedicaba a construir mi propio espacio. Mesa por mesa, cajón por cajón, cocina y detalles… todo hecho a mano, con paciencia y corazón, en un local rentado que poco a poco se convirtió en hogar.
        </p>

        <p className="text-gray-200 md:leading-relaxed mb-6">
          Hoy, después de {tiempo}, seguimos creciendo y compartiendo lo que más nos apasiona: nuestros tacos de carne al pastor, preparados con cariño y servidos en un ambiente cercano. Abrimos en horario de tarde-noche porque sabemos que los mejores tacos se disfrutan cuando el día ya bajó el ritmo.
        </p>

        <p className="text-gray-200 md:leading-relaxed">
          En El Chamán, cada taco cuenta una historia, y esa historia continúa contigo.
        </p>
      </div>
    </section>
  );
};
