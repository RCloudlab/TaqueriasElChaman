
type CategoryPillProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export const CategoryPill = ({ label, isActive, onClick }: CategoryPillProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-200 whitespace-nowrap
        ${isActive 
          ? 'bg-red-700 text-white border-red-700 shadow-[0_0_15px_rgba(185,28,28,0.5)] scale-105' 
          : 'bg-black text-zinc-300 border-red-700/50 hover:border-red-600 hover:text-white'
        }
      `}
    >
      {label}
    </button>
  );
};


export default CategoryPill