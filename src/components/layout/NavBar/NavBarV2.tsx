import { useState, useEffect } from "react";
import { ItemsContact } from "./ItemsContact";
import { ItemsNav } from "./ItemsNav";
import { IMAGES } from "../../../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";

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
    /************************************************************************** */
  }

  {
    /**ARREGLO GENERADOR DE LA INFORMACION: Horarios, telefono y dirección */
  }
  interface ContactInformation {
    id: string;
    info: string;
  }

  const schedules: ContactInformation[] = [
    {
      id: "1",
      info: "6:30pm - 11:30pm",
    },

    {
      id: "2",
      info: "Lun-Vier: 6:30pm - 11:30pm",
    },
  ];

  const contactInformation: ContactInformation[] = [
    {
      id: "1",
      info: "+52 443 141 3199",
    },

    {
      id: "2",
      info: "Tejedores de Aranza 512, Vasco de Quiroga, Morelia",
    },
  ];

  {
    /******************************************************************* */
  }

  {
    /**ARREGLO GENERADOR OPCIONES NAV */
  }
  interface OptionsNav {
    id: string;
    ref: string;
    text: string;
  }

  const optionsNav: OptionsNav[] = [
    {
      id: "1",
      ref: "#",
      text: "Home",
    },
    {
      id: "1",
      ref: "#",
      text: "Menú",
    },
    {
      id: "1",
      ref: "#",
      text: "Nuestra Historia",
    },
    {
      id: "1",
      ref: "#",
      text: "Ubicacion",
    },
    {
      id: "1",
      ref: "#",
      text: "Contacto",
    },
  ];
  {
    /*********************************************************** */
  }

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
      <div className="container mx-auto relative">
        {/**Information Section */}
        <div className="flex justify-between text-xs">
          {/**schedules */}
          <div className="flex space-x-5">
            {schedules.map((schedule: ContactInformation) => (
              <ItemsContact key={schedule.id} {...schedule} />
            ))}
          </div>

          {/**Phone, Address */}
          <div className="flex space-x-5">
            {contactInformation.map((contact: ContactInformation) => (
              <ItemsContact key={contact.id} {...contact} />
            ))}
          </div>
        </div>

        {/**Dividing line */}
        <hr className="border-[#3A3940] my-2 container mx-auto" />

        {/**Nav section */}
        <div className="flex justify-between -my-2 items-center">
          {/**Logo, name */}
          <div className="flex space-x-2 text-4xl items-center">
            <img
              src={IMAGES.deerLogo}
              alt="Logo Taqueria Chaman"
              className="h-16 object-contain "
            />
            <h2 className="max-xl:text-2xl max-lg:text-lg">
              Taquerías El Chaman{" "}
            </h2>
          </div>

          {/**NAV */}
          <div className="hidden lg:flex space-x-6 text-center max-lg:space-x-2">
            {optionsNav.map((option: OptionsNav) => (
              <ItemsNav key={option.id} {...option} />
            ))}
          </div>
          {/**Address Button */}
          <div>
            <button className="bg-red-900 py-1 px-4 rounded-lg">
              <a
                href={googleUrl}
                onClick={openMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm mb-4 "
                aria-label="Abrir dirección en Google Maps"
              >
                {address}
              </a>
            </button>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden max-lg:flex px-4 text-2xl text-red-900"
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
            } block lg:hidden bg-black/50 text-gray-750 space-x-6 absolute right-6 top-20 rounded-2x`}
          >
            {optionsNav.map((option: OptionsNav) => (
              <ItemsNav key={option.id} {...option} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
