import {
  React,
  useSelector,
  siteUrl,
} from "../../../services/centerServices";
import { Container, Row, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
 
function HomeCategoriesImgs() {
 

  const stateCate = useSelector((state) => state.categories);
  const cates = stateCate.data?.data?.categories;

  if (stateCate.isLoading) {
    return <p>Loading...</p>;
  } else {
    
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
                >
                  {cates.map((c) => (
                    <SwiperSlide key={c.id}>
                      <a href={siteUrl+"/search/outlets"}>
                        <div className="cat_wrap">
                          <div className="cat_img">
                            <img loading="lazy" src={c.image_url} alt=" " />
                          </div>
                          <div className="cat_text">
                            {c.merchant_outlet_count} <small>{c.name}</small>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default HomeCategoriesImgs;
