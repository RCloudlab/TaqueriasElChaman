import { IMAGES } from "../constants/images";
import OurServices from "../components/ui/OurServices";
import { OurStory } from "../components/layout/OurStory";
import Collaborations from "../components/layout/Collaborations"
import OurDishes from "../components/layout/OurDishes";
import SocialStats from "../components/layout/SocialStats";
import Reviews from "../components/layout/Reviews";
import MenuSection from "../components/layout/MenuSection";

function Home() {
  return (
    <div className=" flex-1 w-full mx-auto">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={IMAGES.tacosHomeMobile}
          type="image/png"
        />
        <source srcSet={IMAGES.tacosHome} type="image/avif" />
        <source srcSet={IMAGES.tacosHomeweb} type="image/webp" />
        <img
          src={IMAGES.tacosHomejpg}
          alt="Plato de tacos al pastor y bistec de Taquerías El Chaman"
          className="w-full h-screen object-cover md:h-auto"
        />
      </picture>
      <OurDishes />
      <MenuSection />
      <OurServices />
      <OurStory />
      <SocialStats />
      <Collaborations />
      <Reviews/>
    </div>
  );
}

export default Home;