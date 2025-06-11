import { Link } from "react-router-dom";
import BackBtn from "../components/BackBtn";

function NotFoundPage() {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-12 bg-gradient-to-b from-[#F5F9F2] to-white min-h-[60vh] flex items-center justify-center">
      <div className="text-center animate-fade animate-duration-[1000ms]">
        <img
          src="/404-error.png"
          alt="error-404"
          className="mx-auto mb-6 w-64 h-64 object-contain" // تنظیم اندازه و حاشیه
        />
        <h1 className="text-xl sm:text-2xl font-bold text-[#4C6444] mb-4 drop-shadow-md">
          صفحه یافت نشد (404)
        </h1>
        <p className="text-base sm:text-lg text-[#2F4F4F] max-w-xl mx-auto leading-relaxed mb-6">
          متأسفیم، صفحه‌ای که دنبالش هستید پیدا نشد. ممکنه آدرس اشتباه باشد یا
          صفحه حذف شده باشد. لطفاً به صفحه اصلی بازگردید.
        </p>
        <BackBtn />
      </div>
    </div>
  );
}

export default NotFoundPage;
