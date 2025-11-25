import { useState, useMemo } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { CATEGORIES } from "../../constants/categories";
import { MENU_ITEMS } from "../../constants/menu";
import FoodCard from "../ui/FoodCard";
import CategoryPill from "../ui/CategoryPill";
import { IMAGES } from "../../constants/images";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("default");

  const [selectedItem, setSelectedItem] = useState<(typeof MENU_ITEMS)[number] | null>(null);

  // Lógica de filtrado (Igual que antes)
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

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [activeCategory, q, sort]);

  const currentTitle = useMemo(() => {
    if (activeCategory === "all") return "NUESTRO MENÚ";
    const category = CATEGORIES.find((c) => c.id === activeCategory);
    return category ? category.label.toUpperCase() : "MENÚ";
  }, [activeCategory]);

  const FIRE_GIF_URL = IMAGES.buttonMenu;

  return (
    <div className="min-h-screen bg-black text-white font-sans pb-12 pt-28">
      {/* Estilos Inline para ocultar scrollbar pero permitir scroll */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* HEADER MEJORADO */}
      <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-zinc-900/60 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          
          {/* Botón Izquierda (Fijo ancho mínimo para no aplastarse) */}
          <div className="flex-shrink-0 w-10">
            <button
              aria-label="volver"
              className="p-2 rounded-full hover:bg-zinc-800 transition text-zinc-300 flex items-center justify-center"
            >
              <ArrowLeft size={24} />
            </button>
          </div>

          {/* Título al centro (Flexible y Adaptable) */}
          <div className="flex-grow flex justify-center px-2">
             <h1 
              key={activeCategory}
              // Clave: text-3xl en movil, sube hasta 6xl en escritorio. break-words permite bajar linea si es necesario
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase text-center break-words animate-pop"
              style={{ 
                backgroundImage: `url(${FIRE_GIF_URL})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitTextStrokeWidth: '0.1px',
                WebkitTextStrokeColor: 'red',
                lineHeight: 0.9,
                filter: 'drop-shadow(0 0 10px rgba(220,38,38,0.5))'
              }}
            >
              {currentTitle}
            </h1>
          </div>

          {/* Filtros a la derecha (Ocultos en móvil muy pequeño si quieres, o solo icono) */}
          <div className="flex-shrink-0 flex justify-end items-center">
            {/* Versión Desktop: Barra completa */}
            <div className="relative hidden sm:flex items-center bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden transition-all focus-within:border-red-900/50 focus-within:ring-1 focus-within:ring-red-900">
              <span className="pl-3 text-zinc-400">
                <Search size={16} />
              </span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar..."
                className="bg-transparent outline-none px-2 py-2 text-sm w-32 md:w-40 placeholder:text-zinc-600 text-white"
              />
            </div>

            {/* Versión Móvil: Solo icono (opcional, para ahorrar espacio al título) */}
            <button className="sm:hidden p-2 text-zinc-400 hover:text-white">
               <Search size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Categories Section */}
      <section className="bg-black border-b border-zinc-900 py-4">
        <div className="max-w-6xl mx-auto relative group">
          
          {/* Degradados laterales para indicar que hay scroll (Efecto visual elegante) */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none md:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none md:hidden" />

          {/* Contenedor con hide-scrollbar */}
          <div className="flex items-center gap-3 overflow-x-auto px-4 py-1 hide-scrollbar scroll-smooth">
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
                onClick={() => {
                  setActiveCategory(cat.id);
                  // Opcional: Resetear scroll al cambiar categoría si tienes lista larga
                }}
              />
            ))}
            
            {/* Espaciador al final para que el ultimo item no pegue al borde */}
            <div className="w-2 flex-shrink-0" />
          </div>
        </div>
      </section>

      {/* GRID */}
      <main className="max-w-6xl mx-auto px-4 pt-8">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
            {filteredItems.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-zinc-500">
            <Search size={48} className="mb-4 opacity-20" />
            <p className="text-xl">No encontramos platillos con ese nombre.</p>
          </div>
        )}
      </main>

      {/* MODAL (Sin cambios mayores, solo z-index seguro) */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-zinc-900 rounded-2xl p-1 max-w-md w-full border border-zinc-800 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
             <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-72 object-cover rounded-t-xl"
                />
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent" />
             </div>
             
             <div className="p-6 relative -mt-10">
                <h2 className="text-white text-3xl font-bold leading-tight drop-shadow-md">
                  {selectedItem.title}
                </h2>
                <p className="text-zinc-400 mt-3 text-sm leading-relaxed">{selectedItem.description}</p>
                
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-zinc-800">
                  <div className="text-white text-4xl font-black tracking-tighter">
                    ${selectedItem.price}
                  </div>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition transform active:scale-95"
                  >
                    Cerrar
                  </button>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;