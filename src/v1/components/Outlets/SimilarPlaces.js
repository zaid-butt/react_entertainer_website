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
import { fetchSimilarPlaces } from "../../../redux/slices/SimilarPlaces";
import Mcard from "./Mcard";
// testimonials
function SimilarPlaces() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language);
  const similarPlaces = useSelector((state) => state.similarPlaces);
  const outlet = similarPlaces.data?.data?.outlets;
  useEffect(() => {
    dispatch(fetchSimilarPlaces());
  }, []);

  return (
    <>
      <Container id="similarPlaces" className=" ">
        <Row>
          <Col>
            <h2 style={{ textAlign: "center" }}>
              Similiar Places
            </h2>
          </Col>
        </Row>
 
            <Swiper
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                990: {
                  slidesPerView: 3,
                },
              }}
              modules={[Navigation, Pagination]}
            >
              {outlet &&
                outlet.map((outlet, k) => (
                  <SwiperSlide key={k}>
                    <Mcard
                    name={outlet.merchant.name}
                    img={outlet.merchant.photo_small_url}
                    logo={outlet.merchant.logo_small_url}
                    rating={"4.5"}
                     
                    tags={outlet.tags}
                    included={outlet.logical_products}
                  />
                  </SwiperSlide>
                ))}
               
            </Swiper>
          
      </Container>
    </>
  );
}

export default SimilarPlaces;
