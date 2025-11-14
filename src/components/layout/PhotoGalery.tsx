export const PhotoGalery = () => {
  return (
    <section className="h-1/2 w-full">
      <div className=" bg-black px-10">
        <div className="text-white flex flex-col container mx-auto">
          <button className="text-left"> Ver más fotos</button>
          <div className="flex justify-between">
            <h3>GALERIA DE FOTOS</h3>
            <div>
              <button>izquierda</button>
              <button>derecha</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full">white</div>
    </section>
  );
};
