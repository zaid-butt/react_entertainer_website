import { Container, Row, Col } from "reactstrap";
import FooterLinks from "../../components/Footer/FooterLinks.js";
import "./Footer.css";


function Footer() {
  const currentHomeUrl = localStorage.getItem("currentHomeUrl") ?? '/en-ae/dubai-n-emirates';
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
              <a href="https://play.google.com/store/apps/details?id=com.theentertainerme.entertainer">
                <img src="https://b2cappassetscdn.theentertainerme.com/website_images/GooglePlay.svg" alt="GooglePlay" />
              </a>
              <a href="https://itunes.apple.com/ae/app/the-entertainer/id702813714?mt=8">
                <img src="https://b2cappassetscdn.theentertainerme.com/website_images/Appstore.svg" alt="Appstore" />
              </a>
            </Col>
            <Col md={10} className="logobottom">
              <a href={currentHomeUrl}>
                <img src="https://b2cappassetscdn.theentertainerme.com/website_images/Logo-bot.svg" alt="logobottom" />
              </a>
              <h5 className="copyrights">
                © theentertainer, All rights reserved 2022
              </h5>
            </Col>
            <Col md={2} className="SMIcons">
              <ul>
                <li>
                  <a className="SMI_y" href="https://www.youtube.com/user/theentertainerme"> </a>
                </li>
                <li>
                  <a className="SMI_f" href="https://www.facebook.com/EntertainerApp"> </a>
                </li>
                <li>
                  <a className="SMI_i" href="https://instagram.com/entertainergcc"> </a>
                </li>
                <li>
                  <a className="SMI_t" href="https://twitter.com/entertainergcc"> </a>
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
