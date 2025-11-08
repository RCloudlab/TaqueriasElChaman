import { IMAGES } from "../../constants/images";

function Menu() {
  return (
    <section className=" bg-black py-10">
      <div className="max-sm:flex-col max-sm:items-center max-sm:gap-20 container mx-auto flex justify-between bg-black px-11">
        <div>
          <img
            className="h-64 object-contain scale-x-[-1]"
            src={IMAGES.deerLogo}
            alt="Logo Taqueria El Chaman"
          />
        </div>
        <div className=" flex flex-col text-white justify-center  gap-7">
          <h2 className="text-7xl font-bold tracking-wider max-lg:text-5xl max-sm:text-6xl">
            MENÚ
          </h2>

          {/* OPCION BOTON 1*/}
          <button className=" bg-white text-black py-2 tracking-wide rounded-lg border hover:border-red-900/30 hover:bg-black hover:text-red-900 transition-colors duration-300 max-lg:w-30">
            Ver menú
          </button>

          {/*OPCIÓN BOTON 2 */}
          <button
            className="relative overflow-hidden bg-white text-black py-2 px-8 tracking-wide rounded-lg border
             hover:border-red-900 transition-all duration-500
             max-lg:w-30 group hover:bg-black hover:text-white hover:font-bold hover:scale-110"
          >
            <span className="relative z-10 transition-colors duration-500">
              Ver menú
            </span>

            <span
              className="absolute inset-0 bg-cover bg-[center_top_30%]
             translate-y-[140%] group-hover:translate-y-[10%]
             transition-transform duration-1000 ease-out opacity-90 scale-120"
              style={{ backgroundImage: `url(${IMAGES.buttonMenu})` }}
            ></span>
          </button>
        </div>

        <div>
          <img
            className="h-64 object-contain"
            src={IMAGES.deerLogo}
            alt="Logo Taqueria El Chaman"
          />
        </div>
      </div>
    </section>
  );
}
export default Menu;
