import React from "react";

interface OurServicesCardProps {
    titulo: string;
    descripcion: string;
    imagen: string;
}

const OurServicesCard: React.FC<OurServicesCardProps> = ({ titulo, descripcion, imagen }) => {
    return (
        <div className="w-full bg-wgite rounded-lg overflow-hidden shadow-lg text-left bg-[#FFFFFF]">
            <img className="w-full h-56 object-cover" 
            src={imagen} 
            alt={titulo} />
            <div className="p-6">
                <div className="font-bold text-xl text-gray-900 mb-4 uppercase">{titulo}</div>
                <p className="text-sm text-gray-600 leading-relaxed">
                    {descripcion}
                </p>
            </div>
        </div>
    );  
}

export default OurServicesCard;