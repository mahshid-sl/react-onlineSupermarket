import BackBtn from "../components/BackBtn";

function ContactUs() {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-6 bg-[#F5F9F2] min-h-[60vh]">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#4C6444] mb-4">
          تماس با ما
        </h1>
        <p className="text-sm sm:text-base text-[#2F4F4F]">
          برای هرگونه سوال یا پشتیبانی، با ما در ارتباط باشید!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-4 text-right">
          <h2 className="text-lg sm:text-xl font-semibold text-[#4C6444] mb-2">
            اطلاعات تماس
          </h2>
          <p className="text-sm sm:text-base text-[#2F4F4F]">
            تلفن: 4567-1234-021 <br />
            ایمیل: support@barno.com <br />
            آدرس: تهران، خیابان اصلی، پلاک 10
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-4 text-right">
          <h2 className="text-lg sm:text-xl font-semibold text-[#4C6444] mb-2">
            فرم تماس
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="نام شما"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
            />
            <input
              type="email"
              placeholder="ایمیل شما"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
            />
            <textarea
              placeholder="پیام شما"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#A7C957] h-24 resize-none"
            ></textarea>
            <button className="w-full bg-[#A7C957] hover:bg-[#94B447] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              ارسال پیام
            </button>
          </div>
        </div>
      </div>

      <BackBtn />
    </div>
  );
}

export default ContactUs;
