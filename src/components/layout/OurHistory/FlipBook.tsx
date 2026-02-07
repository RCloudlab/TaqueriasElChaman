import { useState, type JSX } from "react";
import { Pagina1 } from "./Pagina1";
import { Pagina3 } from "./Pagina3";
import { Page } from "./Page";
import CornerFoldR from "./CornerFoldR";
import CornerFoldL from "./CornerfoldL";
import { IMAGES } from "../../../constants/images";

interface DatosPagina {
  texto?: JSX.Element;
  imagen?: string;
}

const paginas: DatosPagina[] = [
  { texto: <Pagina1 /> },
  {
    imagen: IMAGES.storyweb,
  } /**se supone que aqui agrego las url de las imagenes */,
  { texto: <Pagina3 /> },
  { imagen: IMAGES.burrito },
];

export const FlipBook = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < paginas.length - 2) setIndex(index + 2);
  };

  const preview = () => {
    if (index > 0) setIndex(index - 2);
  };
  return (
    <div className="relative bg-black/90">
      <div className="w-[900px] h-[520px] bg-white rounded-xl shadow-2xl flex overflow-hidden">
        <Page data={paginas[index]} side="left">
          {index > 0 && <CornerFoldL side="left" onClick={preview} />}
        </Page>

        <Page data={paginas[index + 1]} side="right">
          {index < paginas.length - 2 && (
            <CornerFoldR side="right" onClick={next} />
          )}
        </Page>
      </div>
    </div>
  );
};
