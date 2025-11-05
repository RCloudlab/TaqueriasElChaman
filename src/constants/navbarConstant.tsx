import type {
  ContactInformation,
  OptionsNav,
} from "../components/layout/NavBar/props";

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
    id: "1",
    info: "+52 443 141 3199",
  },

  {
    id: "2",
    info: "Tejedores de Aranza 512, Vasco de Quiroga, Morelia",
  },
];

{
  /**ARREGLO GENERADOR OPCIONES NAV */
}
export const optionsNav: OptionsNav[] = [
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
