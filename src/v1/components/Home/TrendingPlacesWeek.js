import {
  React,
  //useParams,
  useState,
  useEffect,
  useSelector,
  useDispatch,
} from "../../../services/centerServices";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Container, Row, Col } from "reactstrap";
import MerchentLogoSlide from "./HomeMerchentLogoSlide.js";
import TrendingPlacesWeekSlide from "./TrendingPlacesWeekSlide.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "./TrendingPlacesWeek.css";
import { fetchTrending, fetchTrendingNeigbours } from "../../../redux/slices/Trending";

function TrendingPlacesWeek() {
  const lang = useSelector((state) => state.language);
  const loc = useSelector((state) => state.location);
  const dispatch = useDispatch();
  
  const trendingMerchantsByCategories = (loc, lang, cate) => {
    sessionStorage.removeItem("neighborhoods");
    dispatch(fetchTrending({ loc, lang, cate }));
    sessionStorageFunc();
  };

  const filterNeighbourhood = (cate, neibours) => {
    dispatch(fetchTrendingNeigbours({loc, lang, cate, neibours}));
  };


  const stateCate = useSelector((state) => state.categories);
  const trending = useSelector((state) => state.trending);
  const cates = stateCate.data?.data?.categories;
 
  const [neighbors, setNeighbors] = useState();

  const neibr = sessionStorage.getItem("neighborhoods");
  const sessionStorageFunc =  () => {
    if(neibr){
      const jsn = JSON.parse(neibr)
      setNeighbors(jsn.neighborhoods)
    }
  }

  useEffect(() => {
    sessionStorageFunc()
  }, [neibr]);

  useEffect(() => {
    if (cates) {
      const cate = cates[0].name;
      const kate = { loc, lang, cate };
      dispatch(fetchTrending(kate));
    }
  }, [cates]);
 
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
            <Tab.Container
              id="TrendingPlacesWeekTabs"
              defaultActiveKey="0"
            >
              <Nav>
                <Swiper
                  slidesPerView={"auto"}
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
                  {cates &&
                    cates.map((c, index) => (
                      <SwiperSlide key={c.id}>
                        <Nav.Item
                          onClick={() =>
                            trendingMerchantsByCategories(loc, lang, c.name)
                          }
                        >
                          <Nav.Link eventKey={index}>
                          <span className="tabimg"><img src={c.icon_url} alt="" /> </span>
                            {c.name}
                            </Nav.Link>
                        </Nav.Item>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </Nav>
              <Tab.Content>
                {cates &&
                  cates.map((c, index) => (
                    <Tab.Pane eventKey={index} key={c.id}>
                        <TrendingPlacesWeekSlide
                          category={c.name}
                          filterNeighbourhood={filterNeighbourhood}
                          key={c.id}
                          trending={trending}
                          neighbors={neighbors}
                        />
                    </Tab.Pane>
                  ))}
              </Tab.Content>
            </Tab.Container>
          </Container>
          <MerchentLogoSlide totalMerchant={trending?.data?.total_records} link={"/en-ae/dubai-n-emirates/search/outlets/"} />
        </div>
      </div>
    </>
  );
}

export default TrendingPlacesWeek;
