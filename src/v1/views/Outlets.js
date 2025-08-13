import { React, Helmet, useParams } from "../../services/centerServices";
import { Header, Footer } from "../components/commonCponts";
import { Container, Row, Col } from "reactstrap";
import Minfo from "../components/Outlets/Minfo";
import Mslider from "../components/Outlets/Mslider";
import MstartSaving from "../components/Outlets/MstartSaving";
import { InsideScoop } from "../components/Searchpg/SearchComponents";
 
import "../../assets/css/outletspg.css";
import SimilarPlaces from "../components/Outlets/SimilarPlaces";

function Outlets() {
  const { location, city } = useParams();

  return (
    <>
      {<Header />}
      <div className="wrapper">
        <div className="padtop padbot">
          <Container>
            <Row>
              <Col md={6} className="Minfo">
              {<Minfo />}
              </Col>
              <Col md={6} className="Mslider">{<Mslider />}</Col>
            </Row>
            <Row id="MstartSaving">
              <Col md={12}>
                <h3>Choose your plan and start saving</h3>
              </Col>
              {<MstartSaving />}
              {<MstartSaving />}
            </Row>
            <Row>
              <Col md={12}>
              <SimilarPlaces />
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
        <body className={"pgoutlets " + location + " " + city} />
      </Helmet>
    </>
  );
}

export default Outlets;
