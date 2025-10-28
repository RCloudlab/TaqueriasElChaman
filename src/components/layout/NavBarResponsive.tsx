import { FaSquare } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IMAGES } from "../../constants/images";

function NavBarResponsive() {
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

  return (
    <nav className="w-full bg-black text-white">
      {/* --- Barra superior --- */}
      <div className="flex flex-col sm:flex-row justify-between text-center sm:text-left">
        {/* Izquierda */}
        <div className="flex items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm py-2 flex-wrap sm:ml-16">
          <p>Lun-Sab: 6:30pm - 11:30pm</p>
          <FaSquare className="text-gray-400 rotate-45 size-1.5" />
          <p>Domingos: 12pm - 11:30pm</p>
        </div>

        {/* Derecha */}
        <div className="flex items-center justify-center sm:justify-end gap-3 text-xs sm:text-sm py-2 flex-wrap sm:mr-16">
          <p>taqueriaselchaman@gmail.com</p>
          <FaSquare className="text-gray-400 rotate-45 size-1.5" />
          <a
            href="tel:+524431413799"
            className="underline"
            aria-label="Llamar a +52 443 141 3799"
          >
            +52 443 141 3799
          </a>
          <FaSquare className="text-gray-400 rotate-45 size-1.5" />
          <a
            href={googleUrl}
            onClick={openMaps}
            target="_blank"
            rel="noopener noreferrer"
            className=""
            aria-label="Abrir dirección en Google Maps"
          >
            {address}
          </a>
        </div>
      </div>

      <hr className="border-[#3A3940] my-1 mx-6 sm:mx-12" />

      {/* --- Barra inferior --- */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-2">
        {/* Logo + Nombre */}
        <a
          className="flex flex-col sm:flex-row items-center mb-3 sm:mb-0 text-center sm:text-left"
          href="#"
        >
          <img
            src={IMAGES.deerLogo}
            alt="Logo Taquerías el Chaman"
            className="h-16 sm:h-20 object-contain mx-auto sm:mx-0"
          />
          <h1 className="text-2xl sm:text-4xl font-light sm:ml-2">
            Taquerías El Chaman
          </h1>
        </a>

        {/* Botón hamburguesa */}
        <button className="border border-red-600 px-6 py-3 sm:px-9 sm:py-4 hover:bg-red-900/30 transition flex items-center gap-3">
          <div className="flex flex-col gap-[5px]">
            <span className="block w-5 sm:w-6 h-[1.5px] bg-white" />
            <span className="block w-5 sm:w-6 h-[1.5px] bg-white" />
          </div>
          <IoIosArrowForward className="text-white text-lg sm:text-xl" />
        </button>
      </div>
    </nav>
  );
}

export default NavBarResponsive;
