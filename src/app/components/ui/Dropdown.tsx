"use client";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import useOutSideClickToggle from "@/hooks/useOutSideClickToggle";
import { cn } from "@/utils/cn";
import { DropdownSvg } from "../../../../public/svg";

interface IProps {
  defaultValue?: string;
  onChange?: (value: string | number) => void;
  options?: { value: string | number; name: string | number }[];
  disable?: boolean;
  className?: string;
}
export interface IDropdownRef {
  setDefault: () => void;
}

const Dropdown = forwardRef<IDropdownRef, IProps>((props, ref) => {
  const {
    defaultValue = "",
    disable = false,
    options = [],
    className,
    onChange,
  } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedName, setSelectedName] = useState<string | number>(
    defaultValue
  );

  const toggleDropdown = () => {
    if (disable) return;
    setShowDropdown((prev) => !prev);
  };

  const dropdownRef = useOutSideClickToggle<HTMLDivElement>(showDropdown, () =>
    setShowDropdown(false)
  );

  useImperativeHandle(ref, () => ({
    setDefault: () => setSelectedName(defaultValue),
  }));

  const handleChange = (name: string | number, value: string | number) => {
    setSelectedName(name);
    setShowDropdown(false);
    onChange?.(value);
  };

  return (
    <div
      className={cn(
        "relative w-full font-lato font-semibold text-dark-gray capitalize cursor-pointer",
        className
      )}
    >
      <div
        ref={dropdownRef}
        onClick={toggleDropdown}
        className={`h-full w-full border-2 border-highlight-teal hover:border-teal justify-between rounded-xl flex  items-center bg-white text-start gap-2 p-2 px-4 min-w-36 `}
      >
        {selectedName}
        <div className={cn(showDropdown ? 'rotate-180 ' : 'rotate-0 ', "transition-all ease-in-out")}>
        <DropdownSvg />
        </div>
      </div>
      {showDropdown && (
        <div className="z-50 absolute bg-white shadow-xl mt-2 px-1 py-0.5 border border-highlight-teal rounded-xl min-w-full overflow-hidden text-start dropdown-starting-style">
          {options.map(({ name, value }) => (
            <div
              key={name}
              className={cn(
                "hover:bg-teal rounded-md my-0.5 hover:text-white cursor-pointer ",
                name === selectedName &&
                  "bg-highlight-teal shadow-md text-white"
              )}
            >
              <button
                onClick={() => handleChange(name, value)}
                className="p-2 px-4 w-full text-start capitalize cursor-pointer"
              >
                {name}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

Dropdown.displayName = "Dropdown";

export default Dropdown;
