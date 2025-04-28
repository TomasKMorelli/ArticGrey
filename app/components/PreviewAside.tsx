import React, { useState } from "react";
import { useAside } from '~/components/Aside';

export const PreviewAside: React.FC = () => {
  const { data, close } = useAside();
  const [purchaseType, setPurchaseType] = useState<'one-time' | 'subscription'>('one-time');
  const [quantity, setQuantity] = useState(1);

  if (!data) return null;

  const basePrice = parseFloat(data.price) || 0;
  const pricePerUnit = purchaseType === 'subscription' ? basePrice * 0.9 : basePrice;
  const totalPrice = (pricePerUnit * quantity).toFixed(2);

  return (
<div className="relative w-full h-full max-w-full flex flex-col overflow-hidden px-4 py-3 sm:gap-5 sm:w-125 xl:w-126 2xl:w-130 xl:gap-4 2xl:gap-4">
      
      <button
        onClick={close}
        className="absolute top-2 right-2 text-black hover:text-gray-700 text-2xl font-bold"
        aria-label="Close"
      >
        ×
      </button>

      {data.image && (
        <div className="flex justify-center">
          <img
            src={data.image}
            alt={data.title}
            className="sm:h-[300px] xl:h-[196px] 2xl:h-[300px]"
          />
        </div>
      )}
      
      <h2 className="text-xl sm:text-2xl font-bold text-black text-center sm:text-left">
        {data.title}
      </h2>

      <div className="flex justify-center sm:justify-start items-center gap-2 mt-2">
        <div className="flex text-black">
          {[...Array(5)].map((_, index) => (
            <svg key={index} className="w-4 h-4 fill-black" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.336 24 12 19.897 4.664 24 6 15.268 0 9.423l8.332-1.268z" />
            </svg>
          ))}
        </div>
        <p className="text-sm text-gray-600">(120 reviews)</p>
      </div>

      {data.description && (
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
          {data.description.split(',').map((tag: string, index: number) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm text-black"
            >
              <span className="w-2 h-2 bg-black rounded-full" />
              {tag.trim()}
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="grid grid-cols-5 text-gray-500 font-semibold text-xs mb-2">
          <p>Variant</p>
          <p className="text-center">Quantity</p>
          <p className="text-center">Price</p>
          <p className="text-center">Discount</p>
          <p className="text-center">Total</p>
        </div>

        <div className="grid grid-cols-5 items-center text-sm py-3 border-t">
          <div className="flex items-center gap-3">
            <img
              src={data.image}
              alt={data.title}
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <p className="font-medium">Small</p>
              <p className="text-xs text-gray-400">30</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-3 h-7 flex items-center justify-center border border-gray-400 rounded-md text-lg font-bold hover:bg-gray-200 transition"
            >
              -
            </button>
            <span className="w-1 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-3 h-7 flex items-center justify-center border border-gray-400 rounded-md text-lg font-bold hover:bg-gray-200 transition"
            >
              +
            </button>
          </div>
          <p className="text-center">${pricePerUnit.toFixed(2)}</p>
          <p className="text-center">
            {purchaseType === 'subscription' ? '10%' : '0%'}
          </p>
          <p className="text-center">${totalPrice}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 bg-gray-100 p-4 rounded-lg">
        <label className={`flex-1 cursor-pointer border rounded-lg p-4 ${purchaseType === 'one-time' ? 'border-black' : 'border-transparent'}`}>
          <input
            type="radio"
            name="purchaseType"
            value="one-time"
            checked={purchaseType === 'one-time'}
            onChange={() => setPurchaseType('one-time')}
            className="sr-only"
          />
          <div className="text-center">
            <p className="font-semibold text-sm">One-Time Purchase</p>
            <p className="font-bold text-base mt-1">${basePrice.toFixed(2)}</p>
            <p className="text-xs text-gray-400 mt-1">Delivery Every 2 Months</p>
          </div>
        </label>

        <label className={`flex-1 cursor-pointer border rounded-lg p-4 ${purchaseType === 'subscription' ? 'border-black' : 'border-transparent'}`}>
          <input
            type="radio"
            name="purchaseType"
            value="subscription"
            checked={purchaseType === 'subscription'}
            onChange={() => setPurchaseType('subscription')}
            className="sr-only"
          />
          <div className="text-center">
            <p className="font-semibold text-sm">Subscribe & Save</p>
            <p className="font-bold text-base mt-1">
              ${(basePrice * 0.9).toFixed(2)}
              <span className="text-xs text-[#A35115] font-semibold ml-1">Save 10%</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">Delivery Every 2 Months</p>
          </div>
        </label>
      </div>

      <button
        className="border border-black bg-black text-white py-4 text-lg font-semibold rounded focus:outline-none focus:ring-2 focus:ring-blue-600 transition flex justify-between items-center px-6 mt-2"
        onClick={() => {
          console.log('Add to Cart - Type:', purchaseType, 'Quantity:', quantity);
        }}
      >
        <span>Add to Cart</span>
        <span>${totalPrice}</span>
      </button>

      <p className="text-center text-sm text-black underline hover:text-gray-700 mt-4 cursor-pointer">
        View Full Details
      </p>
    </div>
  );
};

export default PreviewAside;
