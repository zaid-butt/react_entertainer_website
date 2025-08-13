import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";


function MerchentLogoSlide({totalMerchant, link}) {
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
                  <img loading="lazy" src="https://b2cappassetscdn.theentertainerme.com/website_images/MerchentLogoSlide/MerchentLogoSlide1.png" alt=" " />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cat_wrap">
                  <img loading="lazy" src="https://b2cappassetscdn.theentertainerme.com/website_images/MerchentLogoSlide/MerchentLogoSlide2.png" alt=" " />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cat_wrap">
                  <img loading="lazy" src="https://b2cappassetscdn.theentertainerme.com/website_images/MerchentLogoSlide/MerchentLogoSlide3.png" alt=" " />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cat_wrap">
                  <img loading="lazy" src="https://b2cappassetscdn.theentertainerme.com/website_images/MerchentLogoSlide/MerchentLogoSlide4.png" alt=" " />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cat_wrap">
                  <img loading="lazy" src="https://b2cappassetscdn.theentertainerme.com/website_images/MerchentLogoSlide/MerchentLogoSlide5.png" alt=" " />
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <a className="btn btn-secondary" href={link}>
              View all {totalMerchant} Merchants
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MerchentLogoSlide;
