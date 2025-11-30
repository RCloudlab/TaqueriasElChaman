import { useState, useMemo, useEffect } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { CATEGORIES, CATEGORY_IMAGES } from "../../constants/categories";
import { MENU_ITEMS } from "../../constants/menu";
import FoodCard from "../ui/FoodCard";
import CategoryPill from "../ui/CategoryPill";
import { useNavigate, useParams } from "react-router-dom";

const MenuAll = () => {
  const { categoryId } = useParams();
  const [activeCategory, setActiveCategory] = useState("all");
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const filteredItems = useMemo(() => {
    let list =
      activeCategory === "all"
        ? MENU_ITEMS
        : MENU_ITEMS.filter((i) => i.category === activeCategory);

    if (q.trim()) {
      const term = q.toLowerCase();
      list = list.filter(
        (i) =>
          i.title.toLowerCase().includes(term) ||
          (i.description || "").toLowerCase().includes(term)
      );
    }

    return list;
  }, [activeCategory, q]);

  const currentTitle = useMemo(() => {
    if (activeCategory === "all") return "NUESTRO MENÚ";
    const category = CATEGORIES.find((c) => c.id === activeCategory);
    return category ? category.label.toUpperCase() : "MENÚ";
  }, [activeCategory]);

  const bannerImage =
    CATEGORY_IMAGES[activeCategory] || CATEGORY_IMAGES.default;

  useEffect(() => {
    if (categoryId) setActiveCategory(categoryId);
  }, [categoryId]);


  return (
    <div className="min-h-screen bg-black text-white pb-12 pt-24">
      {/* HEADER */}
      <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            aria-label="volver"
            className="p-2 rounded-full hover:bg-zinc-800 transition text-zinc-300"
          >
            <ArrowLeft size={24} />
          </button>

          {/* BUSCADOR */}
          <div className="relative hidden sm:flex items-center bg-zinc-900 border border-zinc-800 rounded-xl">
            <span className="pl-3 text-zinc-400">
              <Search size={16} />
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar..."
              className="bg-transparent outline-none px-2 py-2 text-sm w-40 text-white"
            />
          </div>

          <Search className="sm:hidden text-zinc-400" size={24} />
        </div>
      </header>

      {/* BANNER */}
      <div className="max-w-6xl mx-auto px-4 mt-4">
        <div className="w-full h-40 sm:h-56 md:h-64 rounded-2xl overflow-hidden relative">
          <img
            src={bannerImage}
            alt={currentTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <h2 className="absolute bottom-4 left-6 text-3xl sm:text-4xl md:text-5xl font-black drop-shadow-md">
            {currentTitle}
          </h2>
        </div>
      </div>

      {/* PILL CATEGORIES */}
      <section className="mt-4 pb-4 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className="flex gap-3 overflow-x-auto scroll-smooth py-2 pb-4 custom-scrollbar"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#C00F0C #18181b",
            }}
          >
            <CategoryPill
              label="Todos"
              isActive={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
            />
            {CATEGORIES.map((cat) => (
              <CategoryPill
                key={cat.id}
                label={cat.label}
                isActive={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
              />
            ))}
          </div>
          <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            height: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #C00F0C;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #C00F0C;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #C00F0C;
          }
        `}</style>
        </div>
      </section>

      {/* GRID DE PRODUCTOS */}
      <main className="max-w-6xl mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              onClick={() => null /* modal si lo necesitas */}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MenuAll;
