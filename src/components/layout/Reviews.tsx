import { FaMapMarkedAlt, FaClock, FaDirections } from "react-icons/fa";
import { GiGarlic, GiTacos } from "react-icons/gi"; 
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { useInView } from "react-intersection-observer";
import Diamods from "../ui/Diamods";

const Reviews = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mapsLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.2376246795!2d-101.1735221!3d19.702504899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0f00158c7e89%3A0x3fad54bab9095e7e!2sTacos%20El%20Chaman!5e0!3m2!1ses-419!2smx!4v1770762941154!5m2!1ses-419!2smx";

  return (
    <section className="py-20 bg-white relative overflow-hidden">
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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-1 mb-4">
            <Diamods numberOfDiamonds={4} />
          </div>
          <div className="w-px h-10 bg-red-600 mx-auto mt-2 mb-1 md:mb-3"></div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight font-serif">
            Nuestra Ubicación
          </h2>
          <p className="text-gray-500 text-lg">
            Visítanos y disfruta de nuestros deliciosos tacos. Aquí te dejamos los horarios y cómo llegar.
          </p>
        </div>

        <div 
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="lg:col-span-2 h-[450px] border border-gray-200 shadow-lg bg-gray-50">
            <iframe
              src={mapsLink}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex flex-col gap-6">            
            <div className="bg-white p-8 border border-gray-200 border-t-4 border-t-red-600 shadow-lg flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-5 flex items-center gap-3 text-black">
                <FaClock className="text-red-600" /> Horarios
              </h3>
              <ul className="space-y-3 text-black font-medium">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-black font-bold">Lun - Sáb:</span> <span>18:30 - 23:30</span>
                </li>
                <li className="flex justify-between text-red-600 font-bold pt-1">
                  <span>Domingo:</span> <span>12:00 - 23:30</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 border border-gray-200 border-t-4 border-t-black shadow-lg flex-1 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-black flex items-center gap-2">
                <FaDirections className="text-red-600" /> Visítanos
              </h3>
              <p className="text-gray-600 mb-6 font-medium leading-relaxed">
                Av. Principal #123, Col. Centro, Ciudad de México.
              </p>
              
              <div className="flex flex-col gap-3">
                <a 
                  href={mapsLink}
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