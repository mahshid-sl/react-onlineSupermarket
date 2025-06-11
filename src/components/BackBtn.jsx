import { Link } from "react-router-dom";

function BackBtn() {
  return (
    <div className="mt-8 text-center">
      <Link
        to="/"
        className="inline-flex items-center gap-1 bg-[#A7C957] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#94B447] transition-colors duration-200"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}

export default BackBtn;
