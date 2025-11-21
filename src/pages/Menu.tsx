import MenuCard from "../components/ui/MenuCard";
import Diamods from "../components/ui/Diamods";
import { menuMain } from "../constants/menuMain";

function menu() {
    return (<div className="flex-1 w-full mx-auto bg-[#000000] text-white">
        <section className="text-center">
            <div><Diamods numberOfDiamonds={4}/></div>
            <h1>Nuestro Menú</h1>
            <div><Diamods numberOfDiamonds={4}/></div>
        </section>
        <section>
            {menuMain.map((item) => (
                <MenuCard key={item.id} nombre={item.nombre} imagen={item.imagen} />
            ))};
        </section>
    </div>);

}

export default menu;