import {
  React,
  useParams
} from "../../../services/centerServices.js";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ScoopCard from "../Searchpg/ScoopCard";
import "./InsideScoop.css";

function InsideScoop() {
  var { lang } = useParams();
  if (lang === "ar") {
    lang = "rtl";
  }

  return (
    <>
      <div className="InsideScoop_title">
        <h2>Get the inside Scoop </h2>
      </div>
      <div className="InsideScoop_slider">
        <Swiper
          navigation
          dir={lang}
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
          <SwiperSlide>{<ScoopCard />}</SwiperSlide>
          <SwiperSlide>{<ScoopCard />}</SwiperSlide>
          <SwiperSlide>{<ScoopCard />}</SwiperSlide>
          <SwiperSlide>{<ScoopCard />}</SwiperSlide>
          <SwiperSlide>{<ScoopCard />}</SwiperSlide>
          <SwiperSlide>{<ScoopCard />}</SwiperSlide>
          <SwiperSlide>{<ScoopCard />}</SwiperSlide>
        </Swiper>
      </div>

      <div className="InsideScoop_btns text-center d-d">
        <a className="btn btn-secondary" href="#0">
          View all
        </a>
      </div>
    </>
  );
}

export default InsideScoop;
