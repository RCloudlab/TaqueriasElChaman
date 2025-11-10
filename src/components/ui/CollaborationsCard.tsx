import React from 'react';

interface CollaborationsCardProps {
    titulo: string;
    redSocial: string;
    vistas: string;
    imagen: string;
}

const CollaborationsCard: React.FC<CollaborationsCardProps> = ({ titulo, redSocial, vistas, imagen }) => {
    return (
        <div>
            <img src={imagen} alt={titulo} />
            <div>
                <div>
                    <p>{redSocial}</p>
                </div>
                <h3>{titulo}</h3>
                <div>
                    <p>{vistas}</p>

                </div>
            </div>
        </div>
    );
}

export default CollaborationsCard;