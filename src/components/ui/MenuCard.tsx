
import React from "react";
import { useNavigate } from "react-router-dom";
import ImagenCloudinary from "../../hooks/ImageCloudinary";

interface MenuCardProps {
  nombre: string;
  imagen: string;
  categoryId: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ nombre, imagen, categoryId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/menu/categories/${categoryId}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group relative w-full aspect-[9/16] overflow-hidden rounded-xl cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      {/* La imagen ocupa todo el contenedor */}
      <div className="absolute inset-0">
        <ImagenCloudinary
          publicId={imagen}
          anchoDeseado={900} // Para pantallas HD
          aspectRatio="9:16"
          altText={`${nombre}`}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/10" />
      
      {/* Texto */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="text-white font-extrabold text-3xl uppercase tracking-tight text-center mb-3 drop-shadow-2xl">
          {nombre}
        </h3>
        <div className="w-16 h-1.5 bg-red-900 mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
      
      {/* Efecto hover sutil */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-900/50 rounded-xl transition-all duration-300"></div>
    </div>
  );
};

export default MenuCard;