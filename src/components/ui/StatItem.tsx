import { motion } from "framer-motion";
import { useCountUp } from "../../hooks/CountUp";
import type { Tstats } from "../../utils/SocialStatsType";

type TstatsItem = {
  stat: Tstats
  index: number
  inView: boolean
  link: string
}

export default function StatItem({ stat, index, inView, link }: TstatsItem) {
  const count = useCountUp(stat.target, 1500, inView);
  const IconComponent = stat.icon;
  const openSocial = () => {
    window.open(link, "_blank");
  }

  return (
    <motion.div
      whileHover={{ scale: 1.15, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      onClick={openSocial}
      className={`
        flex items-center justify-center space-x-3 sm:space-x-4 
        opacity-0 ${inView ? 'animate-fade-in-up' : ''}
        p-4 rounded-lg cursor-pointer // Añadí padding, borde y cursor
      `}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <span className="text-5xl sm:text-6xl font-extrabold text-white   text-right">
        {count}
      </span>

      <div className="flex flex-col items-start">
        <span className="text-sm sm:text-base font-medium text-gray-300 tracking-wide">
          {stat.label}
        </span>
        <IconComponent
          className="text-3xl sm:text-4xl"
          style={{ color: stat.color }}
        />
      </div>
    </motion.div>
  );
}
