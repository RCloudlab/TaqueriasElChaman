import CollaborationsCard from "./CollaborationsCard";
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
        <section>
            <div>
                <button>Contactar</button>
                <button>Ver todos los videos</button>
            </div>
            <div>
                <h2>Últimas colaboraciones</h2>
                <div>
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
        </section>
    );
}

export default Collaborations;