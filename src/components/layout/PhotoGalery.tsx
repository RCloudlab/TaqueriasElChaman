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
        breakpoint: 1536, // 2xl
        settings: { 
          slidesToShow: 6,
          slidesToScroll: 2
        },
      },
      {
        breakpoint: 1280, // xl
        settings: { 
          slidesToShow: 5,
          slidesToScroll: 2
        },
      },
      {
        breakpoint: 1024, // lg
        settings: { 
          slidesToShow: 4,
          slidesToScroll: 2
        },
      },
      {
        breakpoint: 768, // md
        settings: { 
          slidesToShow: 3,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 640, // sm
        settings: { 
          slidesToShow: 2,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 480, // xs
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px'
        },
      },
    ],
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index - 1); 
    setLightboxOpen(true);
    // Bloquear scroll del body cuando el lightbox está abierto
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // Restaurar scroll del body
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galery.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galery.length) % galery.length);
  };

  // Manejar navegación con teclado en el lightbox
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  };

  const navigate = useNavigate();
  const goToGalleryPage = () => {
    navigate("/gallery");
  }
  return (
    <section className="min-h-[400px] lg:h-96 w-full relative text-white">
      {/* Header Section */}
      <div className="h-2/3 bg-black px-4 sm:px-6 lg:px-10">
        <div className="text-white flex flex-col container mx-auto">
          <hr className=" border-[#3A3940] container mb-14 mx-auto" />

          <button 
          onClick={goToGalleryPage}
          className="my-2 max-md:text-xs w-28 sm:w-36 text-center bg-red-900 py-1 px-4 rounded-lg hover:bg-red-900/80 transition-all duration-400">
            Ver más fotos
          </button>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <h3 className="tracking-widest font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              GALERIA DE FOTOS
            </h3>
            
            <div className="flex space-x-2 self-end sm:self-auto">
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className="border p-2 rounded-full hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Imagen anterior"
              >
                <ArrowLeft className="text-white w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="border p-2 rounded-full hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Siguiente imagen"
              >
                <ArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background White Space */}
      <div className="bg-white w-full h-1/3 lg:h-2/4"></div>

      {/* Slider Section */}
      <div className="absolute top-32 sm:top-36 md:top-40 lg:top-36 w-full px-2 sm:px-4">
        <Slider ref={sliderRef} {...settings}>
          {galery.map((g) => (
            <div key={g.id} className="px-1 sm:px-2 cursor-pointer">
              <div className="h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
                <img
                  onClick={() => openLightbox(g.id)}
                  src={g.url}
                  alt={g.alt}
                  className="w-full h-full object-cover transform duration-500 hover:scale-110 transition-transform cursor-pointer"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div 
            className="relative max-w-4xl w-full max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white bg-gray-900/80 hover:bg-gray-800 p-2 rounded-full z-10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              onClick={closeLightbox}
              aria-label="Cerrar lightbox"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 text-white p-2 sm:p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
            </button>

            {/* Image Container */}
            <div className="flex items-center justify-center w-full h-full p-2 sm:p-4">
              <img
                src={galery[currentIndex].url}
                alt={galery[currentIndex].alt}
                className="max-h-[70vh] sm:max-h-[80vh] max-w-full w-auto object-contain rounded-md shadow-lg"
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 text-white p-2 sm:p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Siguiente imagen"
            >
              <ChevronRight size={24} className="sm:w-7 sm:h-7" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {galery.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};