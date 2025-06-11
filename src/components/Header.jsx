import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="bg-gradient-to-r from-[#A7C957] to-[#94B447] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 sm:gap-6 px-4 py-4 sm:py-6 flex-wrap">
        {/*=== Logo ===*/}
        <Link to={"/"}>
          <img
            className="h-10 sm:h-14 object-contain"
            src="/logo.png"
            alt="Barno Logo"
          />
        </Link>
        {/*=== Search Bar ===*/}
        {location.pathname.startsWith("/product") && <Search />}
        {/* <Search /> */}
        {/*=== Icons ===*/}
        <div className="flex items-center gap-4 sm:gap-6 text-xl sm:text-2xl mt-4 sm:mt-0">
          <button
            onClick={() => navigate("/favorites")}
            aria-label="علاقه‌مندی‌ها"
            className="cursor-pointer hover:text-[#F8961E] transition-colors duration-200"
          >
            <FaHeart />
          </button>

          <button
            onClick={() => navigate("/basket")}
            aria-label="سبد خرید"
            className="relative cursor-pointer hover:text-[#F8961E] transition-colors duration-200"
          >
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-[#F8961E] text-xs text-white px-1.5 py-0.5 rounded-full">
              {cart.length}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
