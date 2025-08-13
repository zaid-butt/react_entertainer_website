import { Row, Col } from "reactstrap";
import "./Minfo.css";

function Minfo() {
  return (
    <>
      <h2>MasterChef, the TV experience restaurant</h2>
      <ul>
        <li>Fast food</li>
        <li>Casual Dining</li>
        <li>Italian</li>
        <li>Pizza</li>
        <li>Pasta</li>
      </ul>
      <p className="Minfo_p">
        MasterChef, the TV Experience is located at the lobby level of the
        Millennium Place Marina Hotel in Dubai Marina. Based on the
        international hit television series, the restaurant offers a world-first
        dining experience to Dubai that showcases the talents and recipes of
        MasterChef series contestants
      </p>
      <div className="Minfo_contact">
        <Row className="Minfo_contact_hd">
          <Col md={6} className="Minfo_contact_hdstar">
            <span>
            <img
              src="https://b2cappassetscdn.theentertainerme.com/website_images/Star.svg"
              alt=" "
            />
            </span>
            <strong className="fs13">4.8 (based on 137 people)</strong> <a className="fs12" href=" ">Read all</a>
          </Col>
          <Col md={6} className="Minfo_contact_hdmap">
            <span>
              <img
              src="https://b2cappassetscdn.theentertainerme.com/website_images/icon_mmap.svg"
              alt=" "
            />
            </span>
            <span>Dubai Marina</span> <a className="fs12" href=" ">Directions</a>
          </Col>
        </Row>
        <Row className="Minfo_contact_body">
          <Col md={5}>
            <div>
              <img
                src="https://b2cappassetscdn.theentertainerme.com/website_images/icon_mloby.svg"
                alt=" "
              />
              Lobby Level
            </div>
            <div>
              <img
                src="https://b2cappassetscdn.theentertainerme.com/website_images/icon_mcall.svg"
                alt=" "
              />
              +971 4 550 8111
            </div>
          </Col>
          <Col md={7}>
            <div>
              <img
                src="https://b2cappassetscdn.theentertainerme.com/website_images/icon_mmail.svg"
                alt=" "
              />
              reservations@masterchefdxb.com
            </div>
            <div>
              <img
                src="https://b2cappassetscdn.theentertainerme.com/website_images/icon_mweb.svg"
                alt=" "
              />
              www.masterchefdxb.com
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Minfo;
