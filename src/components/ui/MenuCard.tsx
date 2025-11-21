import React from 'react';

interface MenuCardProps {
    nombre: string;
    imagen: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ nombre, imagen }) => {
    return (
        <div className="group relative w-full aspect-[3/4] overflow-hidden rounded-md cursor-pointer shadow-lg">
            <img 
                src={imagen} 
                alt={nombre} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
                <h3 className="text-white font-bold text-lg uppercase tracking-wider drop-shadow-md">
                    {nombre}
                </h3>
                <div className="w-8 h-1 bg-red-600 mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
        </div>
    );
}

export default MenuCard;