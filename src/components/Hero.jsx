import { Link } from "react-router-dom";
import { categories } from "../data/categories";

export default function Hero() {
  return (
    <section
      className="mx-auto py-6 px-2 sm:px-4 md:px-6 max-w-7xl
      grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-center
      min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
    >
      {/*=== left-col===*/}

      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] hidden md:block md:col-span-2 order-2">
        <img
          src="/hero.webp"
          alt="barno-hero"
          className="absolute bottom-0 left-0 w-full h-full object-contain object-left"
        />
      </div>

      {/*=== categories ===*/}

      <div className="flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-6 md:col-span-3">
        {/*===Slogan===*/}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#717947] text-center">
          تازه‌ترین محصولات با بارنو
        </h1>
        {/* ===categories=== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-xl sm:max-w-md md:max-w-3xl">
          {categories.map((cat) => (
            <Link
              key={cat.categoryName}
              to={`/product/${encodeURIComponent(cat.categoryName)}`}
            >
              <div
                className="bg-white shadow-lg rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-center font-medium
              text-[0.7rem] sm:text-sm md:text-[0.75rem] lg:text-sm
              hover:bg-[#A7C957] hover:text-white hover:scale-105 transition-all duration-300"
              >
                <img
                  src={cat.categoryImg.replace("/public", "")}
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
      </div>
    </section>
  );
}
