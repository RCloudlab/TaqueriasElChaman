import { menuItems } from "../../constants/dishes";
import { IMAGES } from "../../constants/images";
import { useIsMobile } from "../../hooks/isMobile";
import Diamods from "../ui/Diamods";
import DishesCard from "../ui/DishesCard";
import Marquee from "react-fast-marquee";

function OurDishes() {
  const isMobile = useIsMobile(768);

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
        {isMobile ? (

          <div className="flex overflow-x-auto py-6">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="flex-shrink-0 w-[300px] mx-4"
              >
                <DishesCard
                  route="/#"
                  title={item.title}
                  imageUrl={item.imageUrl}
                  logoUrl={IMAGES.deerLogo}
                />
              </div>
            ))}
          </div>
        ) : (
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
        )}
      </div>
    </section>
  );
}

export default OurDishes;
