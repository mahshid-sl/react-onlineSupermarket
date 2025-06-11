const BasketItem = ({
  item,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className="flex justify-between items-center gap-4 p-4 rounded-lg shadow-sm bg-white w-full">
      {/* right-section images and info about products*/}
      <div className="flex items-center gap-3 w-full max-w-[60%] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-14 h-14 object-contain"
        />
        <div className="overflow-hidden">
          <h3 className="font-semibold text-sm sm:text-base text-[#2F4F4F] truncate max-w-[160px] sm:max-w-[200px]">
            {item.title}
          </h3>
          <p className="text-xs text-gray-500">
            قیمت واحد: {item.price.toLocaleString()} تومان
          </p>
        </div>
      </div>

      {/* left-section buttons*/}
      <div className="flex items-center gap-2 whitespace-nowrap">
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 text-sm"
        >
          حذف
        </button>

        <p className="text-[#2F4F4F] text-sm font-semibold">
          {(item.price * item.quantity).toLocaleString()} تومان
        </p>

        <button
          onClick={() => decreaseQuantity(item.id)}
          className="bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center"
        >
          -
        </button>

        <span className="text-sm">{item.quantity}</span>

        <button
          onClick={() => increaseQuantity(item.id)}
          className="bg-green-500 text-white w-7 h-7 rounded-full flex items-center justify-center"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
