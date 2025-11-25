import { memo } from "react";
import { Flame } from "lucide-react";
import type { MenuItem } from "../../utils/MenuTypes";

const FoodCard = memo(
  ({ item, onClick }: { item: MenuItem; onClick: () => void }) => {
    return (
      <div
        onClick={onClick}
        className="cursor-pointer bg-zinc-900 rounded-2xl overflow-hidden shadow-lg 
                 border border-zinc-800 flex flex-col h-full transform 
                 transition hover:scale-[1.03] active:scale-[0.98]"
      >
        {/* IMAGEN */}
        <div className="relative h-48 w-full overflow-hidden bg-zinc-800">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />

          {/* ETIQUETA "POPULAR" */}
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

        {/* INFO */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-white font-bold text-xl uppercase mb-1">
            {item.title}
          </h3>

          <p className="text-zinc-400 text-sm line-clamp-2 flex-grow">
            {item.description}
          </p>

          {/* PRECIO MUY GRANDE */}
          <div className="mt-4 flex justify-center">
            <span className="text-orange-500 font-extrabold text-4xl drop-shadow-lg">
              ${item.price}
            </span>
          </div>
        </div>
      </div>
    );
  }
);

export default FoodCard;
