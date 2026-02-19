import MerchentLogoSlide1 from "assets/images/MerchentLogoSlide/MerchentLogoSlide1.png"
import MerchentLogoSlide2 from "assets/images/MerchentLogoSlide/MerchentLogoSlide2.png"
import MerchentLogoSlide3 from "assets/images/MerchentLogoSlide/MerchentLogoSlide3.png"
import MerchentLogoSlide4 from "assets/images/MerchentLogoSlide/MerchentLogoSlide4.png"
import MerchentLogoSlide5 from "assets/images/MerchentLogoSlide/MerchentLogoSlide5.png"
// dummy data
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";


function MerchentLogoSlide() {
  return (
    <>
      <Container>
        <Row>
          <Col id="MerchentLogoSlide" className="text-center">
            <Swiper
              spaceBetween={30}
              slidesPerView={2}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                500: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                767: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 24,
                },
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="cat_wrap">
                  <img loading="lazy" src={MerchentLogoSlide1} alt="  " />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cat_wrap">
                  <img loading="lazy" src={MerchentLogoSlide2} alt=" " />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cat_wrap">
                  <img loading="lazy" src={MerchentLogoSlide3} alt=" " />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cat_wrap">
                  <img loading="lazy" src={MerchentLogoSlide4} alt=" " />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cat_wrap">
                  <img loading="lazy" src={MerchentLogoSlide5} alt=" " />
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <a className="btn btn-secondary" href=" ">
              View all 3,459 Merchants{" "}
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MerchentLogoSlide;
