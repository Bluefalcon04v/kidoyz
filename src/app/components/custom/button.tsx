"use client";
import React from "react";

interface IProps {
  onClick?: unknown;
  text: string;
  className?: string;
  disabled?: boolean;
}

const ButtonCustom: React.FC<IProps> = ({
  className,
  disabled,
  onClick,
  text,
  ...props
}: IProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onClick}
      className={`${className}  ${
        disabled
          ? "bg-gray-400 text-gray-500 border-gray-300 !cursor-not-allowed opacity-60"
          : "bg-[#0076CE] text-white border-blue-200 active:bg-active-blue active:scale-95 cursor-pointer"
      } group relative flex items-center bg-[#0076CE] active:bg-active-blue px-8 py-1 border-2 border-blue-200 rounded-md overflow-hidden font-dm-sans font-semibold text-white text-sm align-middle tracking-wide active:scale-95 transition-all duration-500 cursor-pointer transform`}
      {...props}
    >
      {text}
    </button>
  );
};

export default ButtonCustom;
