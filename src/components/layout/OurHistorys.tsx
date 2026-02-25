import { Typewriter } from "../ui/Typewriter";
import { IMAGES } from "../../constants/images";
import { motion } from "motion/react";

interface Textos {
  texto1: string;
  texto2: string;
  texto3: string;
  texto4: string;
}

interface Images {
  imagen1: string;
  imagen2: string;
}

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

const textos: Textos[] = [
  {
    texto1:
      "Taquerías El Chamán nació de un sueño y de mi pasión por la cocina. Tras años como panadero, busqué un nuevo camino y me adentré en el mundo de las taquerías sin experiencia, pero con ganas de aprender.",

    texto2:
      "Trabajé en varios locales hasta perfeccionar el sazón que hoy nos distingue, mientras construía mi propio espacio a mano, poco a poco, hasta convertirlo en hogar.",

    texto3: `Hoy, después de ${tiempo}, seguimos compartiendo nuestra pasión: nuestros platillos preparados con cariño y servidos en un ambiente cercano, ideales para disfrutar por la tarde y la noche.`,

    texto4:
      "En El Chamán, cada taco cuenta una historia, y esa historia continúa contigo.",
  },
];

const images: Images = {
  imagen1: IMAGES.storyweb,
  imagen2: IMAGES.collab3,
};

export const OurHistorys = () => {
  return (
    <section className="py-9 sm:py-20 px-12 m484:px-16 md:px-28 lg:px-36 bg-black text-white">
      <div>
        <Typewriter
          text="¡NUESTRA HISTORIA!"
          speed={80}
          className="text-center text-lg m355:text-2xl m484:text-4xl m820:text-5xl font-bold text-red-900 "
        />
      </div>

      <div className="relative mt-4 h-2 mx-auto overflow-hidden mb-24">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="absolute inset-0 origin-left rounded-full 
               bg-gradient-to-r from-red-900 via-red-600 to-red-900"
        />

        <motion.div
          animate={{ x: ["-120%", "320%"] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          className="absolute top-0 h-full w-1/3 
               bg-gradient-to-r 
               from-transparent 
               via-white/80 
               to-transparent 
               blur-sm"
        />
      </div>

      <div className="flex flex-col gap-32">
        <div className="grid m940:grid-cols-2 items-center gap-10">
          <div className="flex flex-col gap-6 md:text-xl sm:text-lg text-sm">
            <motion.p
              initial={{ y: 50 }}
              whileInView={{ y: 0.5 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false }}
              className="text-gray-200 leading-relaxed overflow-hidden text-justify"
            >
              {textos[0].texto1}
            </motion.p>
            <motion.p
              initial={{ y: 50 }}
              whileInView={{ y: 0.5 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false }}
              className="text-gray-200 leading-relaxed overflow-hidden text-justify"
            >
              {textos[0].texto2}
            </motion.p>
          </div>

          <div className="flex justify-center">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ amount: 0.5 }}
              className="w-4/5 rounded-3xl"
              src={images.imagen1}
              alt="Taquero con trompo"
            />
          </div>
        </div>

        <div className="grid m940:grid-cols-2 items-center gap-10">
          <div className="flex justify-center">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ amount: 0.9 }}
              className="w-4/5 rounded-3xl"
              src={images.imagen2}
              alt="Taquero2"
            />
          </div>

          <div className="flex flex-col gap-6 md:text-xl sm:text-lg text-sm">
            <motion.p
              initial={{ y: 50 }}
              whileInView={{ y: 0.5 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false }}
              className="text-gray-200 leading-relaxed overflow-hidden text-justify"
            >
              {textos[0].texto3}
            </motion.p>
            <motion.p
              initial={{ y: 50 }}
              whileInView={{ y: 0.5 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false }}
              className="text-gray-200 leading-relaxed overflow-hidden text-justify"
            >
              {textos[0].texto4}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
