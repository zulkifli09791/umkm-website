import { StarIcon } from '@heroicons/react/24/solid';

interface TestimonialCardProps {
  testimonial: {
    customer_name: string;
    rating: number;
    message: string;
    created_at?: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={`w-5 h-5 ${
          i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="flex mr-2">{renderStars()}</div>
        <span className="text-sm text-gray-500">({testimonial.rating})</span>
      </div>
      <p className="text-gray-700 mb-5 leading-relaxed italic">"{testimonial.message}"</p>
      <div className="border-t pt-4">
        <p className="font-medium text-gray-900">— {testimonial.customer_name}</p>
        {testimonial.created_at && (
          <p className="text-xs text-gray-500 mt-1">
            {new Date(testimonial.created_at).toLocaleDateString('id-ID', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;