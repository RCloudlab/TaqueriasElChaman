import { IMAGES } from "../constants/images"

function Home() {
  return (
<<<<<<< HEAD
    <div>
      <h1></h1>
=======
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
>>>>>>> 29c19220941fb5ba377b246721cbf8a77009484d
    </div>
  )
}

export default Home