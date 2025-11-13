import { useState } from "react";
import { Link } from "react-router-dom";

function DishesCard({
  title,
  imageUrl,
  logoUrl,
  route,
}: {
  title: string;
  imageUrl: string;
  logoUrl: string;
  route: string;
}) {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={route}
      className="relative overflow-hidden shadow-xl group "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageUrl}
        alt={title}
        className={`
          w-full h-80 object-cover transition-transform duration-500 ease-in-out rounded-xl
          ${isHovered ? 'scale-110' : ''}
        `}
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-transform duration-500 ease-in-out ${isHovered ? 'scale-110' : ''} rounded-xl`}>
        <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-4xl font-bold tracking-wide drop-shadow-lg">
          {title}
        </h3>
        <img
          src={logoUrl}
          alt="Logo"
          className="absolute bottom-4 right-4 w-10 h-10 opacity-80"
        />
      </div>
    </Link>
  );
}
export default DishesCard;
