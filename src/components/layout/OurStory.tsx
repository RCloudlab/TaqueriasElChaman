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
    meses > 0
      ? (años > 0 ? " y " : "") + meses + (meses === 1 ? " mes" : " meses")
      : ""
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
        <h2 className=" text-center text-2xl sm:text-4xl font-bold text-red-900 mb-6">
          ¡NUESTRA HISTORIA!
        </h2>

        <p className="text-gray-700 md:leading-relaxed mb-6">
          Taquerías El Chamán nació de un sueño y de mi pasión por la cocina.
          Tras años como panadero, busqué un nuevo camino y me adentré en el
          mundo de las taquerías sin experiencia, pero con ganas de aprender.
        </p>

        <p className="text-gray-200 md:leading-relaxed mb-6">
          Trabajé en varios locales hasta perfeccionar el sazón que hoy nos
          distingue, mientras construía mi propio espacio a mano, poco a poco,
          hasta convertirlo en hogar.
        </p>

        <p className="text-gray-200 md:leading-relaxed mb-6">
          Hoy, después de {tiempo}, seguimos compartiendo nuestra pasión:
          nuestros platillos preparados con cariño y servidos en un ambiente
          cercano, ideales para disfrutar por la tarde y la noche.
        </p>

        <p className="text-gray-200 md:leading-relaxed">
          En El Chamán, cada taco cuenta una historia, y esa historia continúa
          contigo.
        </p>
      </div>
    </section>
  );
};
