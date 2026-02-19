import Logobot from "assets/images/Logo-bot.svg"
import GooglePlay from "assets/images/GooglePlay.svg"
import Appstore from "assets/images/Appstore.svg"
// dummy data
import { Container, Row, Col } from "reactstrap";
import FooterLinks from "components/Footer/FooterLinks.js";
import "./Footer.css";


function Footer() {
  return (
    <>
      <div id="aly_have">
        <Container>
          <Row>
            <Col md={6}>
              <h4 className="aly_have_title">Already have a plan?</h4>
              <p className="aly_have_p">
                Enter your VIP key to activate your plan
              </p>
            </Col>
            <Col md={6}>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <input
                      className="form-control"
                      id="activationcodehere"
                      placeholder="Enter your activation code here"
                      type="input"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <button className="btn btn-primary" type="button">
                      Activate
                    </button>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>

      <footer>
        <Container>
          <Row>
            <Col md={10}>{<FooterLinks />}</Col>

            <Col md={2} className="storeicons">
              <h5 className="d-d">Download App</h5>
              <a href="#0">
                <img src={GooglePlay} alt="GooglePlay" />
              </a>
              <a href="#0">
                <img src={Appstore} alt="Appstore" />
              </a>
            </Col>
            <Col md={10} className="logobottom">
              <a href="index.html">
                <img src={Logobot} alt="logobottom" />
              </a>
              <h5 className="copyrights">
                © theentertainer, All rights reserved 2022
              </h5>
            </Col>
            <Col md={2} className="SMIcons">
              <ul>
                <li>
                  <a className="SMI_y" href="#0"> </a>
                </li>
                <li>
                  <a className="SMI_f" href="#0"> </a>
                </li>
                <li>
                  <a className="SMI_i" href="#0"> </a>
                </li>
                <li>
                  <a className="SMI_t" href="#0"> </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
