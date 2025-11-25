import type {
  ContactInformation,
  OptionsNav,
} from "../utils/props";

/**ARREGLO GENERADOR DE LA INFORMACION: Horarios, telefono y dirección */
export const schedules: ContactInformation[] = [
  {
    id: "1",
    info: "6:30pm - 11:30pm",
  },
  {
    id: "2",
    info: "Lun-Vier: 6:30pm - 11:30pm",
  },
];

export const contactInformation: ContactInformation[] = [
  {
    id: "3",
    info: "+52 443 141 3199",
  },

  {
    id: "4",
    info: "Tejedores de Aranza 512, Vasco de Quiroga, Morelia",
  },
];

{
  /**ARREGLO GENERADOR OPCIONES NAV */
}
export const optionsNav: OptionsNav[] = [
  {
    id: "5",
    ref: "/",
    text: "Home",
  },
  {
    id: "6",
    ref: "/menu",
    text: "Menú",
  },
  {
    id: "7",
    ref: "/",
    text: "Nuestra Historia",
  },
  {
    id: "8",
    ref: "/",
    text: "Ubicacion",
  },
  {
    id: "9",
    ref: "/",
    text: "Contacto",
  },
];
{
  /*********************************************************** */
}
