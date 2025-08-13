import { React } from "../../../services/centerServices";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Container, Row, Col } from "reactstrap";
import MerchentLogoSlide from "./HomeMerchentLogoSlide.js";
import TrendingPlacesWeekSlide from "./TrendingPlacesWeekSlide.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "./TrendingPlacesWeek.css";

function TrendingPlacesWeek() {
 

  return (
    <>
      <div id="TrendingPlacesWeek">
        <div className="padtop padbot">
          <Container>
            <Row>
              <Col md={12} className="TrendingPlacesWeek_title">
                <h2>Trending places for this week </h2>
              </Col>
            </Row>
           
            <Tab.Container id="TrendingPlacesWeekTabs" defaultActiveKey="FoodDrink">
              <Nav>
                <Swiper
                  slidesPerView={2}
                  breakpoints={{
                    550: {
                      slidesPerView: 3,
                    },
                    767: {
                      slidesPerView: 4,
                    },
                    1024: {
                      slidesPerView: 6,
                    },
                  }}
                >
                  <SwiperSlide>
                    <Nav.Item>
                      <Nav.Link eventKey="FoodDrink">
                        <span className="tabimg"><img src="https://b2cappassetscdn.theentertainerme.com/website_images/AttractionLeisure.svg" alt="" /> </span>
                        Food & Drink
                        </Nav.Link>
                    </Nav.Item>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Nav.Item>
                      <Nav.Link eventKey="BeautyFitness">
                      <span className="tabimg"><img src="https://b2cappassetscdn.theentertainerme.com/website_images/AttractionLeisure.svg" alt="" /> </span>
                        Beauty & Fitness
                      </Nav.Link>
                    </Nav.Item>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Nav.Item>
                      <Nav.Link eventKey="AttractionLeisure">
                      <span className="tabimg"><img src="https://b2cappassetscdn.theentertainerme.com/website_images/AttractionLeisure.svg" alt="" /> </span>
                        Attraction & Leisure
                      </Nav.Link>
                    </Nav.Item>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Nav.Item>
                      <Nav.Link eventKey="FashionRetail">
                      <span className="tabimg"><img src="https://b2cappassetscdn.theentertainerme.com/website_images/AttractionLeisure.svg" alt="" /> </span>
                        Fashion & Retail
                      </Nav.Link>
                    </Nav.Item>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Nav.Item>
                      <Nav.Link eventKey="EverydayServices">
                      <span className="tabimg"><img src="https://b2cappassetscdn.theentertainerme.com/website_images/AttractionLeisure.svg" alt="" /> </span>
                        Everyday Services
                      </Nav.Link>
                    </Nav.Item>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Nav.Item>
                      <Nav.Link eventKey="Travel">
                      <span className="tabimg"><img src="https://b2cappassetscdn.theentertainerme.com/website_images/AttractionLeisure.svg" alt="" /> </span>
                      Travel
                      </Nav.Link>
                    </Nav.Item>
                  </SwiperSlide>
                </Swiper>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="FoodDrink">
                  {<TrendingPlacesWeekSlide />}
                </Tab.Pane>
                <Tab.Pane eventKey="BeautyFitness">
                  {<TrendingPlacesWeekSlide />}
                </Tab.Pane>
                <Tab.Pane eventKey="AttractionLeisure">
                  {<TrendingPlacesWeekSlide />}
                  </Tab.Pane>
                <Tab.Pane eventKey="FashionRetail">
                  {<TrendingPlacesWeekSlide />}
                </Tab.Pane>
                <Tab.Pane eventKey="EverydayServices">
                  {<TrendingPlacesWeekSlide />}
                </Tab.Pane>
                <Tab.Pane eventKey="Travel">
                Travel
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            
          </Container>
          {<MerchentLogoSlide />}
        </div>
      </div>
    </>
  );
}

export default TrendingPlacesWeek;
