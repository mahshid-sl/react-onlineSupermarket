function ProductsSkeleton({ count = 10 }) {
  const skeletonItems = Array(count).fill();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
      {skeletonItems.map((_, index) => (
        <div
          key={index}
          className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] bg-white rounded-xl shadow p-3 flex flex-col items-center justify-between animate-pulse"
        >
          <div className="h-20 sm:h-22 md:h-24 w-full bg-gray-200 rounded"></div>
          <div className="w-3/4 h-10 bg-gray-200 rounded mt-2"></div>
          <div className="w-1/2 h-4 bg-gray-200 rounded mt-3"></div>
          <div className="w-full h-8 bg-gray-200 rounded mt-5"></div>
        </div>
      ))}
    </div>
  );
}

export default ProductsSkeleton;
