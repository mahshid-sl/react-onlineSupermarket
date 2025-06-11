import { useFavorites } from "../context/FavoriteContext";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaShoppingCart, FaArrowRight, FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";

export default function FavoritePage() {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  function handleAddToCart(product) {
    addToCart(product);
    toast.success("محصول به سبد خرید اضافه شد");
  }

  function handleRemove(productId) {
    removeFromFavorites(productId);
    toast.success("از علاقه‌مندی‌ها حذف شد");
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className=" flex items-center text-xl gap-2 sm:text-2xl font-bold text-[#2F4F4F]">
          <FaHeart /> علاقه‌مندی‌های من
        </h2>
        <button
          onClick={() => navigate("/product/لبنیات%20و%20بستنی")}
          className="flex items-center gap-2 bg-[#A7C957] hover:bg-[#94B447] text-white py-1.5 px-3 rounded-full text-sm"
        >
          <FaArrowRight />
          بازگشت به محصولات
        </button>
      </div>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          هنوز هیچ محصولی به علاقه‌مندی‌ها اضافه نکرده‌اید.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {favorites.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow p-3 flex flex-col justify-between"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-20 object-contain mx-auto mb-3"
              />

              <h3 className="text-xs sm:text-sm font-medium text-center mb-1 line-clamp-2 min-h-[2rem]">
                {product.title}
              </h3>

              <p className="text-center font-bold text-[#2F4F4F] text-sm mb-3">
                {product.price} تومان
              </p>

              <div className="flex flex-col gap-1">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex items-center justify-center gap-1.5 bg-[#A7C957] hover:bg-[#94B447] text-white py-1.5 rounded-full text-xs sm:text-sm mb-1"
                >
                  <FaShoppingCart className="text-sm" />
                  افزودن به سبد
                </button>

                <button
                  onClick={() => handleRemove(product.id)}
                  className="flex items-center justify-center gap-1.5 bg-red-100 hover:bg-red-200 text-red-600 py-1.5 rounded-full text-xs sm:text-sm"
                >
                  <FaTrash className="text-sm" />
                  حذف از علاقه‌مندی
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
