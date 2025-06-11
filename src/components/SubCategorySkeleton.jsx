function SubCategorySkeleton({ count = 6 }) {
  const skeletonItems = Array(count).fill();

  return (
    <div className="flex flex-wrap gap-2 p-2 bg-green-50 rounded-lg mt-4 justify-center animate-pulse">
      {skeletonItems.map((_, index) => (
        <div key={index} className="w-20 h-10 bg-gray-200 rounded-full"></div>
      ))}
    </div>
  );
}

export default SubCategorySkeleton;
