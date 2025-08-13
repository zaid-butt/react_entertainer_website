
import React from "react";

import { Container, Row, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

function GoingToLove() {
  return (
    <>
      <div id="goingtolove">
        <Container className="padtop padbot">
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
                    slidesPerView: 5,
                    spaceBetween: 24,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="cat_wrap">
                    <img
                      loading="lazy"
                      src="https://b2cappassetscdn.theentertainerme.com/Cart2022Icons/brunches.svg" alt=" "
                    />
                    <div className="cat_text_top">Brunches </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cat_wrap">
                    <img
                      loading="lazy"
                      src="https://b2cappassetscdn.theentertainerme.com/Cart2022Icons/buffets.svg" alt=" "
                    />
                    <div className="cat_text_top">Buffets </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cat_wrap">
                    <img
                      loading="lazy"
                      src="https://b2cappassetscdn.theentertainerme.com/Cart2022Icons/attractions_1.svg" alt=" "
                    />
                    <div className="cat_text_top">Top attractions </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cat_wrap">
                    <img
                      loading="lazy"
                      src="https://b2cappassetscdn.theentertainerme.com/Cart2022Icons/hotels.svg" alt=" "
                    />
                    <div className="cat_text_top">Hotel offers </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cat_wrap">
                    <img
                      loading="lazy"
                      src="https://b2cappassetscdn.theentertainerme.com/Cart2022Icons/top_clubs.svg" alt=" "
                    />
                    <div className="cat_text_top">Top clubs </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default GoingToLove;
