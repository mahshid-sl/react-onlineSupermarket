import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { useFavorites } from "../context/FavoriteContext";

function ProductCard({ product }) {
  const { addToFavorites, removeFromFavorites, isInFavorites } = useFavorites();
  const isFavorite = isInFavorites(product.id);
  function toggleFavorite() {
    if (isFavorite) {
      removeFromFavorites(product.id);
      toast.success("از علاقه‌مندی‌ها حذف شد");
    } else {
      addToFavorites(product);
      toast.success("به علاقه‌مندی‌ها اضافه شد");
    }
  }

  const { addToCart } = useCart();
  const navigate = useNavigate();

  function handleAddToCart() {
    addToCart(product);
    navigate("/basket");
    toast.success("محصول به سبد خرید اضافه شد");
  }

  return (
    <div
      className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px]
    bg-white rounded-xl shadow hover:shadow-lg
      flex flex-col items-center p-3 transition-all relative
    select-none"
    >
      {/* === favorite btn=== */}
      <button
        onClick={toggleFavorite}
        className={`absolute top-2 left-2 transition-colors ${
          isFavorite ? "text-red-500" : "text-gray-400 hover:text-red-500"
        }`}
        aria-label="علاقه‌مندی"
      >
        <FaHeart className="w-5 h-5" />
      </button>

      <img
        src={product.image}
        alt={product.title}
        className="h-20 sm:h-22 md:h-24 object-contain mb-4"
      />

      <h3
        className="text-xs sm:text-sm md:text-base text-center font-medium
                    line-clamp-2 min-h-[2.5rem] break-words mt-2"
      >
        {product.title}
      </h3>

      <p className="text-[#2F4F4F] font-bold mt-3 text-sm sm:text-base">
        {product.price} تومان
      </p>

      <button
        onClick={handleAddToCart}
        className="mt-5 w-full bg-[#A7C957] hover:bg-[#94B447]
                  text-white text-xs sm:text-sm py-1.5 rounded-full"
      >
        افزودن به سبد
      </button>
    </div>
  );
}

export default ProductCard;
