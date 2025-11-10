import { IMAGES } from "../../constants/images";
import Diamods from "../ui/Diamods";
import DishesCard from "../ui/DishesCard";
import Marquee from "react-fast-marquee";

function OurDishes() {
  const menuItems = [
    {
      title: 'Quesadillas',
      imageUrl: IMAGES.insta,
      route: '/menu/quesadillas'
    },
    {
      title: 'Tacos',
      imageUrl: IMAGES.insta,
      route: '/menu/tacos'
    },
    {
      title: 'Burritos',
      imageUrl: IMAGES.insta,
      route: '/menu/burritos'
    },
    {
      title: 'Postres',
      imageUrl: IMAGES.insta,
      route: '/menu/postres'
    },
    {
      title: 'Bebidas',
      imageUrl: IMAGES.insta,
      route: '/menu/bebidas'
    },
  ];

  return (
    <section className="w-full bg-gray-900 py-20 overflow-hidden"> 
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
      </div>

      <div className="">
        <Marquee
          speed={80} 
          pauseOnHover={true}
          className="overflow-hidden py-6"
          autoFill={true}
        >
          {menuItems.map((item) => (
            <div 
              key={item.title} 
              className="w-[300px] md:w-[400px] mx-4 lg:mx-8"
            >
              <DishesCard
                route="/#"
                title={item.title}
                imageUrl={item.imageUrl}
                logoUrl={IMAGES.deerLogo}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default OurDishes;