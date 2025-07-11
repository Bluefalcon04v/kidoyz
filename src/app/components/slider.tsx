"use client";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { LeftSvg, RightSvg } from "@/../public/svg";
import React, { useRef } from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { cn } from "../../utils/cn";

interface IProps {
  showArrows?: boolean;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  card?: any;
  breakpoints?: {
    [width: number]: {
      slidesPerView: number;
      slidesPerGroup?: number;
    };
  };
}

const Slider = ({
  card,
  data,
  breakpoints = {},
  showArrows = true,
  className,
}: IProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      if (swiperRef.current.isEnd) {
        swiperRef.current.slideTo(0);
      } else {
        swiperRef.current.slideNext();
      }
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      if (swiperRef.current.isBeginning) {
        swiperRef.current.slideTo(swiperRef.current.slides.length - 1);
      } else {
        swiperRef.current.slidePrev();
      }
    }
  };

  return (
    <div
      className={cn(
        "relative flex place-content-center place-items-center w-full",
        className
      )}
    >
      {showArrows && (
        <div
          onClick={goPrev}
          className="group left-1 z-40 absolute content-center place-items-center bg-white hover:bg-primary shadow-sm rounded-full size-9 active:scale-90 transition-all ease-in-out cursor-pointer"
        >
          <LeftSvg />
        </div>
      )}
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        // slidesPerGroup={responsiveBreakpoints}
        breakpoints={breakpoints}
        // slidesPerView={responsiveBreakpoints}
        className="mySwiper"
        spaceBetween={40}
        allowTouchMove
        speed={800}
        loop
      >
        {data.map((slide, index: number) => (
          <SwiperSlide key={index}>
            <div>{card!(slide)}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      {showArrows && (
        <div
          onClick={goNext}
          className="group right-1 z-40 absolute content-center place-items-center bg-white hover:bg-primary shadow-sm rounded-full size-9 active:scale-90 transition-all ease-in-out cursor-pointer"
        >
          <RightSvg />
        </div>
      )}
    </div>
  );
};

export default Slider;
