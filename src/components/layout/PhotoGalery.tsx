import { galery } from "../../constants/galery";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

export const PhotoGalery = () => {
  const sliderRef = useRef<Slider | null>(null);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 6 },
      },

      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },

      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const openLightbox = (index: number) => {
    // Aseguramos que el índice se ajuste correctamente si 'galery' no es base 1
    setCurrentIndex(index - 1); 
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galery.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galery.length) % galery.length);
  };
  const navigate = useNavigate();
  const goToGalleryPage = () => {
    navigate("/gallery");
  }
  return (
    <section className="h-96 w-full relative text-white">
      <div className="h-2/3 bg-black px-10">
        <div className="text-white flex flex-col container mx-auto">
          <hr className=" border-[#3A3940] container mb-14 mx-auto" />

          <button 
          onClick={goToGalleryPage}
          className="my-2 max-md:text-xs w-28 sm:w-36 text-center bg-red-900 py-1 px-4 rounded-lg hover:bg-red-900/80 transition-all duration-400">
            Ver más fotos
          </button>

          <div className="flex justify-between">
            <h3 className="tracking-widest font-bold text-xl md:text-3xl">
              GALERIA DE FOTOS
            </h3>
            <div className="space-x-2">
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className="border p-2 rounded-full hover:bg-white/10 transition"
              >
                <ArrowLeft className="text-white w-5 h-5" />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="border p-2 rounded-full hover:bg-white/10 transition"
              >
                <ArrowRight className="text-white w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full h-2/4"></div>

      <div className="absolute top-36 w-full px-1">
        <Slider ref={sliderRef} {...settings}>
          {galery.map((g) => (
            <div key={g.id} className="px-1 cursor-pointer">
              <div className="h-60 rounded-xl overflow-hidden shadow-lg">
                <img
                  onClick={() => openLightbox(g.id)}
                  src={g.url}
                  alt={g.alt}
                  className="w-full h-full object-cover transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </Slider>

        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <button
              className="absolute top-6 right-6 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-850"
              onClick={closeLightbox}
            >
              <X size={22} />
            </button>

            <div className="relative max-w-4xl w-full flex items-center justify-center">
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-850"
              >
                <ChevronLeft size={28} />
              </button>

              <img
                src={galery[currentIndex].url}
                className="max-h-[80vh] w-auto object-contain rounded-md shadow-lg" // Usar w-auto para mejor adaptación en lightbox
              />

              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-850"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};