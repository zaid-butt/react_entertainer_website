
import {
  React,
  useParams
} from "../../../services/centerServices.js";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SearchCard from "./SearchSliderCard";

function SearchSlider() {
  let { lang } = useParams();
  if (lang === "ar") {
    lang = "rtl";
  }

  return (
    <>
      <div className="search_slider">
        <Swiper
          navigation
          dir={lang}
          slidesPerView={1.1}
          breakpoints={{
            768: {
              slidesPerView: 2.5,
            },
            
          }}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide>{<SearchCard />}</SwiperSlide>
          <SwiperSlide>{<SearchCard />}</SwiperSlide>
          <SwiperSlide>{<SearchCard />}</SwiperSlide>
          <SwiperSlide>{<SearchCard />}</SwiperSlide>
          <SwiperSlide>{<SearchCard />}</SwiperSlide>
          <SwiperSlide>{<SearchCard />}</SwiperSlide>
          <SwiperSlide>{<SearchCard />}</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default SearchSlider;
