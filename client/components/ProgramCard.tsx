import { Link } from "react-router-dom";

interface ProgramCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  href?: string;
  className?: string;
}

export default function ProgramCard({
  title,
  imageSrc,
  imageAlt,
  tags,
  href = "/register",
  className = "",
}: ProgramCardProps) {
  return (
    <div
      className={`bg-icreative-grey rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${className}`}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-48 sm:h-56 lg:h-48 object-cover"
      />
      <div className="p-4 sm:p-6">
        <div className="mb-4">
          <span className="inline-block bg-icreative-green text-black px-4 sm:px-6 py-2 rounded-full font-normal text-sm sm:text-base">
            {title}
          </span>
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-icreative-purple text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <Link
          to={href}
          className="inline-block bg-icreative-green text-black font-bold text-base sm:text-xl px-6 sm:px-8 py-2 sm:py-3 rounded-2xl hover:bg-opacity-90 transition-colors"
        >
          Register Here
        </Link>
      </div>
    </div>
  );
}
