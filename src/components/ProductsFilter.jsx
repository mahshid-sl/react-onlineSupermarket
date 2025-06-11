// ProductsFilter.jsx
function ProductsFilter({ children }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6 p-4 bg-green-50 rounded-xl">
      {children}
    </div>
  );
}
export default ProductsFilter;
