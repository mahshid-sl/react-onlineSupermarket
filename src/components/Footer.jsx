import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#A7C957] to-[#94B447] text-white py-8 px-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-around items-center gap-6 sm:gap-8 sm:px-0">
        {/*===logo=== */}
        <div className="text-3xl sm:text-4xl font-bold text-center">
          <span className="text-sm md:text-xl">بارنو</span>
        </div>

        {/* ===links=== */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm sm:text-base text-center sm:text-left sm:text-nowrap">
          <Link
            to="/aboutUs"
            className="hover:text-[#F8961E] transition-colors "
          >
            درباره ما
          </Link>
          <Link
            to="/contactUs"
            className="hover:text-[#F8961E] transition-colors"
          >
            تماس با ما
          </Link>
          <Link to="/terms" className="hover:text-[#F8961E] transition-colors">
            شرایط و ضوابط
          </Link>
        </div>

        {/* ===Social Media=== */}
        <div className="flex items-center sm:flex-row gap-4 sm:gap-12 text-center sm:text-left text-lg sm:text-xl">
          <a target="_blank" href="https://facebook.com" aria-label="facebook">
            <FaFacebookF className="hover:text-[#F8961E] transition-colors" />
          </a>
          <a target="_blank" href="https://twitter.com" aria-label="twitter">
            <FaTwitter className="hover:text-[#F8961E] transition-colors" />
          </a>
          <a
            target="_blank"
            href="https://instagram.com"
            aria-label="instagram"
          >
            <FaInstagram className="hover:text-[#F8961E] transition-colors" />
          </a>
        </div>

        {/* copyRight */}
        <div className="text-base sm:text-sm text-gray-100 text-center  ">
          © 2025 بارنو. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
