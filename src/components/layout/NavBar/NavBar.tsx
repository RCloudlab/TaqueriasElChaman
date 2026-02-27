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
      className={`flex flex-col w-full fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isScrolled || isOpen
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-transparent py-6"
      } text-white px-6 py-4 lg:px-12`}
    >
      <div className="container mx-auto relative flex justify-between items-center">
        {/**Logo and Name */}
        <div className="flex space-x-3 flex-shrink-0 items-center">
          <a href="/">
            <img
              src={IMAGES.deerLogo}
              alt="Logo Taqueria Chaman"
              className="size-14 md:size-16"
            />
          </a>
          <a href="/">
            <h1 className="text-xl md:text-2xl font-serif font-bold tracking-wide">
              Taquerías El Chamán
            </h1>
          </a>
        </div>

        {/**Desktop Nav */}
        <div className="hidden lg:flex space-x-8 items-center">
          {optionsNav.map((option: OptionsNav) => (
            <ItemsNav key={option.id} {...option} styles="text-sm font-medium tracking-wider hover:text-red-500" />
          ))}
          <a
            href={googleUrl}
            onClick={openMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-5 rounded-md font-bold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            aria-label="Abrir dirección en Google Maps"
          >
            {address}
          </a>
        </div>

        {/**Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-3xl text-red-500 hover:text-red-400 transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/**Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-gray-800 shadow-2xl transition-all duration-300 ease-in-out origin-top overflow-hidden ${
          isOpen ? "opacity-100 max-h-[400px] py-4" : "opacity-0 max-h-0 py-0 border-transparent"
        }`}
      >
        <div className="flex flex-col container mx-auto px-6 space-y-2">
          {optionsNav.map((option: OptionsNav) => (
            <div key={option.id} onClick={closeMenu} className="w-full">
              <ItemsNav 
                {...option} 
                styles="block w-full py-3 text-base font-medium text-gray-200 hover:text-red-500 border-b border-gray-800"
              />
            </div>
          ))}
          <a
            href={googleUrl}
            onClick={(e) => {
              closeMenu();
              openMaps(e);
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 mt-4 rounded-md transition-colors"
          >
            Ubícate Aquí
          </a>
        </div>
      </div>
    </nav>
  );
};
