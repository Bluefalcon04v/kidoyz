import React, { RefObject } from "react";
import { useRef } from "react";

type OutsideClickCallback = () => void;

type TOutSideToggle = <T extends HTMLElement>(
  show: boolean,
  callback: OutsideClickCallback
) => RefObject<T | null>;

const useOutSideClickToggle: TOutSideToggle = <T extends HTMLElement>(
  show: boolean,
  callback: OutsideClickCallback
) => {
  const ref = useRef<T>(null);
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node))
        callback();
    };
    if (show) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [show, callback]);
  return ref;
};

export default useOutSideClickToggle;
