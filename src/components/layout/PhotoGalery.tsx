import { galery } from "../../constants/galery";
import { ArrowLeft, ArrowRight  } from 'lucide-react';
import React, { useState, useRef } from "react";



export const PhotoGalery = () => {
  return (
    /*This secction is black */
    <section className="h-96 w-full relative">
      <div className="h-2/3 bg-black px-10">
        <div className="text-white flex flex-col container mx-auto">
          <hr className=" border-[#3A3940] container mb-14 mx-auto" />

          <button className="my-2 w-36 text-center bg-red-900 py-1 px-4 rounded-lg hover:bg-red-900/80 transition-all duration-400">
            Ver más fotos
          </button>

          <div className="flex justify-between">
            <h3 className="tracking-widest font-bold text-2xl">
              GALERIA DE FOTOS
            </h3>
            <div className="space-x-2">
              <button className="border">
                <ArrowLeft className="text-white"/>
              </button>
              <button className="border">
                <ArrowRight className="text-white"/>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*This secction is white */}
      <div className="bg-white w-full h-1/3"></div>

      {/*Galery to be on this secction*/}
      <div className="absolute top-40">
        <div className="flex ">
          {galery.map((g) => (
            <div className="w-48 h-48 overflow-hidden rounded-xl" key={g.alt}>
              <img
                className="w-full h-full object-cover mx-2 rounded-xl"
                src={g.url}
                alt={g.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
