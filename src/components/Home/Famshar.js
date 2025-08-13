import family_members_en from "assets/images/family_members_en.png"
import howork_1 from "assets/images/howork_1.png"
import howork_2 from "assets/images/howork_2.png"
import howork_3 from "assets/images/howork_3.png"
import howork_img1 from "assets/images/howork_img1.png"
import howork_img2 from "assets/images/howork_img2.png"
import howork_img3 from "assets/images/howork_img3.png"
// dummy data
import React from "react";
import { Container, Row, Col } from "reactstrap";

function Famshar() {
  return (
    <>
      <Container id="famshar" className="bg padtop padbot">
        <Row>
          <Col xs={12}>
            <h2>Save with loved ones</h2>
            <p>
              It's easy to share your membership and offers with your circle!
              More people = more savings.
            </p>
          </Col>

          <div className="famshar_img1">
            <img
              src={family_members_en}
              alt=" "
            />
          </div>
        </Row>
      </Container>

      <Container id="howork" className="padtop padbot">
        <Row className="bg">
          <Col md={12}>
            <h2>How the ENTERTAINER works </h2>
          </Col>
          <Col md={4} className="howork">
            <div className="howork_123">
              <img
                src={howork_1}
                alt="how work 1"
              />
            </div>
            <div className="howork_img">
              <img
                src={howork_img1}
                alt="how work img 1"
              />
            </div>
            <div className="howork_cont">
              <h4>Sign up</h4>
              <p>
                Get started with a free account <br /> in under 30 seconds
              </p>
            </div>
          </Col>
          <Col md={4} className="howork">
            <div className="howork_123">
              <img
                src={howork_2}
                alt="how work 2"
              />
            </div>
            <div className="howork_img">
              <img
                src={howork_img2}
                alt="how work img 2"
              />
            </div>
            <div className="howork_cont">
              <h4>Download</h4>
              <p>
                Download the app from the <br /> App Store or Google Play Store
              </p>
            </div>
          </Col>
          <Col md={4} className="howork">
            <div className="howork_123">
              <img
                src={howork_3}
                alt="how work 3"
              />
            </div>
            <div className="howork_img">
              <img
                src={howork_img3}
                alt="how work img 3"
              />
            </div>
            <div className="howork_cont">
              <h4>Save</h4>
              <p>
                Start using your offers <br /> right away
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="home_store_img d-d">
            <a
                  className="ios_btn"
                  href="https://itunes.apple.com/ae/app/the-entertainer/id702813714?mt=8"
                  style={{ display: "none !important" }}
                >
                  <img
                    className="landing-page-app-btn"
                    loading="lazy"
                    src="https://b2cappassetscdn.theentertainerme.com/website_images/Appstore_btn.svg"
                    alt="App Store"
                  />
                  </a>
                <a
                  className="android_btn"
                  href="https://play.google.com/store/apps/details?id=com.theentertainerme.entertainer"
                >
                  <img
                    className="landing-page-app-btn"
                    loading="lazy"
                    src="https://b2cappassetscdn.theentertainerme.com/website_images/playstore/google_play_new.svg"
                    alt="Google Play"
                  />
                </a>
                <a
                  className="offers_explore"
                  href="https://www.theentertainerme.com/en-ae/dubai-n-emirates#entProductSection"
                >
                  <img src="https://b2cappassetscdn.theentertainerme.com/website_images/playstore/huawei_btn.svg" alt="offers_explore" />
                </a>
                <a
                  className="btn btn-secondary"
                  href="http://awesomesite.loc:8888/en-ae/dubai-n-emirates#entProductSection"
                >
                  Explore our memberships
                </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Famshar;
