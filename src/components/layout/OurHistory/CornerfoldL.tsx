interface Props {
  onClick: () => void;
  side?: string;
}

export default function CornerFoldL({ onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="
        absolute bottom-0 left-0
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
          clip-fold-left
          origin-bottom-right border
          transition-transform duration-300
          group-hover:-rotate-12 group-hover:scale-110 group-hover:border-gray-300
        "
      />
    </div>
  );
}
