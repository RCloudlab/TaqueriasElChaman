import { IMAGES } from "../../constants/images";
import OurServicesCard from "./OurServicesCard";

const CARDS_NS = [
    {
        id: 1,
        imagen: IMAGES.ourServices1,
        titulo: 'Servicio a Domicilio',
        descripcion: "¡Y esto es lo que traigo de mi costa Pa' que todo el mundo lo baile Y que nadie se quede sentado porque será multado ¡Y vámonos todos con el baile costeño pues se va!",
    },
    {
        id: 2,
        imagen: IMAGES.ourServices3,
        titulo: 'Catering para eventos',
        descripcion: "¡Ay!, arremángala, arrempújala Arremángala, arrempújala Arremángala, arrempújala Arremángala, arrempújala Arremángala, arrempújala Arremángala, arrempújala Arremángala, arrempújala",
    },
    {
        id: 3,
        imagen: IMAGES.ourServices3,
        titulo: 'Pedidos para llevar',
        descripcion: "Arremángala, arrempújala, sí, Arremángala, arrempújala, no Arremángala, arrempújala, sí Arremángala, arrempújala, no Arremángala, arrempújala, sí Arremángala, arrempújala, no",
    }
];

//Checar los colores, que sean los del figma

function OurServices() {
    return (
        <section className="relative w-full pt-6 pb-14 px-5 text-center bg-[#FAF4EE]">

            <div className="flex justify-center py-4">
                <img src={IMAGES.deerLogo} alt="logo" className="w-10" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2.5 uppercase">Nuestros Servicios</h2>
            <div className="flex justify-center pt-4 pb-8">
                Aqui van los diamantes
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {CARDS_NS.map((service) => (
                    <OurServicesCard
                        key={service.id}
                        imagen={service.imagen}
                        titulo={service.titulo}
                        descripcion={service.descripcion}
                    />
                ))}
            </div>

            {/* IMAGENES DE FONDO Creo que no son del todo responsive */}
            <img
                src={IMAGES.ourServicesVolcan}
                alt="Taco decorativo"
                className=" absolute bottom-0 left-0 w-30 md:w-40 lg:w-50 opacity-90 hidden md:block z-10 "/>

            <img
                src={IMAGES.ourServicesFondo}
                alt="Decoración de hojas"
                className=" absolute top-10 right-10 w-32 md:w-40 lg:w-48 opacity-40 hidden md:block z-10 "/>
                
        </section>
    );
}

export default OurServices;