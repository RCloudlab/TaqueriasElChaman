import { FaQuoteRight, FaGoogle } from 'react-icons/fa';
import type { TReview } from "../../utils/Reviews"; 

interface ReviewCardProps {
  review: TReview;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="group relative flex flex-col justify-between h-full p-8 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="absolute top-6 right-6 text-4xl text-red-100 group-hover:text-red-200 transition-colors duration-300">
        <FaQuoteRight />
      </div>
      <div className="relative z-10 mb-6">
        <p className="text-gray-600 italic leading-relaxed text-base line-clamp-4">
          "{review.text}"
        </p>
      </div>
      <div className="mt-auto flex items-center gap-4 pt-6 border-t border-gray-50">
        <div className="relative shrink-0">
          <img 
            src={review.avatar} 
            alt={`Foto de ${review.author}`} 
            className="w-12 h-12 rounded-full object-cover border-2 border-red-500 md:border-red-100 md:group-hover:border-red-500 transition-colors"
          />
          
          {review.source === 'Google Maps' && (
             <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md border border-gray-100">
                <FaGoogle className="text-[10px] text-blue-600" />
             </div>
          )}
        </div>
        
        <div className="flex flex-col">
          <h4 className="font-bold text-gray-900 text-sm group-hover:text-red-600 transition-colors">
            {review.author}
          </h4>
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
            {review.source}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;