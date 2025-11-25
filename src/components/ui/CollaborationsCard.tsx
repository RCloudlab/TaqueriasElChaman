import React from 'react';

interface CollaborationsCardProps {
    titulo: string;
    redSocial: string;
    vistas: string;
    imagen: string;
    fecha: string;
    link: string;
}

const CollaborationsCard: React.FC<CollaborationsCardProps> = ({ titulo, redSocial, vistas, imagen, fecha, link }) => {
    return (
        <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className='flex flex-col h-full bg-white border border-gray-100 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group cursor-pointer'
        >
            <div className='relative'>
                <img src={imagen} alt={titulo} className='w-full h-48 object-cover'/>
                <div className='absolute bottom-0 left-0 z-10 bg-[#C00F0C] text-white py-1.5 pl-4 pr-4 text-base skew-x-[20deg] origin-bottom-left'> 
                    <span className='inline-block skew-x-[-20deg]'> 
                        {fecha}
                    </span>
                </div>
            </div>
            <div className='flex flex-col flex-group p-5'>
                <p className='text-xs text-gray-500 tracking-wider mb-2 bg-[#F2EDEA] py-1 px-1 w-fit'>{redSocial}</p>
                <h3 className='text-lg font-bold text-gray-900 mb-4'>{titulo}</h3>
                <div>
                    <p className='text-[#74787C] '>{vistas}</p>
                </div>
            </div>
        </a>
    );
}

export default CollaborationsCard;