import Diamond from '../components/ui/Diamods';
import { galleryImages } from '../constants/gallery';
import {IMAGES} from '../constants/images';

const Gallery = () => {
  return (
    <div className="w-full bg-[#fcfcfc] pb-20">
      <header className="w-full ">
        <div className="relative w-full  mx-auto h-[500px] rounded-lg overflow-hidden shadow-xl">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${IMAGES.gallerybg})` }}
>
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-wide uppercase mb-2">
              Galeria de Platillos
            </h1>
            <p className="text-xs md:text-sm font-medium tracking-widest text-gray-300 uppercase">
              Home / Gallery Page
            </p>
          </div>
        </div>
      </header>

      <section className="flex flex-col items-center mt-16 mb-12">
        <span className="bg-[#c94126] text-white text-xs font-bold px-6 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-sm">
          Galeria
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase tracking-wide mb-6">
          Food Gallery Posts
        </h2>

        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-8 bg-red-400 opacity-60"></div>
          <Diamond numberOfDiamonds={4}/>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="aspect-[4/3] w-full bg-gray-200">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Gallery;