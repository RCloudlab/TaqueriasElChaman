import { ICONS } from "../../constants/images";

type DiamodsProps = {
    numberOfDiamonds?: number;
};

function Diamods({ numberOfDiamonds = 1 }: DiamodsProps) {
  return (
    <div className="flex items-center gap-3">
      {Array.from({ length: numberOfDiamonds }, (_, index) => (
        <span key={index} className="">
          <img src={ICONS.diamod} alt="Diamante" className="object-contain" width={18} />
        </span>
      ))}
    </div>
  );
}

export default Diamods;
