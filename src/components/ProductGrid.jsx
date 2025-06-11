import ProductCard from "./ProductCard";

function ProductsGrid({ products }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
      {products.length > 0 ? (
        products.map((p) => <ProductCard key={p.id} product={p} />)
      ) : (
        <div className="text-center py-10 text-[#2F4F4F]">
          هیچ محصولی یافت نشد
        </div>
      )}
    </div>
  );
}

export default ProductsGrid;
