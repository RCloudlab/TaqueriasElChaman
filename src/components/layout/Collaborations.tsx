import CollaborationsCard from "../ui/CollaborationsCard";
import { IMAGES } from "../../constants/images";

const collaborationsData = [
    {
        id: 1,
        titulo: 'TAQUERÍA EL CHAMÁN EN MORELIA',
        redSocial: 'GHIRO / TIKTOK',
        vistas: '189.6k vistas',
        imagen: IMAGES.collab1,
    },
    {
        id: 2,
        titulo: 'GIGANTES ... SABOROSOS, BARATOS Y ATASCADOS TACOS AL PASTOR...',
        redSocial: 'JAMES RAMIREZ / YOUTUBE',
        vistas: '02 Comentarios',
        imagen: IMAGES.collab2,
    },
    {
        id: 3,
        titulo: 'ASÍ SE PREPARAN UNOS TACOS AL PASTOR',
        redSocial: 'KITTY FOOGFACEBOOK',
        vistas: '02 Comentarios',
        imagen: IMAGES.collab3,
    }
];

function Collaborations() {
    return (
        <section className="relative w-full py-20 px-5 bg-white overflow-hidden">
            <div className="relative z-20 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-4">
                    <a href="#" className="w-full md:w-auto text-center bg-[#C00F0C] text-white px-12 py-2 rounded-md text-sm hover:bg-red-800 transition-colors">Contactar</a>
                    <a href="#" className="w-full md:w-auto text-center border border-[#C00F0C] px-12 py-2 rounded-md text-sm hover:bg-[#C00F0C] hover:text-white transition-colors">Ver todos los videos</a>
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase pb-6 md:text-left text-center">
                        Últimas colaboraciones
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {collaborationsData.map((colab) => (
                            <CollaborationsCard
                                key={colab.id}
                                titulo={colab.titulo}
                                redSocial={colab.redSocial}
                                vistas={colab.vistas}
                                imagen={colab.imagen}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Collaborations;

