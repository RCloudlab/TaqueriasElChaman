interface Props {
  onClick: () => void;
  side?: string;
}

export default function CornerFoldR({ onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="
        absolute bottom-0 right-0
        w-20 h-20
        cursor-pointer
        group
      "
    >
      {/* Triángulo */}
      <div
        className="
          w-full h-full
          bg-gradient-to-br from-gray-200 to-gray-300
          clip-fold-right
          origin-bottom-right border
          transition-transform duration-300
          group-hover:rotate-1 group-hover:scale-150 group-hover:border-gray-300
        "
      />
    </div>
  );
}
