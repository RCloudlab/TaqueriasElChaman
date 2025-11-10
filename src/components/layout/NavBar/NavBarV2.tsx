import { useState, useEffect } from "react";
import { ItemsContact } from "../../ui/ItemsContact";
import { ItemsNav } from "../../ui/ItemsNav";
import { IMAGES } from "../../../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  schedules,
  contactInformation,
  optionsNav,
} from "../../../constants/navbarConstant";
import type { ContactInformation, OptionsNav } from "./props";

export const NavBarV2 = () => {
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
  const googleUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

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

  return (
    <nav
      className={`flex flex-col w-full fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      } text-white px-8 py-2 lg:px-12`}
    >
      <div className="container mx-auto relative py-2">
        {/**Information Section */}
        <div className="hidden md:block lg:flex justify-between text-xs pb-2 space-y-1 lg:space-y-0">
          {/**schedules */}
          <div className="flex justify-between space-x-5">
            {schedules.map((schedule: ContactInformation) => (
              <ItemsContact key={schedule.id} {...schedule} />
            ))}
          </div>

          {/**Phone, Address */}
          <div className="grid grid-rows-2 md:flex md:justify-between">
            {contactInformation.map((contact: ContactInformation) => (
              <ItemsContact
                styles="justify-star pl-0 space-y-1"
                key={contact.id}
                {...contact}
              />
            ))}
          </div>
        </div>

        {/**Dividing line */}
        <hr className="hidden md:block border-[#3A3940] my-2 container mx-auto" />

        {/**Nav section */}
        <div className="flex justify-between -my-2 items-center md:pt-2">
          {/**Logo, name */}
          <div className="hidden md:flex space-x-2 text-4xl items-center">
            <a href="#">
              <img
                src={IMAGES.deerLogo}
                alt="Logo Taqueria Chaman"
                className="lg:h-28 object-contain -my-3 h-16"
              />
            </a>
            <a href="#">
              <h1 className="max-xl:text-2xl max-md:text-lg">
                Taquerías El Chaman
              </h1>
            </a>
          </div>

          {/**NAV */}
          <div className="hidden lg:flex space-x-6 text-center max-lg:space-x-2">
            {optionsNav.map((option: OptionsNav) => (
              <ItemsNav key={option.id} {...option} />
            ))}
          </div>
          {/**Address Button */}
          <div>
            <button className="bg-red-900 py-1 px-4 rounded-lg hover:bg-red-900/80 transition-all duration-400">
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
            className="hidden ml-20 max-lg:flex md:px-4 text-4xl text-red-900 hover:text-red-900/80 transition-all duration-400"
          >
            {" "}
            <GiHamburgerMenu />
          </button>
        </div>

        {/**Buttons mobile */}
        <div className="fex text-center">
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } block lg:hidden bg-black/50 text-gray-750 space-x-6 absolute -right-3 top-28 rounded-md`}
          >
            {optionsNav.map((option: OptionsNav) => (
              <ItemsNav key={option.id} {...option} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex md:hidden space-x-4 text-4xl items-center">
        <a href="#">
          <img
            src={IMAGES.deerLogo}
            alt="Logo Taqueria Chaman"
            className="lg:h-28 object-contain h-12 mt-2"
          />
        </a>
        <a href="#">
          <h1 className="text-3xl">Taquerías El Chaman</h1>
        </a>
      </div>
    </nav>
  );
};
