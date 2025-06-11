import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "favorites";

// create context
const FavoriteContext = createContext();

// context provider
export default function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (product) => {
    if (!favorites.find((item) => item.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  const removeFromFavorites = (productId) => {
    setFavorites(favorites.filter((item) => item.id !== productId));
  };

  const isInFavorites = (productId) => {
    return favorites.some((item) => item.id === productId);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isInFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

//
export function useFavorites() {
  return useContext(FavoriteContext);
}
