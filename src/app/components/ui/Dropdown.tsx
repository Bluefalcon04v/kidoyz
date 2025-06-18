"use client";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import useOutSideClickToggle from "@/hooks/useOutSideClickToggle";
import { cn } from "../../../utils/cn";

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
    const { defaultValue = "", onChange, options = [], disable = false, className } = props;
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
                className={`h-full w-full border-2 border-highlight-teal hover:border-teal rounded-xl flex justify-start items-center bg-white text-start gap-2 px-2 py-1.5 min-w-36 `}
            >
                {selectedName}
            </div>
            {showDropdown && (
                <div className="z-50 absolute bg-white shadow-xl mt-2 border border-highlight-teal rounded-xl min-w-full overflow-hidden text-start">
                    {options.map(({ name, value }) => (
                        <div
                            key={name}
                            className={cn(
                                "hover:bg-teal p-2 px-3 hover:text-white cursor-pointer ",
                                name === selectedName &&
                                "bg-highlight-teal shadow-md text-white"
                            )}
                        >
                            <button
                                onClick={() => handleChange(name, value)}
                                className="capitalize"
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
