import { React, Helmet, useParams } from "../../services/centerServices";
import { Header, Footer } from "../components/commonCponts";
import { Container, Row, Col } from "reactstrap";
import {
  Mcard,
  SearchTopheader,
  SearchFilters,
  SearchSlider,
  InsideScoop,
} from "../components/Searchpg/SearchComponents";

function Search() {
  const { location, city } = useParams();
  
  return (
    <>
      {<Header />}
      <div className="wrapper">
        <div className="padtop padbot">
          <Container id="SearchTopheader_wrapper">
          <div id="SearchTopheader">{<SearchTopheader />}</div>
          </Container>
          <Container id="SearchFilters_wrapper">
            <div id="SearchFilters">{<SearchFilters />}</div>
          </Container>
          <Container id="SearchSlider_wrapper">
            <div id="SearchSlider">{<SearchSlider />}</div>
          </Container>
          <Container>
          <Row>
            <Col id="SearchListing" md={12}>
              {<Mcard />}
              {<Mcard />}
              {<Mcard />}
              {<Mcard />}
              {<Mcard />}
              {<Mcard />}
              {<Mcard />}
              {<Mcard />}
              {<Mcard />}
              {<Mcard />}
              {<Mcard />}
              {<Mcard />}
              {<Mcard />}
              {<Mcard />}
              {<Mcard />}
              {<Mcard />}
              {<Mcard />}
              {<Mcard />}
              {<Mcard />}
              {<Mcard />}
            </Col>
            <Col md={12} className="text-center">
              <a className="btn btn-secondary" href="#0">
                View all 345 places1
              </a>
            </Col>
          </Row>
          </Container>
          
          <Container id="InsideScoop_wrapper">
          <Row>
            <Col id="InsideScoop" md={12}>
              {<InsideScoop />}
            </Col>
          </Row>
          </Container>
        </div>
      </div>
      {<Footer />}
      <Helmet>
        <body className={"pgsearch " + location + " " + city} />
      </Helmet>
    </>
  );
}

export default Search;
