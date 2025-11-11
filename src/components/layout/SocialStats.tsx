import StatItem from "../ui/StatItem";
import { useInView } from "react-intersection-observer";
import { statsData } from "../../constants/socialstats";

export default function SocialStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, 
  });
  return (
    <section ref={ref} className="bg-black text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8">
          {statsData.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} inView={inView} link={stat.link}/>
          ))}
        </div>
      </div>
    </section>
  );
}
