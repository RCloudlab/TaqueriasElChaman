import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  ref: string;
  text: string;
  styles?: string;
}

export const ItemsNav = ({ id, ref, text, styles='' }: Props) => {

  const navigate = useNavigate();

    const handleClick = () => {
        navigate(ref);
    };

  return (
    <div className="cursor-pointer">
      <a
        id={id}
        onClick={handleClick}
        className={` ${styles} text-xs uppercase border border-transparent border-b-2 hover:border-b-red-900 max-xl:text-xs transition-all duration-300`} 
      >
        {text}
      </a>
    </div>
  );
};
