import type { JSX } from "react";


interface Props{
        data:
        {
        texto?:JSX.Element;
        image?:"string";
        };
        side?: "left" | "right";
        children?: React.ReactNode;
}



export const Page = ({data, side, children} : Props) => {
  return (
    <div className={`
        relative w-1/2 h-full p-10
        ${side === "left" ? "border-r border-black" : ""}
        bg-black/85
      `}>

        {data.texto && (
        <p className="leading-relaxed">{data.texto}</p>
      )}

      {data.image && (
        <img
          src={data.image}
          className="w-full h-full object-cover rounded"
        />
      )}

      {children}
        
    </div>
  )
}
