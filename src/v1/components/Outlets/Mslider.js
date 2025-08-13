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
          <img src="https://b2cappassetscdn.theentertainerme.com/website_images/heroimg.png" alt=" " />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://b2cappassetscdn.theentertainerme.com/website_images/heroimg.png" alt=" " />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://b2cappassetscdn.theentertainerme.com/website_images/heroimg.png" alt=" " />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://b2cappassetscdn.theentertainerme.com/website_images/heroimg.png" alt=" " />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://b2cappassetscdn.theentertainerme.com/website_images/heroimg.png" alt=" " />
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
        <img src="https://b2cappassetscdn.theentertainerme.com/website_images/thumb_4.png" alt=" " />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://b2cappassetscdn.theentertainerme.com/website_images/thumb_1.png" alt=" " />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://b2cappassetscdn.theentertainerme.com/website_images/thumb_2.png" alt=" " />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://b2cappassetscdn.theentertainerme.com/website_images/thumb_3.png" alt=" " />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://b2cappassetscdn.theentertainerme.com/website_images/thumb_4.png" alt=" " />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Mslider;
