import { useState, useEffect } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiGarlic, GiTacos } from "react-icons/gi"; 
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { useInView } from "react-intersection-observer";
import type { TReview } from "../../utils/Reviews";
import ReviewCard from "../ui/ReviewCard";
import Diamods from "../ui/Diamods";

const Reviews = () => {
  const [reviews, setReviews] = useState<TReview[]>([]);
  const [loading, setLoading] = useState(true);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mapsLink = "https://www.google.com/maps/place/Tacos+El+Chaman/data=!4m2!3m1!1s0x0:0x3fad54bab9095e7e?sa=X&ved=1t:2428&ictx=111";

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const dummyData: TReview[] = [
          {
            id: 1,
            text: "Muy ricos los tacos la verdad, fuimos con mi familia y estuvieron 10 de 10 la atención excelente",
            author: "Huber Gutierrez",
            source: "Google Maps",
            avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWUHG-KPl1z1JzCp0dp6mubVLM9Sqo7r079oEsTpV75ErScmj_I=w90-h90-p-rp-mo-br100",
          },
          {
            id: 2,
            text: "Excelente pastor, el mejor pastor de morelia, además muy accesibles, la atencion de primera calidad como ninguna otra, gracias al Chamán",
            author: "Ricardo Vega",
            source: "Google Maps",
            avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWrgqj_hBey3Jn39vxu_7ptwA7cQlEq2BclCmZ2D-o0izz3wnO5eQ=w90-h90-p-rp-mo-ba2-br100",
          },
        ];
        setReviews(dummyData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, []);

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
            Nuestras Reseñas
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Descubre por qué nuestros clientes siempre regresan por más tacos.
          </p>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-900/90 hover:bg-red-900 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-red-600/30"
          >
            <FaMapMarkedAlt />
            Déjanos tu opinión en Maps
          </a>
        </div>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {loading
            ? [1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-64 bg-gray-100 rounded-2xl animate-pulse"
                ></div>
              ))
            : reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;