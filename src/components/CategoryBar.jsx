import { Link } from "react-router-dom";
import { categories } from "../data/categories";

function CategoryBar({ selectedCategory }) {
  return (
    <div className="flex gap-5 justify-center pb-2 mt-2 shadow-sm flex-wrap">
      {categories.map((cat) => (
        <Link
          key={cat.categoryName}
          to={`/product/${encodeURIComponent(cat.categoryName)}`}
        >
          <div
            className={`bg-white shadow-lg rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-center font-medium
text-[0.7rem] sm:text-sm md:text-[0.75rem] lg:text-sm
${
  selectedCategory === cat.categoryName
    ? "text-[#717947] shadow-sm shadow-[#A7C957]"
    : "hover:bg-[#A7C957] hover:text-white hover:scale-105 transition-all duration-300"
}`}
          >
            <img
              src={cat.categoryImg}
              alt={cat.categoryName}
              className="w-full h-auto max-h-14 sm:max-h-16 md:max-h-20 object-contain mb-2"
            />
            <div className="break-words whitespace-normal leading-tight">
              {cat.categoryName}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryBar;
