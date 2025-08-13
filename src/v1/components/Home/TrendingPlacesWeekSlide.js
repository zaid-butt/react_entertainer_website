import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import McardSkel from "../Outlets/McardSkel";
import Mcard from "../Outlets/Mcard";

function TrendingPlacesWeekSlide() {
  return (
    <>
      <div className="HomeMerchentSlides">
        <div className="Mbadgebox">
          Neighbourhood <i className="bi bi-chevron-right"></i>
          <span className="Mbadge">Al Karama</span>
          <span className="Mbadge">Business Bay</span>
          <span className="Mbadge">Al Karama</span>
          <span className="Mbadge">Marina</span>
          <span className="Mbadge">Jumeirah</span>
          <span className="Mbadge">Bur Dubai</span>
          <span className="Mbadge">Deira</span>
        </div>
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
          <SwiperSlide>
            <McardSkel />
          </SwiperSlide>
          <SwiperSlide>
            <Mcard />
          </SwiperSlide>
          <SwiperSlide>
            <Mcard />
          </SwiperSlide>
          <SwiperSlide>
            <Mcard />
          </SwiperSlide>
          <SwiperSlide>
            <Mcard />
          </SwiperSlide>
          <SwiperSlide>
            <Mcard />
          </SwiperSlide>
          <SwiperSlide>
            <Mcard />
          </SwiperSlide>
          <SwiperSlide>
            <Mcard />
          </SwiperSlide>
          <SwiperSlide>
            <Mcard />
          </SwiperSlide>
          <SwiperSlide>
            <Mcard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default TrendingPlacesWeekSlide;
