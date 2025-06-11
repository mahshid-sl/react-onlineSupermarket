import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CategoryBar from "../components/CategoryBar";
import SubCategoryBar from "../components/SubCategoryBar";
import ProductsGrid from "../components/ProductGrid";
import ProductsFilter from "../components/ProductsFilter";
import ScrollToTop from "../components/ScrollToTop";
import ProductsSkeleton from "../components/ProductsSkeleton";
import SubCategorySkeleton from "../components/SubCategorySkeleton";

import { useSearch } from "../context/SearchContext";

function ProductListPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { searchQuery } = useSearch();

  //=== fethching all data===
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const allRes = await fetch("http://localhost:8000/products");
        if (!allRes.ok) throw new Error("خطا در دریافت محصولات");
        const allData = await allRes.json();
        setAllProducts(allData);

        // ====category_Products====
        let categoryProducts = allData;
        if (category) {
          categoryProducts = allData.filter((p) => p.category === category);
        }

        setProducts(categoryProducts);

        // ====subcategory_Products====
        const uniqueSubCategories = [
          ...new Set(categoryProducts.map((p) => p.subcategory)),
        ];
        setSubCategories(uniqueSubCategories);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  // ====reset subCategory===
  useEffect(() => {
    setSelectedSubCategory(null);
  }, [category, searchQuery]);

  //===final filter===
  useEffect(() => {
    let filtered = [...allProducts];

    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.subcategory?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      if (category) {
        filtered = filtered.filter((p) => p.category === category);
      }
    }

    if (selectedSubCategory) {
      filtered = filtered.filter((p) => p.subcategory === selectedSubCategory);
    }

    setProducts(filtered);
  }, [searchQuery, selectedSubCategory, category, allProducts]);

  const handleSubCategoryClick = (subcategory) => {
    setSelectedSubCategory(subcategory);
  };

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-6">
      <ScrollToTop />

      <CategoryBar selectedCategory={category} />

      {isLoading ? (
        <SubCategorySkeleton />
      ) : (
        <SubCategoryBar
          items={subCategories}
          selected={selectedSubCategory}
          onClick={handleSubCategoryClick}
        />
      )}

      <ProductsFilter>
        {error ? (
          <div className="text-center py-10 text-red-500">{error}</div>
        ) : isLoading ? (
          <ProductsSkeleton count={10} />
        ) : products.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            هیچ محصولی مطابق با جست‌وجو یا فیلتر یافت نشد.
          </div>
        ) : (
          <ProductsGrid products={products} />
        )}
      </ProductsFilter>
    </div>
  );
}

export default ProductListPage;
