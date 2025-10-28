import { IMAGES } from "../../constants/images";
import Diamods from "../ui/Diamods";
import DishesCard from "../ui/DishesCard";

function OurDishes() {
  const menuItems = [
    {
      title: 'Quesadillas',
      imageUrl: IMAGES.insta,
      route: '/menu/quesadillas' // <-- Define la ruta aquí
    },
    {
      title: 'Tacos',
      imageUrl: IMAGES.insta,
      route: '/menu/tacos' // <-- Define la ruta aquí
    },
    {
      title: 'Burritos',
      imageUrl: IMAGES.insta,
      route: '/menu/burritos' // <-- Define la ruta aquí
    },
  ];

  return (
    <section className="w-full bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <header className="text-center">
          <div className="flex justify-center items-center gap-4 md:gap-6">
            <Diamods numberOfDiamonds={4} />
            <h2 className="text-white text-4xl md:text-5xl font-bold">
              Nuestros platillos
            </h2>
            <Diamods numberOfDiamonds={4} />
          </div>
          <div className="w-px h-10 bg-red-600 mx-auto mt-8 mb-4 md:mb-5"></div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {menuItems.map((item) => (
            <DishesCard
              route="/#"
              key={item.title}
              title={item.title}
              imageUrl={item.imageUrl}
              logoUrl={IMAGES.deerLogo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurDishes;
