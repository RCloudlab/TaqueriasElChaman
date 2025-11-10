import { IMAGES } from "../../constants/images";

export const OurStory = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="md:w-1/2 w-full">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={IMAGES.storyMobile}
            type="image/png"
          />
          <source srcSet={IMAGES.story} />
          <source src={IMAGES.storyweb} />
          <img
            src={IMAGES.storyjpg}
            alt="Taquero preparando tacos al pastor"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      <div className="text-pretty md:w-1/2 w-full bg-neutral-900 text-white p-10 flex flex-col justify-center">
        <h2 className=" text-center text-2xl sm:text-4xl font-bold text-red-600 mb-6">
          ¡NUESTRA HISTORIA!
        </h2>

        <p className="text-gray-700 md:leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          quisquam fuga culpa accusamus dolores nesciunt et, est maxime repellat
          provident inventore quis aut ea molestiae voluptatem debitis.lorem*2
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab
          asperiores soluta officia rem enim voluptatum dolore natus inventore
          laudantium fugit nostrum ipsa saepe autem placeat sequi quis, nam
          ducimus! Facere ullam nobis culpa nesciunt deleniti, animi eaque? Eos
          repudiandae quam, quos dolore sed suscipit, illum reprehenderit natus
          consectetur sit, nesciunt corporis distinctio. Fugiat, omnis? Eligendi
          soluta nemo consectetur saepe?
        </p>

        <p className="text-gray-200 md:leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          quisquam fuga culpa accusamus dolores nesciunt et, est maxime repellat
          provident inventore quis aut ea molestiae voluptatem debitis. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Sit enim
          voluptatibus, ipsa eveniet dolorum deleniti vero, quo architecto
          consectetur reiciendis, magnam laborum temporibus corporis et aut quas
          amet. Vel, minus?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ut impedit excepturi unde nulla, voluptas non facilis sed? Modi,
          voluptatum ipsam quia dignissimos aspernatur cumque sit est. Amet quis
          provident mollitia.
        </p>
      </div>
    </section>
  );
};
