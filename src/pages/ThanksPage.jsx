import { Link } from "react-router-dom";
import BackBtn from "../components/BackBtn";

function ThanksPage() {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-12 bg-gradient-to-b from-[#F5F9F2] to-white min-h-[60vh] flex items-center justify-center">
      <div className="text-center animate-fade animate-duration-[1000ms]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="#A7C957"
          className="mx-auto mb-6"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
        </svg>
        <h1 className="text-xl sm:text-2xl font-bold text-[#4C6444] mb-4 drop-shadow-md">
          سفارش شما با موفقیت ثبت شد!
        </h1>
        <p className="text-base sm:text-lg text-[#2F4F4F] max-w-xl mx-auto leading-relaxed mb-6">
          از شما برای خرید از بارنو تشکر می‌کنیم. سفارش شما در حال پردازش است و
          به‌زودی تحویل داده خواهد شد. کد رهگیری سفارش شما به ایمیلتان ارسال شده
          است.
        </p>
        <BackBtn />
      </div>
    </div>
  );
}

export default ThanksPage;
