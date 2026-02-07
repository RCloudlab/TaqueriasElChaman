const fechaApertura = new Date("2024-07-10");
const hoy = new Date();

const difMeses =
  (hoy.getFullYear() - fechaApertura.getFullYear()) * 12 +
  (hoy.getMonth() - fechaApertura.getMonth());

const años = Math.floor(difMeses / 12);
const meses = difMeses % 12;

const tiempo = `${años > 0 ? años + (años === 1 ? " año" : " años") : ""}${
  meses > 0
    ? (años > 0 ? " y " : "") + meses + (meses === 1 ? " mes" : " meses")
    : ""
}`;

export const Pagina3 = () => {
  return (
    <div>
      <div className="px-2 text-xl">
        <p className="text-gray-200 leading-relaxed mb-8 mt-16 ">
          Hoy, después de {tiempo}, seguimos compartiendo nuestra pasión:
          nuestros platillos preparados con cariño y servidos en un ambiente
          cercano, ideales para disfrutar por la tarde y la noche.
        </p>

        <p className="text-gray-200 md:leading-relaxed ">
          En El Chamán, cada taco cuenta una historia, y esa historia continúa
          contigo.
        </p>
      </div>
    </div>
  );
};
