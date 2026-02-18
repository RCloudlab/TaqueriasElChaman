import { IMAGES } from "../../constants/images";
import Diamods from "./Diamods";
import OurServicesCard from "./OurServicesCard";
import { CARDS_NS } from "../../constants/services";

function OurServices() {
    return (
        <section className="relative w-full pt-6 pb-14 px-5 text-center bg-[#FAF4EE]">

            <div className="flex justify-center py-4">
                <img src={IMAGES.deerLogo} alt="logo" className="w-10" />
            </div>
            <h2 className="text-black text-4xl md:text-5xl font-bold">Nuestros Servicios</h2>
            <div className="w-px h-5 bg-red-600 mx-auto mt-1 mb-1 md:mb-2"></div>
            <div className="flex justify-center pt-2 pb-6">
                <Diamods numberOfDiamonds={4} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {CARDS_NS.map((service) => (
                    <OurServicesCard
                        key={service.id}
                        imagen={service.imagen}
                        titulo={service.titulo}
                        descripcion={service.descripcion}
                    />
                ))}
            </div>

            <img
                src={IMAGES.ourServicesVolcan}
                alt="Taco decorativo"
                className="absolute bottom-0 left-0 w-30 md:w-40 lg:w-50 opacity-90 hidden lg:block z-10"
            />
            <img
                src={IMAGES.ourServicesFondo}
                alt="Decoración de hojas"
                className=" absolute top-10 right-10 w-32 md:w-40 lg:w-48 opacity-40 hidden md:block z-10 " />

        </section>
    );
}

export default OurServices;