"use client";
import React, { useState, useEffect } from "react";

interface QuantityInputProps {
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  min = 1,
  max = 10,
  value = 1,
  onChange,
}) => {
  const [qty, setQty] = useState<number>(value);

  const clamp = (val: number) => Math.max(min, Math.min(max, val));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = parseInt(e.target.value, 10);
    if (!isNaN(inputVal)) {
      const clamped = clamp(inputVal);
      setQty(clamped);
      onChange?.(clamped);
    }
  };

  const increment = () => {
    if (qty < max) {
      const newQty = qty + 1;
      setQty(newQty);
      onChange?.(newQty);
    }
  };

  const decrement = () => {
    if (qty > min) {
      const newQty = qty - 1;
      setQty(newQty);
      onChange?.(newQty);
    }
  };

  useEffect(() => {
    setQty(clamp(value));
  }, [value]);

  return (
    <div className="flex items-center overflow-hidden text-black">
      <button
        type="button"
        onClick={decrement}
        disabled={qty <= min}
        className={`w-8 h-8 flex items-center justify-center border border-gray rounded-sm relative group disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 cursor-pointer active:scale-90 hover:border-2 transition-all ease-in-out`}
      >
        <span className="block absolute bg-black group-disabled:bg-neutral-400 w-[10px] h-[2px]"></span>
      </button>
      <input
        type="number"
        value={qty}
        onChange={handleInputChange}
        min={min}
        max={max}
        className="focus:outline-none w-12 font-semibold text-center appearance-none no-spinner"
      />
      <button
        type="button"
        onClick={increment}
        disabled={qty >= max}
        className={`w-8 h-8 flex items-center justify-center border border-gray relative rounded-sm disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 cursor-pointer active:scale-90 transition-all hover:border-2 ease-in-out`}
      >
        <span className="block absolute bg-black group-disabled:bg-neutral-400 w-[10px] h-[2px]"></span>
        <span className="block absolute bg-black group-disabled:bg-neutral-400 w-[2px] h-[10px]"></span>
      </button>
    </div>
  );
};

export default QuantityInput;
