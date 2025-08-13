//import cat_FoodDrinks from "../../../assets/images/cat_FoodDrinks.png"
import cat_BeautyFitness from "../../../assets/images/cat_BeautyFitness.png"
import cat_AttractionLeasure from "../../../assets/images/cat_AttractionLeasure.png"
import cat_FashionRetail from "../../../assets/images/cat_FashionRetail.png"
import cat_EverydayServices from "../../../assets/images/cat_EverydayServices.png"
import cat_Travel from "../../../assets/images/cat_Travel.png"
// dummy data
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import ContentLoader from "react-content-loader"
import { siteUrl } from "services/centerServices"

function HomeCategoriesImg() {
  return (
    <>
      <div id="categories_top2" className="padtop">
        <Container>
          <Row>
            <Col>
              <Swiper
                spaceBetween={30}
                slidesPerView={3}
                breakpoints={{
                  500: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                  767: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 24,
                  },
                }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                <ContentLoader viewBox="0 0 200 300" width={170} >
    <rect x="0" y="0" rx="5" ry="5" width="200" height="300" />
  </ContentLoader>
                  {/* <div className="cat_wrap">
                    <div className="cat_img">
                      <img
                        loading="lazy"
                        src={cat_FoodDrinks} alt="catimg"
                      />
                    </div>
                    <div className="cat_text">
                      1,459 <small>Food &amp; Drinks</small>
                    </div>
                  </div> */}
                </SwiperSlide>
                <SwiperSlide>
                  <a href={siteUrl+"/search/outlets"}>
                  <div className="cat_wrap">
                    <div className="cat_img">
                      <img
                        loading="lazy"
                        src={cat_BeautyFitness} alt="catimg"
                      />
                    </div>
                    <div className="cat_text">
                      197 <small>Beauty &amp; Fitness</small>
                    </div>
                  </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href={siteUrl+"/search/outlets"}>
                  <div className="cat_wrap">
                    <div className="cat_img">
                      <img
                        loading="lazy"
                        src={cat_AttractionLeasure} alt="catimg"
                      />
                    </div>
                    <div className="cat_text">
                      198 <small>Attractions &amp; Leisure</small>
                    </div>
                  </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href={siteUrl+"/search/outlets"}>
                  <div className="cat_wrap">
                    <div className="cat_img">
                      <img
                        loading="lazy"
                        src={cat_FashionRetail} alt="catimg"
                      />
                    </div>
                    <div className="cat_text">
                      39 <small>Fashion &amp; Retail</small>
                    </div>
                  </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href={siteUrl+"/search/outlets"}>
                  <div className="cat_wrap">
                    <div className="cat_img">
                      <img
                        loading="lazy"
                        src={cat_EverydayServices} alt="catimg"
                      />
                    </div>
                    <div className="cat_text">
                      78 <small>Everyday Services</small>
                    </div>
                  </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href={siteUrl+"/search/outlets"}>
                  <div className="cat_wrap">
                    <div className="cat_img">
                      <img
                        loading="lazy"
                        src={cat_Travel} alt="catimg"
                      />
                    </div>
                    <div className="cat_text">
                      168 <small>Travel</small>
                    </div>
                  </div>
                  </a>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HomeCategoriesImg;
