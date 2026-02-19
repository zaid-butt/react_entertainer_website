import React from "react";
import { useTranslation, Trans } from "react-i18next";
import "./Banner.css";

function Banner() {
  const { t } = useTranslation();

  return (
    <>
      <div id="banner">
        <img className="d-d" src={t("header_desktop_n")} alt="banner" />
        <img
          className="d-mob"
          src="/images/header_mobile_n.png"
          alt="banner"
        />

        <div id="banner_content_wrap">
          <div className="banner_content">
            <div className="container">
              <div className="row">
                <div className="col-6 banner_content1">
                  <span className="Enjoytext">Enjoy 7 days a week!</span>
                  <br />
                  <span className="f607 lh60">
                    <Trans i18nKey="banner_title_text1">
                      Buy 1 Get 1 Free
                      <span className="f601 lh60">
                        &amp;
                        <br />
                      </span>
                    </Trans>
                  </span>
                  <span className="f607 lh60">discount offers</span>
                </div>

                <div className="col-6">
                  <div className="d-mob formimg">
                    <img
                      loading="lazy"
                      src="/images/header_mimg_desktop.png"
                      alt="banner_pricetag"
                    />
                  </div>
                </div>
                <div className="col-7 banner_content1">
                  <form
                    className="form-inline"
                    id="startFreeEmail"
                    action="/signin-up-start"
                    method="POST"
                  >
                    <div className="form-group mx-sm-3 mb-2">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="Enteryouremailaddress"
                        autoComplete="off"
                        placeholder="Please enter your email address"
                      ></input>
                    </div>
                    <button
                      className="btn btn52 btn-light btn-yel"
                      id="start_free"
                      type="submit"
                    >
                      START FOR FREE
                    </button>
                  </form>

                  <span className="formtext">
                    You don't need a credit card to sign up
                  </span>
                  <div className="form-group submitting_text">
                    By continuing you agree to
                    <a href="/end-user-license-agreement?v=full">
                      End user license agreement
                    </a>
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
                </div>

                <div className="col-7 banner_pricetag">
                  <img
                    loading="lazy"
                    src="/images/AED.svg"
                    alt="price img"
                  />
                  <div>
                    <span>AED 1,000+</span>
                    Average member savings.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
