import BackBtn from "../components/BackBtn";

function Terms() {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-12 bg-gradient-to-b from-[#F5F9F2] to-white min-h-[60vh]">
      <div className="text-center mb-10 animate-fade animate-duration-[1000ms]">
        <h1 className="text-xl sm:text-2xl font-bold text-[#4C6444] mb-4 drop-shadow-md">
          شرایط و ضوابط
        </h1>
        <p className="text-base sm:text-lg text-[#2F4F4F] max-w-2xl mx-auto leading-relaxed">
          لطفاً قبل از استفاده از خدمات بارنو، شرایط و ضوابط زیر را با دقت
          مطالعه کنید.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 text-right">
        <h2 className="text-md sm:text-xl font-semibold text-[#4C6444] mb-4">
          1. پذیرش شرایط
        </h2>
        <p className="text-sm sm:text-base text-[#2F4F4F] mb-4 leading-snug">
          با استفاده از وب‌سایت یا اپلیکیشن بارنو، شما موافقت خود را با این
          شرایط اعلام می‌کنید. در صورت عدم پذیرش، لطفاً از خدمات ما استفاده
          نکنید.
        </p>

        <h2 className="text-md sm:text-xl  font-semibold text-[#4C6444] mb-4 mt-6">
          2. سفارش و پرداخت
        </h2>
        <p className="text-sm sm:text-base text-[#2F4F4F] mb-4 leading-snug">
          کلیه سفارش‌ها پس از تأیید پرداخت پردازش می‌شوند. بارنو حق لغو سفارش در
          صورت موجودی ناکافی را محفوظ می‌دارد.
        </p>

        <h2 className="text-md sm:text-xl  font-semibold text-[#4C6444] mb-4 mt-6">
          3. تحویل و مرجوعی
        </h2>
        <p className="text-sm sm:text-base text-[#2F4F4F] mb-4 leading-snug">
          تحویل سفارش‌ها بر اساس زمان‌بندی اعلام‌شده انجام می‌شود. مرجوعی فقط در
          صورت آسیب‌دیدگی محصول و طی 48 ساعت پذیرفته می‌شود.
        </p>

        <h2 className="text-md sm:text-xl  font-semibold text-[#4C6444] mb-4 mt-6">
          4. مسئولیت‌ها
        </h2>
        <p className="text-sm sm:text-base text-[#2F4F4F] mb-4 leading-snug">
          بارنو هیچ‌گونه مسئولیتی در قبال استفاده نادرست از محصولات ندارد. لطفاً
          دستورالعمل‌های استفاده را رعایت کنید.
        </p>

        <h2 className="text-md sm:text-xl  font-semibold text-[#4C6444] mb-4 mt-6">
          5. تغییرات در شرایط
        </h2>
        <p className="text-sm sm:text-base text-[#2F4F4F] mb-4 leading-snug">
          بارنو حق تغییر این شرایط را با اطلاع قبلی از طریق وب‌سایت محفوظ
          می‌دارد.
        </p>
      </div>

      <BackBtn />
    </div>
  );
}

export default Terms;
