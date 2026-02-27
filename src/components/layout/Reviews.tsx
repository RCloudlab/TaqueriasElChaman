import { FaMapMarkedAlt, FaClock, FaDirections, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import { GiGarlic, GiTacos } from "react-icons/gi";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { useInView } from "react-intersection-observer";
import Diamods from "../ui/Diamods";

const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.2376246795!2d-101.1735221!3d19.702504899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0f00158c7e89%3A0x3fad54bab9095e7e!2sTacos%20El%20Chaman!5e0!3m2!1ses-419!2smx!4v1770762941154!5m2!1ses-419!2smx";

const MAPS_LINK =
  "https://www.google.com/maps/place/Tacos+El+Chaman/@19.7025049,-101.1735221,17z/data=!4m6!3m5!1s0x842d0f00158c7e89:0x3fad54bab9095e7e!8m2!3d19.7025049!4d-101.1735221!16s%2Fg%2F11w4tvdc2m?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D";

const Reviews = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background icons */}
      <div className="absolute top-0 -left-10 md:left-10 text-gray-100 pointer-events-none z-0 transform -rotate-12">
        <GiGarlic className="text-[150px] md:text-[200px] opacity-60" />
      </div>
      <div className="absolute top-0 -right-10 md:right-10 text-gray-100 pointer-events-none z-0 transform rotate-12">
        <GiTacos className="text-[150px] md:text-[200px] opacity-60" />
      </div>
      <div className="absolute top-24 left-1/4 pointer-events-none z-0">
        <div className="w-3 h-3 bg-red-400 rounded-full opacity-40"></div>
      </div>
      <div className="absolute top-16 right-1/3 pointer-events-none z-0">
        <PiPaperPlaneTiltFill className="text-red-400 text-xl opacity-40 rotate-45" />
      </div>
      <div className="absolute bottom-10 left-10 pointer-events-none z-0">
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-red-200 border-r-[10px] border-r-transparent rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-1 mb-4">
            <Diamods numberOfDiamonds={4} />
          </div>
          <div className="w-px h-10 bg-red-600 mx-auto mt-2 mb-1 md:mb-3"></div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight font-serif">
            Nuestra Ubicación
          </h2>
          <p className="text-gray-500 text-lg">
            Visítanos y disfruta de nuestros deliciosos tacos. Aquí te dejamos
            los horarios y cómo llegar.
          </p>
        </div>

        {/* Main grid */}
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* ── Interactive map card ── */}
          <div className="lg:col-span-2 flex flex-col border border-gray-200 shadow-lg overflow-hidden">
            {/* Map header bar */}
            <div className="flex items-center justify-between bg-gray-900 px-5 py-3 shrink-0">
              <div className="flex items-center gap-2 text-white">
                <FaMapMarkerAlt className="text-red-500 text-lg animate-pulse" />
                <span className="font-semibold text-sm tracking-wide">
                  Tacos El Chamán
                </span>
                <span className="text-gray-400 text-xs hidden sm:inline">
                  · Morelia, Michoacán
                </span>
              </div>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
              >
                <FaExternalLinkAlt className="text-[10px]" />
                Abrir en Maps
              </a>
            </div>

            {/* Iframe */}
            <div className="h-64 sm:h-80 md:h-[400px] lg:h-full min-h-[300px]">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Tacos El Chamán"
              />
            </div>

            {/* Red accent strip at bottom */}
            <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-400 to-red-600 shrink-0" />
          </div>

          {/* ── Info cards ── */}
          <div className="flex flex-col gap-6">
            {/* Hours card */}
            <div className="bg-white p-8 border border-gray-200 border-t-4 border-t-red-600 shadow-lg flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-5 flex items-center gap-3 text-black">
                <FaClock className="text-red-600" /> Horarios
              </h3>
              <ul className="space-y-3 text-black font-medium">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-black font-bold">Lun – Sáb:</span>
                  <span>18:30 – 23:30</span>
                </li>
                <li className="flex justify-between text-red-600 font-bold pt-1">
                  <span>Domingo:</span>
                  <span>12:00 – 23:30</span>
                </li>
              </ul>
            </div>

            {/* Directions card */}
            <div className="bg-white p-8 border border-gray-200 border-t-4 border-t-black shadow-lg flex-1 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-black flex items-center gap-2">
                <FaDirections className="text-red-600" /> Visítanos
              </h3>
              <p className="text-gray-600 mb-6 font-medium leading-relaxed">
                Av. Principal #123, Col. Centro, Morelia, Michoacán.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-3 px-4 border-2 border-red-600 hover:bg-white hover:text-red-600 transition-colors"
                >
                  <FaMapMarkedAlt /> ¿Cómo llegar?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;