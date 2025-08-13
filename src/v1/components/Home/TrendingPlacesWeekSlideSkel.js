import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Mcard from "../Outlets/Mcard";
import McardSkel from "../Outlets/McardSkel";

function TrendingPlacesWeekSlide({ trending }) {
  return (
    <>
      <div className="HomeMerchentSlides">
         
        <Swiper
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            990: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Pagination]}
        >
             
               <McardSkel />
             
        </Swiper>
      </div>
    </>
  );
}

export default TrendingPlacesWeekSlide;
