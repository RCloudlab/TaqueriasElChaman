interface Props {
  id: string;
  ref: string;
  text: string;
}

export const ItemsNav = ({ id, ref, text }: Props) => {
  return (
    <div>
      <a
        id={id}
        href={ref}
        className=" text-base uppercase border border-transparent border-b-2 hover:border-b-red-900 max-xl:text-xs transition-all duration-300"
      >
        {text}
      </a>
    </div>
  );
};
