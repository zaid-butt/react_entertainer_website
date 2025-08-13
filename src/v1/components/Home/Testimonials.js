import {
  React,
  useEffect,
  useSelector,
  useDispatch,
} from "../../../services/centerServices";
import { Container, Row, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "./Testimonials.css";
import { fetchTestimonials } from "../../../redux/slices/Testimonials";

// testimonials
function Testimonials() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language);
  const testimonials = useSelector((state) => state.testimonials);
  const items = testimonials.data?.data?.testimonials;
  useEffect(() => {
    dispatch(fetchTestimonials({lang}));
  }, []);

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
              {items &&
                items.map((items, k) => (
                  <SwiperSlide key={k}>
                    <div className="swiper-box">
                      <div className="swiper-img">
                        <img src={items.image_url} alt="Testi_img" />
                      </div>
                      <p className="swiper-p">{items.description}</p>
                      <div className="swiper-pro">
                        <div className="swiper-proimg">
                          <img
                            src="https://b2cappassetscdn.theentertainerme.com/website_images/Testi_pro_img1.png"
                            alt="Testi_pro_img"
                          />
                        </div>
                        <div className="swiper-protitle">
                          <span className="swiper-proname">
                            {items.profile_name}
                          </span>
                          <span className="swiper-prodes">
                            {items.profile_designation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
               
            </Swiper>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Testimonials;
