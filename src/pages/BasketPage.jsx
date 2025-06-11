import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import { useState } from "react";
import BasketItem from "../components/BasketItem";

export default function Basket() {
  const {
    cart,
    totalPrice,
    finalPrice,
    discount,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    applyDiscount,
  } = useCart();

  const isEmpty = cart.length === 0;
  const isDiscountApplied = discount > 0;

  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  function handleDiscount() {
    if (isCouponApplied) {
      toast.error("کد تخفیف قبلا اعمال شده است");
      return;
    }

    if (couponCode.trim().toLowerCase() === "off20") {
      applyDiscount(0.2);
      toast.success("کد تخفیف با موفقیت اعمال شد 🎉");
      setIsCouponApplied(true);
    } else {
      toast.error("کد تخفیف نامعتبر است");
    }
  }

  if (isEmpty) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center px-4 min-h-[60vh] animate-fade-in">
        <img
          src="/images/cart/cart.png"
          alt="سبد خرید خالی"
          className="w-48 sm:w-56 mb-4 transition-transform duration-300 hover:scale-105"
        />
        <h2 className="text-lg sm:text-xl font-bold text-[#4C6444] mb-2">
          سبد خرید شما خالی است!
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mb-4">
          هنوز محصولی به سبد خرید خود اضافه نکرده‌اید.
        </p>
        <Link
          to={"/"}
          className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 text-xs sm:text-sm font-medium transition-colors duration-200"
        >
          بازگشت به فروشگاه
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 text-right relative min-h-[60vh]">
      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-[#4C6444] text-center sm:text-right z-10 relative">
        🛒 سبد خرید شما
      </h1>

      {/* لیست محصولات */}
      <div className="space-y-4 z-10 relative">
        {cart.map((item) => (
          <BasketItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ))}
      </div>

      {/* 🧾 بخش کد تخفیف و جمع کل */}
      <div className="mt-8 bg-gray-50 p-4 rounded-lg shadow-sm space-y-4 z-10 relative">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <input
            onChange={(e) => setCouponCode(e.target.value)}
            value={couponCode}
            type="text"
            placeholder="کد تخفیف را وارد کنید"
            className="border border-gray-300 rounded-md px-3 py-1.5 w-full sm:w-64 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-200 text-sm"
          />
          <button
            onClick={handleDiscount}
            disabled={isCouponApplied}
            className="bg-[#A7C957] hover:bg-[#94B447] text-white px-4 py-1.5 rounded-md w-full sm:w-fit transition-colors duration-200 text-sm"
          >
            {isCouponApplied ? "اعمال شد" : "اعمال کدتخفیف"}
          </button>
        </div>

        <div className="text-xs sm:text-sm space-y-2">
          <p className="flex justify-between">
            <span>جمع کل:</span>
            <span className="font-semibold">
              {totalPrice.toLocaleString()} تومان
            </span>
          </p>
          {isDiscountApplied && (
            <p className="flex justify-between text-green-600 font-medium">
              <span>کد تخفیف اعمال شد (۲۰٪):</span>
              <span>{discount.toLocaleString()} تومان</span>
            </p>
          )}
          <p className="flex justify-between text-base font-bold text-[#4C6444]">
            <span>مبلغ قابل پرداخت:</span>
            <span>{finalPrice.toLocaleString()} تومان</span>
          </p>
        </div>
        <Link
          to={"/product/لبنیات%20و%20بستنی"}
          className="block w-full bg-white border border-[#4C6444] hover:bg-gray-100 text-[#4C6444] py-2 rounded-md text-sm font-bold text-center transition-colors duration-200 mt-2"
        >
          افزودن محصولات بیشتر 🛍️
        </Link>
        <Link
          to="/thanks"
          className="block w-full bg-[#4C6444] hover:bg-[#3B5036] text-white py-2 rounded-md text-sm font-bold text-center transition-colors duration-200"
        >
          نهایی‌سازی خرید
        </Link>
      </div>
    </div>
  );
}
