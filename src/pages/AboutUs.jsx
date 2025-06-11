import BackBtn from "../components/BackBtn";

function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-12 bg-gradient-to-b from-[#F5F9F2] to-white min-h-[60vh]">
      <div className="text-center mb-10 ">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#4C6444] mb-4 drop-shadow-md">
          درباره ما
        </h1>
        <p className="text-base sm:text-lg text-[#2F4F4F] max-w-2xl mx-auto ">
          به بارنو خوش آمدید! ما یک سوپرمارکت آنلاین هستیم که با هدف ارائه
          تجربه‌ای بی‌نظیر در خرید محصولات باکیفیت و متنوع، همراه با تحویل سریع،
          در خدمت شما هستیم.
        </p>
      </div>

      {/* ====about us info==== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ease-in-out ">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-right hover:shadow-xl transition-all duration-400 hover:-translate-y-2 ">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#4C6444] mb-3">
            ماموریت ما
          </h2>
          <p className="text-sm sm:text-base text-[#2F4F4F] leading-snug">
            ارائه محصولات متنوع و باکیفیت با قیمت مناسب و تحویل سریع به درب خانه
            شما، با تمرکز بر رضایت مشتری.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 text-right hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#4C6444] mb-3">
            داستان ما
          </h2>
          <p className="text-sm sm:text-base text-[#2F4F4F] leading-snug">
            بارنو از سال 2020 با ایده‌ای نوآورانه برای خرید آنلاین شروع به کار
            کرد و اکنون به یکی از محبوب‌ترین پلتفرم‌های خرید تبدیل شده است.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 text-right hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#4C6444] mb-3">
            تیم ما
          </h2>
          <p className="text-sm sm:text-base text-[#2F4F4F] leading-snug">
            تیمی حرفه‌ای و متعهد که با دانش و تجربه، بهترین خدمات را به شما
            ارائه می‌دهد.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 text-right hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#4C6444] mb-3">
            ارزش‌های ما
          </h2>
          <p className="text-sm sm:text-base text-[#2F4F4F] leading-snug">
            کیفیت، راحتی خرید و اعتمادسازی با هر سفارش، پایه‌های کار ماست.
          </p>
        </div>
      </div>

      <BackBtn />
    </div>
  );
}

export default AboutUs;
