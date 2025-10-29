import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { IMAGES } from "../../constants/images";
import { HiOutlineArrowRight } from "react-icons/hi";

function Footer() {
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
    <div className="flex-col">
      <div className="bg-gray-800 p-4 py-6">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left">
          <p className="text-gray-400">
            ¿Necesitas alguna resevación especial?
          </p>
          <a
            href="mailto:reservaciones@taqueriaselchaman.com?subject=Reservaci%C3%B3n%20especial?body=Me%20gustar%C3%ADa%20hacer%20una%20reservaci%C3%B3n%20especial%20en%20Taquer%C3%ADas%20el%20Chaman.%0AHora:%0AFecha:%0AN%C3%BAmero%20de%20personas:%0ALugar:%0A"
            className="text-white underline hover:text-gray-300 transition-colors"
            aria-label="Enviar correo a reservaciones@taqueriaselchaman.com"
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className="bg-black text-white p-8 lg:p-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-2">PONTE EN CONTACTO</h3>
            <hr className="border-[#3A3940] mb-4" />
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
            <br className=""/>
            <hr className="border-transparent mt-2"/>
            <a
              href="tel:+524431413799"
              className="text-sm mb-4 underline"
              aria-label="Llamar a +52 443 141 3799"
            >
              +52 443 141 3799
            </a>
            <hr className="border-transparent mt-2"/>
            <p className="text-sm mb-4">taqueriasaelchaman@gmail.com</p>

            <div className="flex justify-center sm:justify-start space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=61565664003625"
                aria-label="Facebook"
                className="bg-red-700 text-black  w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/taqueriaselchaman/"
                aria-label="Instagram"
                className="bg-white text-black  w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@taqueriaselchaman"
                aria-label="Twitter"
                className="bg-white text-black  w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-2">NUESTRO MENÚ</h3>
            <hr className="border-[#3A3940] mb-4" />
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center sm:justify-start space-x-2 hover:text-gray-300"
                >
                  <HiOutlineArrowRight className="text-red-600" />
                  <span>Tacos</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center sm:justify-start space-x-2 hover:text-gray-300"
                >
                  <HiOutlineArrowRight className="text-red-600" />
                  <span>Burritos</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center sm:justify-start space-x-2 hover:text-gray-300"
                >
                  <HiOutlineArrowRight className="text-red-600" />
                  <span>Quesadillas</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center sm:justify-start space-x-2 hover:text-gray-300"
                >
                  <HiOutlineArrowRight className="text-red-600" />
                  <span>Groserias</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center sm:justify-start space-x-2 hover:text-gray-300"
                >
                  <HiOutlineArrowRight className="text-red-600" />
                  <span>Ver Más</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={IMAGES.deerLogo}
              alt="Logo Taquerías el Chaman"
              className="h-64 object-contain"
            />
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-2">HORARIO</h3>
            <hr className="border-[#3A3940] mb-4" />
            <p className="text-sm mb-3">Lun-Sáb: 6:30pm - 11:30pm</p>
            <p className="text-sm">Domingos: 12pm-11:30pm</p>
          </div>

          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold mb-2">INSTAGRAM</h3>
            <hr className="border-[#3A3940] mb-4" />
            <div className="grid grid-cols-3 gap-2">
              {/* Estas se podran mapear una vez se consuma la API */}
              <a href="https://www.instagram.com/taqueriaselchaman/">
                <img
                  src={IMAGES.insta}
                  alt="Instagram 1"
                  className="aspect-square object-cover w-full h-full"
                />
              </a>
              <a href="https://www.instagram.com/taqueriaselchaman/">
                <img
                  src={IMAGES.insta}
                  alt="Instagram 2"
                  className="aspect-square object-cover w-full h-full"
                />
              </a>
              <a href="https://www.instagram.com/taqueriaselchaman/">
                <img
                  src={IMAGES.insta}
                  alt="Instagram 3"
                  className="aspect-square object-cover w-full h-full"
                />
              </a>
              <a href="https://www.instagram.com/taqueriaselchaman/">
                <img
                  src={IMAGES.insta}
                  alt="Instagram 4"
                  className="aspect-square object-cover w-full h-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
