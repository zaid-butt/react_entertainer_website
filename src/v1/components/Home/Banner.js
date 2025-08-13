import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { Container, Row, Col, Form, Input } from "reactstrap";
import "./Banner.css";

function Banner() {
  const { t } = useTranslation();

  return (
    <>
      <div id="banner">
        <img className="d-d" src={t("header_desktop_n")} alt="banner" />
        <img
          className="d-mob"
          src="https://b2cappassetscdn.theentertainerme.com/Cart2022Header/en/1/header_mobile_n.png"
          alt="banner"
        />

        <div id="banner_content_wrap">
          <div className="banner_content">
            <Container>
              <Row>
                <Col xs={6} className="banner_content1">
                  <span className="Enjoytext">Enjoy 7 days a week!</span>
                  <br />
                  <span className="f607 lh60">
                    {t("")}
                    <Trans i18nKey="banner_title_text1">
                      Buy 1 Get 1 Free
                      <span className="f601 lh60">
                        &amp;
                        <br />
                      </span>
                    </Trans>
                  </span>
                  <span className="f607 lh60">discount offers</span>
                </Col>

                <Col xs={6}>
                  <div className="d-mob formimg">
                    <img
                      loading="lazy"
                      src="https://b2cappassetscdn.theentertainerme.com/Cart2022Header/en/1/header_mimg_desktop.png"
                      alt="banner_pricetag"
                    />
                  </div>
                </Col>
                <Col md={7} className="banner_content1">
                  <Form
                    className="form-inline"
                    id="startFreeEmail"
                    action="/signin-up-start"
                    method="POST"
                  >
                    <div className="form-group mx-sm-3 mb-2">
                      <Input
                        type="email"
                        className="form-control"
                        name="email"
                        id="Enteryouremailaddress"
                        autoComplete="off"
                        placeholder="Please enter your email address"
                      ></Input>
                    </div>
                    <button
                      className="btn btn52 btn-light btn-yel"
                      id="start_free"
                      type="submit"
                    >
                      START FOR FREE
                    </button>
                  </Form>

                  <span className="formtext">
                    You don't need a credit card to sign up
                  </span>
                  <div className="form-group submitting_text">
                    By continuing you agree to{" "}
                    <a href="/end-user-license-agreement?v=full">
                      End user license agreement
                    </a>{" "}
                    &amp; <a href="/Privacy-Policy?v=full">Privacy policy</a>
                  </div>
                  <br />
                  <p
                    className="alert alert-danger"
                    id="EnteryouremailaddressValidity"
                    style={{ display: "none" }}
                  >
                    Please enter a valid email
                  </p>
                </Col>

                <Col md={7} className="banner_pricetag">
                  <img
                    loading="lazy"
                    src="https://b2cappassetscdn.theentertainerme.com/Cart2022Icons/AED.svg"
                    alt="price img"
                  />
                  <div>
                    <span>AED 1,000+</span>
                    Average member savings.
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
