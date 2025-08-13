import React from "react";
import { Container, Row, Col } from "reactstrap";

function Offers() {
  return (
    <>
      <div id="entoffers" className="padtop padbot">
        <Container>
          <Row>
            <Col className="col-12">
              <h2>the ENTERTAINER offers </h2>
            </Col>
          </Row>
          <Row className="d-flex align-items-center">
            <div className="col-md-3 col-6">
              <div className="entoffers_wrap">
                <div className="entoffers_img">
                  <img
                    src="https://b2cappassetscdn.theentertainerme.com/website_images/entoffers_1.svg"
                    alt="offer 1"
                  />
                </div>
                <div className="entoffers_cont">
                  <h4>Buy One Get One</h4>
                  <p className="d-d">
                    No need to pay for second
                    <br />
                    item anymore
                  </p>
                </div>
              </div>
              <div className="entoffers_wrap">
                <div className="entoffers_img">
                  <img
                    src="https://b2cappassetscdn.theentertainerme.com/website_images/entoffers_2.svg"
                    alt="offer 2"
                  />
                </div>
                <div className="entoffers_cont">
                  <h4>Discount Codes</h4>
                  <p className="d-d">
                    Get discounts on your
                    <br />
                    favorite ecommerce sites
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 entoffers_img1">
              <img
                src="https://b2cappassetscdn.theentertainerme.com/Cart2022EntertainerOffers/en/1/entertainer_offers.png"
                alt="entertainer_offers"
              />
            </div>
            <div className="col-md-3 offset-1 col-5">
              <div className="entoffers_wrap">
                <div className="entoffers_img">
                  <img
                    src="https://b2cappassetscdn.theentertainerme.com/website_images/entoffers_3.svg"
                    alt="offer 3"
                  />
                </div>
                <div className="entoffers_cont">
                  <h4>% OFF</h4>
                  <p className="d-d">
                    No need to pay full anymore <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="entoffers_wrap">
                <div className="entoffers_img">
                  <img
                    src="https://b2cappassetscdn.theentertainerme.com/website_images/entoffers_4.svg"
                    alt="offer 4"
                  />
                </div>
                <div className="entoffers_cont">
                  <h4>Flash offers</h4>
                  <p className="d-d">
                    Avail offers before they run
                    <br />
                    out of time.
                  </p>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <Col md={12}>
              <div className="home_store_img">
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
                  href="#plans"
                >
                  Explore our memberships
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Offers;
