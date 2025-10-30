import { useState, useEffect } from "react";
import { FaSquare } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IMAGES } from "../../constants/images";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const address =
    "Tejedores de Aranza 512, Vasco de Quiroga, 58230 Morelia, Mich.";
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      } text-white px-8 py-1 lg:px-12`}
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-4 text-ml sm:text-[12px] flex-wrap sm:ml-1">
          <p>Lun-Sab: 6:30pm - 11:30pm</p>
          <FaSquare className="text-gray-400 rotate-45 size-1.5" />
          <p>Domingos: 12pm - 11:30pm</p>
        </div>

        <div className="hidden sm:flex items-center justify-end gap-4 text-sm py-2 flex-wrap sm:mr-1">
          <div className="flex items-center gap-4">
            <p>taqueriaselchaman@gmail.com</p>
            <FaSquare className="text-gray-400 rotate-45 size-1.5" />
            <a
              href="tel:+524431413799"
              className="underline"
              aria-label="Llamar a +52 443 141 3799"
            >
              +52 443 141 3799
            </a>
          </div>
          <FaSquare className="text-gray-400 rotate-45 size-1.5" />
          <a
            href={googleUrl}
            onClick={openMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-left"
            aria-label="Abrir dirección en Google Maps"
          >
            {address}
          </a>
        </div>
      </div>

      <hr className="border-[#3A3940] my-1 container mx-auto" />

      <div className="container mx-auto flex items-center justify-between">
        <a className="flex items-center gap-3" href="#">
          <img
            src={IMAGES.deerLogo}
            alt="Logo Taquerías el Chaman"
            className="h-16 sm:h-20 object-contain"
          />
          <h1 className="text-2xl sm:text-4xl font-light">
            Taquerías El Chaman
          </h1>
        </a>

        <button
          className="sm:hidden flex flex-col justify-center items-center gap-1 border border-red-600 px-4 py-2 rounded-lg hover:bg-red-900/30 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? (
            <IoMdClose className="text-white text-2xl" />
          ) : (
            <IoMdMenu className="text-white text-2xl" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden flex flex-col items-start gap-4 bg-[#111] mt-4 p-4 rounded-lg text-sm">
          <p>taqueriaselchaman@gmail.com</p>

          <a
            href="tel:+524431413799"
            className="underline"
            aria-label="Llamar a +52 443 141 3799"
          >
            +52 443 141 3799
          </a>

          <a
            href={googleUrl}
            onClick={openMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-left break-words"
            aria-label="Abrir dirección en Google Maps"
          >
            {address}
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
