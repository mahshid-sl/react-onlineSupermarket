import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import BasketPage from "./pages/BasketPage";
import FavoritePage from "./pages/FavoritePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductListPage from "./pages/ProductListPage";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Terms from "./pages/Terms";
import ThanksPage from "./pages/ThanksPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster />
      <div
        dir="rtl"
        className="font-vazirNormal bg-[#F5F9F2] flex flex-col min-h-screen overflow-x-hidden"
      >
        {/* ===Header=== */}
        <Header />
        {/* ===Main Content with Routes=== */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:category" element={<ProductListPage />} />
            <Route path="/favorites" element={<FavoritePage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/Thanks" element={<ThanksPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        {/* ===Footer=== */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
