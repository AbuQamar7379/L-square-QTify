import React from "react";
import "./carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import CarouselLeftNavigation from "./Carousel Left Navigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./Carousel Right Navigation/CarouselRightNavigation";
import { useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";

const Controls = ({ data, swiper }) => {
  useEffect(() => {
    swiper?.slideTo(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, swiper]);

  return <></>;
};

const Carousel = ({ data, component }) => {
  return (
    <div className="carouselWrapper">
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={10}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data?.map((item) => (
          <SwiperSlide key={item?.id}>{component(item)}</SwiperSlide>
        ))}
      </Swiper>
      {/* <Swiper
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={10}
        allowTouchMove
      >
        {(swiper) => <Controls data={data} swiper={swiper} />}
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data?.map((item) => (
          <SwiperSlide key={item?.id}>{component(item)}</SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};

export default Carousel;
