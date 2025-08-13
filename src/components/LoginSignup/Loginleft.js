import img from "assets/images/login_img.svg"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
function Loginleft() {
  return (
    <>
      <div className="container-fluid-">
        <div className="leftside">
          <div className="leftwrap">
            <p className="leftside_static_text">
              Make your money <br />
              back in an discount <br />
              offer or two test
            </p>
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <img
                  src={img}
                  alt="login banner"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                 src={img}
                  alt="login banner"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={img}
                  alt="login banner"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginleft;
