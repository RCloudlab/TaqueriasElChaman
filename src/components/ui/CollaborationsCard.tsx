import React from 'react';

interface CollaborationsCardProps {
    titulo: string;
    redSocial: string;
    vistas: string;
    imagen: string;
}

const CollaborationsCard: React.FC<CollaborationsCardProps> = ({ titulo, redSocial, vistas, imagen }) => {
    return (
        <div className='flex flex-col h-full bg-white border border-gray-100 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group'>
            <img src={imagen} alt={titulo} className='w-full h-52 object-cover'/>
            <div className='flex flex-col flex-group p-5'>
                <p className='text-xs text-gray-500 tracking-wider mb-2 bg-[#F2EDEA] py-1 px-1 w-fit'>{redSocial}</p>
                <h3 className='text-lg font-bold text-gray-900 mb-4'>{titulo}</h3>
                <div>
                    <p className='text-[#74787C] '>{vistas}</p>

                </div>
            </div>
        </div>
    );
}

export default CollaborationsCard;