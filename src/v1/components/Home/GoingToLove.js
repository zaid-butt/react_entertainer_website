//import brunches from "../../../assets/images/brunches.svg"
import buffets from "../../../assets/images/buffets.svg"
import attractions_1 from "../../../assets/images/attractions_1.svg"
import hotels from "../../../assets/images/hotels.svg"
import top_clubs from "../../../assets/images/top_clubs.svg"
// dummy data
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import ContentLoader from "react-content-loader"

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
                <ContentLoader viewBox="0 0 400 170" width={200} >
                <circle cx="248" cy="59" r="49" />
    <circle cx="263" cy="66" r="8" />
    <rect x="175" y="120" rx="0" ry="0" width="156" height="8" />
    <rect x="204" y="137" rx="0" ry="0" width="100" height="8" />
    <rect x="248" y="128" rx="0" ry="0" width="0" height="1" />
    <rect x="247" y="126" rx="0" ry="0" width="1" height="8" />
    <rect x="252" y="166" rx="0" ry="0" width="1" height="0" />
  </ContentLoader>
                  {/* <div className="cat_wrap">
                    <img
                      loading="lazy"
                      src={brunches} alt=" "
                    />
                    <div className="cat_text_top">Brunches </div>
                  </div> */}
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cat_wrap">
                    <img
                      loading="lazy"
                      src={buffets} alt=" "
                    />
                    <div className="cat_text_top">Buffets </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cat_wrap">
                    <img
                      loading="lazy"
                      src={attractions_1} alt=" "
                    />
                    <div className="cat_text_top">Top attractions </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cat_wrap">
                    <img
                      loading="lazy"
                      src={hotels} alt=" "
                    />
                    <div className="cat_text_top">Hotel offers </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cat_wrap">
                    <img
                      loading="lazy"
                      src={top_clubs} alt=" "
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
