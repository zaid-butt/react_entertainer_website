
import Testi_img1 from "assets/images/Testi_img1.png"
import Testi_pro_img1 from "assets/images/Testi_pro_img1.png"
// dummy dataimport React from "react";
import { Container, Row, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader"
import "./Testimonials.css";

function Testimonials() {
  const { t } = useTranslation();
  return (
    <>
      <Container id="testimonials" className="padtop padbot">
        <Row>
          <Col>
            <h2 style={{ textAlign: "center" }}>
              {t("testimonial.what_members_saying")}
            </h2>
          </Col>
        </Row>

        <div id="testi_swiper_wrap">
          <div id="testi_swiper">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              //scrollbar={{ draggable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                769: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
              }}
            >
              <SwiperSlide>
              <ContentLoader viewBox="0 0 400 475" height={385} width={375} >
    <circle cx="30" cy="400" r="30" />
    <rect x="75" y="380" rx="4" ry="4" width="200" height="13" />
    <rect x="75" y="410" rx="4" ry="4" width="150" height="8" />
    <rect x="0" y="310" rx="0" ry="0" width="100" height="10" />
    <rect x="0" y="280" rx="0" ry="0" width="250" height="10" />
    <rect x="0" y="250" rx="0" ry="0" width="300" height="10" />
    <rect x="0" y="220" rx="0" ry="0" width="250" height="10" />
    <rect x="0" y="0" rx="5" ry="5" width="375" height="150" />
  </ContentLoader>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-box">
                  <div className="swiper-img">
                    <img
                      src={Testi_img1}
                      alt="Testi_img"
                    />
                  </div>
                  <p className="swiper-p">
                    Sed tortor, asd fasd fasdjusto, ipsum est dui senectus.
                    Tempus neque faucibus etiam rhoncus. Sed tortor, asd fasd
                    fasdjusto, ipsum est dui senectus.
                  </p>
                  <div className="swiper-pro">
                    <div className="swiper-proimg">
                      <img
                        src={Testi_pro_img1}
                        alt="Testi_pro_img"
                      />
                    </div>
                    <div className="swiper-protitle">
                      <span className="swiper-proname">
                        Long name will be show like this
                      </span>
                      <span className="swiper-prodes">
                        Long Designation text show like this
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-box">
                  <div className="swiper-img">
                    <img
                      src={Testi_img1}
                      alt="Testi_img"
                    />
                  </div>
                  <p className="swiper-p">
                    Sed tortor, asd fasd fasdjusto, ipsum est dui senectus.
                    Tempus neque faucibus etiam rhoncus. Sed tortor, asd fasd
                    fasdjusto, ipsum est dui senectus. Tempus neque faucibus
                    etiam rhoncus.Sed tortor, asd fasd fasdjusto, ipsum est dui
                    senectus. Tempus neque faucibus etiam rhoncus.
                  </p>
                  <div className="swiper-pro">
                    <div className="swiper-proimg">
                      <img
                        src={Testi_pro_img1}
                        alt="Testi_pro_img"
                      />
                    </div>
                    <div className="swiper-protitle">
                      <span className="swiper-proname">Tatiana Vetrovs</span>
                      <span className="swiper-prodes">Fashion Designer</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-box">
                  <div className="swiper-img">
                    <img
                      src={Testi_img1}
                      alt="Testi_img"
                    />
                  </div>
                  <p className="swiper-p">
                    Sed tortor, asd fasd fasdjusto, ipsum est dui senectus.
                    Tempus neque faucibus etiam rhoncus. Sed tortor, asd fasd
                    fasdjusto, ipsum est dui senectus. Tempus neque faucibus
                    etiam rhoncus.Sed tortor, asd fasd fasdjusto, ipsum est dui
                    senectus. Tempus neque faucibus etiam rhoncus.
                  </p>
                  <div className="swiper-pro">
                    <div className="swiper-proimg">
                      <img
                        src={Testi_pro_img1}
                        alt="Testi_pro_img"
                      />
                    </div>
                    <div className="swiper-protitle">
                      <span className="swiper-proname">Tatiana Vetrovs</span>
                      <span className="swiper-prodes">Fashion Designer</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-box">
                  <div className="swiper-img">
                    <img
                      src={Testi_img1}
                      alt="Testi_img"
                    />
                  </div>
                  <p className="swiper-p">
                    Sed tortor, asd fasd fasdjusto, ipsum est dui senectus.
                    Tempus neque faucibus etiam rhoncus. Sed tortor, asd fasd
                    fasdjusto, ipsum est dui senectus. Tempus neque faucibus
                    etiam rhoncus.Sed tortor, asd fasd fasdjusto, ipsum est dui
                    senectus. Tempus neque faucibus etiam rhoncus.
                  </p>
                  <div className="swiper-pro">
                    <div className="swiper-proimg">
                      <img
                        src={Testi_pro_img1}
                        alt="Testi_pro_img"
                      />
                    </div>
                    <div className="swiper-protitle">
                      <span className="swiper-proname">Tatiana Vetrovs</span>
                      <span className="swiper-prodes">Fashion Designer</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-box">
                  <div className="swiper-img">
                    <img
                      src={Testi_img1}
                      alt="Testi_img"
                    />
                  </div>
                  <p className="swiper-p">
                    Sed tortor, asd fasd fasdjusto, ipsum est dui senectus.
                    Tempus neque faucibus etiam rhoncus. Sed tortor, asd fasd
                    fasdjusto, ipsum est dui senectus. Tempus neque faucibus
                    etiam rhoncus.Sed tortor, asd fasd fasdjusto, ipsum est dui
                    senectus. Tempus neque faucibus etiam rhoncus.
                  </p>
                  <div className="swiper-pro">
                    <div className="swiper-proimg">
                      <img
                        src={Testi_pro_img1}
                        alt="Testi_pro_img"
                      />
                    </div>
                    <div className="swiper-protitle">
                      <span className="swiper-proname">Tatiana Vetrovs</span>
                      <span className="swiper-prodes">Fashion Designer</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-box">
                  <div className="swiper-img">
                    <img
                      src={Testi_img1}
                      alt="Testi_img"
                    />
                  </div>
                  <p className="swiper-p">
                    Sed tortor, asd fasd fasdjusto, ipsum est dui senectus.
                    Tempus neque faucibus etiam rhoncus. Sed tortor, asd fasd
                    fasdjusto, ipsum est dui senectus. Tempus neque faucibus
                    etiam rhoncus.Sed tortor, asd fasd fasdjusto, ipsum est dui
                    senectus. Tempus neque faucibus etiam rhoncus.
                  </p>
                  <div className="swiper-pro">
                    <div className="swiper-proimg">
                      <img
                        src={Testi_pro_img1}
                        alt="Testi_pro_img"
                      />
                    </div>
                    <div className="swiper-protitle">
                      <span className="swiper-proname">Tatiana Vetrovs</span>
                      <span className="swiper-prodes">Fashion Designer</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-box">
                  <div className="swiper-img">
                    <img
                      src={Testi_img1}
                      alt="Testi_img"
                    />
                  </div>
                  <p className="swiper-p">
                    Sed tortor, asd fasd fasdjusto, ipsum est dui senectus.
                    Tempus neque faucibus etiam rhoncus. Sed tortor, asd fasd
                    fasdjusto, ipsum est dui senectus. Tempus neque faucibus
                    etiam rhoncus.Sed tortor, asd fasd fasdjusto, ipsum est dui
                    senectus. Tempus neque faucibus etiam rhoncus.
                  </p>
                  <div className="swiper-pro">
                    <div className="swiper-proimg">
                      <img
                        src={Testi_pro_img1}
                        alt="Testi_pro_img"
                      />
                    </div>
                    <div className="swiper-protitle">
                      <span className="swiper-proname">Tatiana Vetrovs</span>
                      <span className="swiper-prodes">Fashion Designer</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Testimonials;
