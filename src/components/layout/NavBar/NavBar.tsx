import { useState, useEffect } from "react";
import { ItemsNav } from "./ItemsNav";
import { IMAGES } from "../../../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { optionsNav } from "../../../constants/navbarConstant";
import type { OptionsNav } from "./props";
import { IoClose } from "react-icons/io5";

export const NavBar = () => {
  /**CAMBIAR FONDO AL SCROLEAR */
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  {
    /**Boton dirección */
  }
  const address = "VER UBICACIÓN ";
  const query = encodeURIComponent(address);
  const googleUrl = `https://www.google.com/maps/place/Tacos+El+Chaman/data=!4m2!3m1!1s0x0:0x3fad54bab9095e7e?sa=X&ved=1t:2428&ictx=111`;

  const openMaps = (e: any) => {
    e.preventDefault();
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isiOS = /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;
    const isAndroid = /android/i.test(ua);

    if (isiOS) {
      window.location.href = `maps://?q=${query}`;
      return;
    }
    if (isAndroid) {
      window.location.href = `geo:0,0?q=${query}`;
      return;
    }

    window.open(googleUrl, "_blank", "noopener");
  };
  {
    /***************************************************************** */
  }

  {
    /**FUNCION MENÚ HAMBURGUESA */
  }
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`flex flex-col w-full fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-md"
          : "bg-transparent py-8"
      } text-white px-8 py-3 lg:px-12`}
    >
      <div className="container mx-auto relative py-2">
        {/**Nav section */}
        <div className="flex justify-between -my-2 items-center md:pt-2">
          {/**Logo, name */}
          <div className="flex space-x-3 items-center">
            <a href="/">
              <img
                src={IMAGES.deerLogo}
                alt="Logo Taqueria Chaman"
                className="size-16 md:-my-2 mt-2"
              />
            </a>
            <a href="/">
              <h1 className="text-2xl">Taquerías El Chaman</h1>
            </a>
          </div>

          {/**NAV */}
          <div className="hidden md:flex space-x-6 text-center max-lg:space-x-2">
            {optionsNav.map((option: OptionsNav) => (
              <ItemsNav key={option.id} {...option} />
            ))}
          </div>
          {/**Address Button */}
          <div>
            <button className="hidden md:block bg-red-900 py-1 px-4 rounded-lg hover:bg-red-900/80 transition-all duration-400">
              <a
                href={googleUrl}
                onClick={openMaps}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-[10px] sm:text-sm sm:mb-4 "
                aria-label="Abrir dirección en Google Maps"
              >
                {address}
              </a>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden ml-20 max-md:flex md:px-4 text-5xl text-red-900 hover:text-red-900/80 transition-all duration-400"
          >
            {isOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
      {/**Buttons mobile */}
      <div className={`flex m-auto ${isOpen ? "-mb-[12px]" : "mb-0"}`}>
        <div
          onClick={closeMenu}
          className={`${
            isOpen ? "block py-4 text-center sm:text-left" : "hidden"
          } block lg:hidden w-[100vw] bg-red-900/10 text-gray-750 rounded-b-md text-md -ml-8`}
        >
          {optionsNav.map((option: OptionsNav) => (
            <ItemsNav styles="ml-14" key={option.id} {...option} />
          ))}
          <a className=" ml-14" href={googleUrl} target="_blank">
            Ubicacion
          </a>
        </div>
      </div>
    </nav>
  );
};
