import MenuCard from "../components/ui/MenuCard";
import Diamonds from "../components/ui/Diamods";
import { menuMain } from "../constants/menuMain";

function Menu() {
    return (
        <div className="min-h-screen w-full bg-[#000000] text-white selection:bg-red-600 selection:text-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24 md:pt-36">
                <header className="flex flex-col md:flex-row items-center justify-center mb-16 gap-4">
                    <div className="hidden md:block">
                        <Diamonds numberOfDiamonds={4}/>
                    </div>
                    <div className="flex flex-col items-center relative">
                        <h1 className="text-3xl md:text-5xl uppercase font-black text-center">
                            Nuestro Menú
                        </h1>
                        <div className="w-24 h-0.5 bg-red-600 mt-4 rounded-sm"></div>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <Diamonds numberOfDiamonds={4}/>
                    </div>
                </header>

                <section>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
                        {menuMain.map((item) => (
                            <div key={item.id} className="w-full max-w-xs hover:-translate-y-2 transition-transform duration-300">
                                <MenuCard 
                                    nombre={item.nombre} imagen={item.imagen} categoryId={item.categoryId} />
                            </div>
                        ))}
                    </div>
                </section>

                <div className="h-24"></div>
            </div>
        </div>
    );
}

export default Menu;