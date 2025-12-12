import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google: any;
    initMap?: () => void;
  }
}

const TAQUERIA_LAT = 19.70278; // Latitud (Ejemplo)
const TAQUERIA_LNG = -101.19208; // Longitud (Ejemplo)
const GOOGLE_MAPS_API_KEY = "TU_API_KEY"; // ¡IMPORTANTE! Reemplaza esto

const Ubication = () => {
  // const [mapReady, setMapReady] = useState(false);

  const initMap = () => {
    if (!window.google || !window.google.maps) return;

    const taqueriaPos = { lat: TAQUERIA_LAT, lng: TAQUERIA_LNG };

    // 1. Crear la instancia del mapa en el div#mapa-taqueria
    const map = new window.google.maps.Map(
      document.getElementById("mapa-taqueria"),
      {
        zoom: 16,
        center: taqueriaPos,
        mapTypeId: "roadmap",
        // Puedes personalizar el estilo del mapa aquí si tienes un JSON de estilos
      }
    );

    // 2. Colocar el marcador
    new window.google.maps.Marker({
      position: taqueriaPos,
      map: map,
      title: "Taquería El Chamán",
    });

    // setMapReady(true);
  };

  useEffect(() => {
    // Carga el script de Google Maps si no ha sido cargado aún
    if (!window.google || !window.google.maps) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      // Define la función global para que Google Maps la llame
      window.initMap = initMap;
      document.head.appendChild(script);
    } else {
      // Si ya está cargado, inicializa directamente
      initMap();
    }

    // Cleanup function (opcional, para prevenir duplicados en desarrollo)
    return () => {
      // No hay una forma limpia de desvincular el script, pero limpiamos la función global
      delete window.initMap;
    };
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <section id="ubicacion" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título de la Sección */}
        <h2 className="text-4xl font-bold text-center mb-10 text-red-600">
          📍 Encuéntranos y Disfruta
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Columna del Mapa */}
          <div className="lg:w-2/3">
            <div
              id="mapa-taqueria"
              className="h-96 w-full rounded-xl shadow-2xl overflow-hidden"
              // Muestra un cargador si el mapa no está listo
            >
              {/* {!mapReady && (
                                <div className="h-full flex items-center justify-center bg-gray-200">
                                    <p className="text-gray-600 font-semibold">Cargando mapa...</p>
                                </div>
                            )} */}
            </div>
          </div>

          {/* Columna de Información */}
          <div className="lg:w-1/3 p-6 bg-white rounded-xl shadow-lg border-t-4 border-red-600">
            <h3 className="text-3xl font-bold mb-4 text-red-700">
              Taquería El Chamán
            </h3>

            <div className="space-y-4 text-gray-700">
              {/* Dirección */}
              <p>
                <strong className="font-semibold text-green-600">
                  Dirección:
                </strong>
                <br />
                Calle de Los Tacos No. 42, Col. El Sabor, Ciudad Ejemplo, C.P.
                58000
              </p>

              {/* Teléfono */}
              <p>
                <strong className="font-semibold text-green-600">
                  Teléfono:
                </strong>
                <br />
                <a
                  href="tel:+525512345678"
                  className="hover:text-red-500 transition duration-300"
                >
                  +52 55 1234 5678
                </a>
              </p>

              {/* Horario */}
              <p>
                <strong className="font-semibold text-green-600">
                  Horario de Servicio:
                </strong>
                <br />
                **Lunes a Jueves:** 12:00 PM - 11:00 PM
                <br />
                **Viernes a Domingo:** 12:00 PM - 02:00 AM
              </p>
            </div>

            {/* Botón de Indicaciones (Usando los colores de la marca) */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${TAQUERIA_LAT},${TAQUERIA_LNG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center w-full py-3 px-4 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700 transition duration-300 transform hover:scale-105"
            >
              🚗 Obtener Indicaciones
            </a>

            <p className="mt-4 text-sm text-center text-gray-500">
              ¡Te esperamos con los mejores tacos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ubication;
