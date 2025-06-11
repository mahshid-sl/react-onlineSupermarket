import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CartProvider from "./context/CartContext.jsx";
import SearchProvider from "./context/SearchContext.jsx";
import FavoriteProvider from "./context/FavoriteContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <SearchProvider>
        <FavoriteProvider>
          <App />
        </FavoriteProvider>
      </SearchProvider>
    </CartProvider>
  </StrictMode>
);
