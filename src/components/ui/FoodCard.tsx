import { memo } from "react";
import { Flame } from "lucide-react";
import type { MenuItem } from "../../utils/MenuTypes";
import ImagenCloudinary from "../../hooks/ImageCloudinary";

const FoodCard = memo(
  ({ item, onClick }: { item: MenuItem; onClick: () => void }) => {
    const hasImage = !!item.image;

    return (
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
        onClick={onClick}
        className="cursor-pointer bg-zinc-900 rounded-2xl shadow-lg 
                   border border-zinc-800 p-4 flex flex-col 
                   hover:scale-[1.02] active:scale-[0.98] transition"
      >
        {/* SI EL ITEM TIENE IMAGEN */}
        {hasImage ? (
          <div className="relative h-40 w-full mb-4 rounded-xl overflow-hidden">
            <ImagenCloudinary
              publicId={item.image}
              anchoDeseado={600}
              altText={item.title}
              className="w-full h-full object-cover"
            />

            {item.tag === "Popular" && (
              <div
                className="absolute left-3 top-3 bg-black/60 backdrop-blur-sm 
                            px-2 py-1 rounded-full border border-zinc-700 
                            flex items-center gap-1 text-xs font-semibold"
              >
                <Flame size={12} className="text-orange-400" />
                Popular
              </div>
            )}
          </div>
        ) : (
          /* SI NO HAY IMAGEN */
          <div className="h-40 w-full mb-4 rounded-xl bg-gradient-to-br 
                          from-zinc-800 to-zinc-900 border border-zinc-700/40
                          flex items-center justify-center">
            <span className="text-zinc-500 text-5xl">🍽️</span>
          </div>
        )}

        {/* TIPO */}
        {item.type && (
          <span className="text-orange-400 text-xs font-semibold uppercase tracking-wide">
            {item.type}
          </span>
        )}

        {/* TÍTULO */}
        <h3 className="text-white font-bold text-xl uppercase mt-1">
          {item.title}
        </h3>

        {/* DESCRIPCIÓN */}
        <p className="text-zinc-400 text-sm line-clamp-2 mb-4">
          {item.description}
        </p>

        {/* PRECIO */}
        <span className="text-orange-500 font-extrabold text-3xl drop-shadow-md mt-auto">
          ${item.price}
        </span>
      </div>
    );
  }
);

export default FoodCard;
