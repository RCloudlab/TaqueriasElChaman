import { useState } from "react";
import { Link } from "react-router-dom";
import ImagenCloudinary from "../../hooks/ImageCloudinary";

function DishesCard({
  title,
  imageUrl,
  logoUrl,
  linkRoute,
}: {
  title: string;
  imageUrl: string;
  logoUrl: string;
  linkRoute: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/menu/categories/${linkRoute}`}
      className="relative block overflow-hidden shadow-xl group rounded-2xl w-full bg-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <ImagenCloudinary
          publicId={imageUrl}
          anchoDeseado={800}
          altText={title + " imagen"}
          aspectRatio="4:3"
          className={`
            w-full h-full object-cover transition-transform duration-700 ease-in-out
            ${isHovered ? "scale-110" : "scale-100"}
          `}
        />
        
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-90"
          }`}
        />

        <div className="absolute inset-0 p-6 flex flex-col justify-end items-center">
          <h3 className="text-white text-3xl font-bold tracking-wide drop-shadow-2xl text-center">
            {title}
          </h3>
        </div>

        <img
          src={logoUrl}
          alt="Logo"
          className="absolute top-4 right-4 w-10 h-10 opacity-80 object-contain"
        />
      </div>
    </Link>
  );
}

export default DishesCard;