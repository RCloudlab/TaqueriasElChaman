import { galery } from "../../constants/galery";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const PhotoGalery = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: { slidesToShow: 6, slidesToScroll: 2 },
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 5, slidesToScroll: 2 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480, // xs - Móvil vertical
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px", // Muestra un poco de las fotos laterales (buen UX en móvil)
        },
      },
    ],
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index - 1);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galery.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galery.length) % galery.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
  };

  return (
    // Aumenté el min-height en móvil para que quepa todo sin apretarse
    <section
      ref={sectionRef}
      className="min-h-[500px] lg:h-[500px] w-full relative text-white bg-white "
    >
      {/* --- Header Section (Negro) --- */}
      {/* Ocupa el 60% de la altura para dar buen fondo al slider */}
      <div className="h-[65%] sm:h-2/3 bg-black px-4 sm:px-6 lg:px-10 pb-10">
        <div className="text-white flex flex-col container mx-auto h-full">
          <hr className="border-[#3A3940] w-full mb-6 sm:mb-8 md:mb-12 opacity-50" />

          {/* Contenedor Flex reorganizado para móvil */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 mt-2">
            {/* TÍTULO Y BOTÓN AGRUPADOS */}
            {/* En móvil: Centrados y Título primero. En Desktop: Alineados izquierda */}
            <div className="flex flex-col items-center sm:items-start space-y-4 sm:space-y-2 w-full sm:w-auto">
              <h3 className="text-2xl sm:text-xl md:text-3xl lg:text-3xl font-bold tracking-widest text-center sm:text-left">
                GALERIA DE FOTOS
              </h3>

              <button className="text-xs sm:text-sm bg-red-900 py-2 px-6 rounded-lg hover:bg-red-900/80 transition-all duration-300 font-medium uppercase tracking-wide">
                Ver más fotos
              </button>
            </div>

            {/* BOTONES DE NAVEGACIÓN */}
            {/* Ocultos en móvil (hidden), visibles en sm (flex) */}
            <div className="hidden sm:flex space-x-2">
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className="border border-white/30 p-2 rounded-full hover:bg-white/10 transition focus:outline-none"
                aria-label="Anterior"
              >
                <ArrowLeft className="text-white w-5 h-5" />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="border border-white/30 p-2 rounded-full hover:bg-white/10 transition focus:outline-none"
                aria-label="Siguiente"
              >
                <ArrowRight className="text-white w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Slider Section (Posicionamiento Absoluto) --- */}
      {/* Ajustado el 'top' para móvil y desktop para que quede centrado entre lo negro y blanco */}
      <div className="absolute top-[45%] sm:top-40 md:top-48 lg:top-40 w-full px-0 sm:px-4">
        <Slider ref={sliderRef} {...settings}>
          {galery.map((g) => (
            <div key={g.id}>
              <div className="px-2 cursor-pointer outline-none py-4">
                <div className="group relative rounded-xl overflow-hidden shadow-2xl">
                  {/* Altura ajustada: h-64 en móvil (más alto para ver mejor la comida) */}
                  <img
                    onClick={() => openLightbox(g.id)}
                    src={g.url}
                    alt={g.alt}
                    className="w-full h-64 sm:h-52 md:h-56 lg:h-64 object-cover transform duration-500 hover:scale-110 transition-transform"
                    loading="lazy"
                  />
                  {/* Overlay sutil al hacer hover (opcional, da toque premium) */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* --- Lightbox (Sin cambios funcionales, solo estilo) --- */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className="relative w-full max-w-6xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors hidden sm:block"
            >
              <ChevronLeft size={48} />
            </button>

            <img
              src={galery[currentIndex].url}
              alt={galery[currentIndex].alt}
              className="max-h-[80vh] w-auto max-w-full rounded-md shadow-2xl object-contain"
            />

            <button
              onClick={nextImage}
              className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors hidden sm:block"
            >
              <ChevronRight size={48} />
            </button>

            {/* Navegación móvil para lightbox (zonas táctiles invisibles o flechas pequeñas) */}
            <div className="absolute bottom-[-3rem] flex space-x-8 sm:hidden text-white">
              <ChevronLeft size={32} onClick={prevImage} />
              <span className="self-center text-sm">
                {currentIndex + 1} / {galery.length}
              </span>
              <ChevronRight size={32} onClick={nextImage} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
