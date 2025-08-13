import img from "../../../../src/assets/images/heroimg.webp";
import thumb_1 from "../../../../src/assets/images/thumb_1.png";
import thumb_2 from "../../../../src/assets/images/thumb_2.png";
import thumb_3 from "../../../../src/assets/images/thumb_3.png";
import thumb_4 from "../../../../src/assets/images/thumb_4.png";

import { React, useState } from "../../../services/centerServices";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, } from "swiper/modules";
import "./Mslider.css";

function Mslider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="heroimg"
      >
        <SwiperSlide>
          <img src={img} alt="img " />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img} alt="img " />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img} alt="img " />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img} alt="img " />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img} alt="img " />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={15}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumb_heroimg"
      >
        <SwiperSlide>
        <img src={thumb_4} alt=" " />
        </SwiperSlide>
        <SwiperSlide>
        <img src={thumb_1} alt=" " />
        </SwiperSlide>
        <SwiperSlide>
        <img src={thumb_2} alt=" " />
        </SwiperSlide>
        <SwiperSlide>
        <img src={thumb_3} alt=" " />
        </SwiperSlide>
        <SwiperSlide>
        <img src={thumb_4} alt=" " />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Mslider;
