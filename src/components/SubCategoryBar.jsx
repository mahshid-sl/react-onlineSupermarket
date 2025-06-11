function SubCategoryBar({ items, onClick, selected }) {
  return (
    <div className="flex flex-wrap gap-2 p-2 bg-green-50 rounded-lg mt-4 justify-center">
      <button
        onClick={() => onClick(null)}
        className={`px-3 py-1 rounded-full text-sm ${
          selected === null
            ? "bg-[#A7C957] text-white"
            : "bg-gray-200 text-[#2F4F4F]"
        }`}
      >
        همه
      </button>
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onClick(item)}
          className={`px-3 py-1 rounded-full text-sm ${
            selected === item
              ? "bg-[#A7C957] text-white"
              : "bg-gray-200 text-[#2F4F4F]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default SubCategoryBar;
