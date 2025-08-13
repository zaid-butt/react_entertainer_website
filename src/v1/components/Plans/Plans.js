/*eslint-disable*/
import { React, siteUrl,} from "../../../services/centerServices";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container, Row, Col } from "reactstrap";
import "./plans.css";
import PlansCard from "./PlansCard";
import PlansCardSkel from "./PlansCardSkel";

function Plans() {
  return (
    <>
      <div id="entProductSection">
        <div id="plans" className="padtop padbot">
          <Container>
            <Row>
              <Col md={12} className="New_Product_Tiers_title">
                <h2>Meet our memberships </h2>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Tabs defaultActiveKey="entertainer" id="planstabs">
                  <Tab eventKey="entertainer" title="the ENTERTAINER">
                    <table
                      align="center"
                      border="0"
                      cellSpacing="0"
                      cellPadding="0"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <div className="cardrow">
                              <PlansCard
                                product={"lite"}
                                name={"Lite-"}
                                name_loc={"Dubai"}
                                badge={"WEnjoy free offers"}
                                price={"Free"}
                                currency_period={""}
                                saveprice={""}
                                saveprice_percent={""}
                                billed_annually={""}
                                billed_annually_text={""}
                                subscribText={"Active"}
                                subscribClass={"subscribedProductsBtn"}
                                img={
                                  "https://b2cappassetscdn.theentertainerme.com/v7/lite/DXB-Lite--359x404.png"
                                }
                                LearnMoreAbout_text={"Learn more"}
                                LearnMoreAbout_link={"#0"}
                              />
                              <PlansCard
                                product={"normal"}
                                name={"Standard-"}
                                name_loc={"Dubai"}
                                badge={"Was Dubai Classic"}
                                price={"43.75"}
                                currency_period={"AED/month."}
                                saveprice={"173.42 AED/mo."}
                                saveprice_percent={"Save 69%"}
                                billed_annually={"525.00 AED"}
                                billed_annually_text={
                                  "billed annually (including VAT)"
                                }
                                subscribText={"Buy Now"}
                                subscribClass={""}
                                img={
                                  "https://b2cappassetscdn.theentertainerme.com/v7/standard/DXB-Standard-359x404.png"
                                }
                                LearnMoreAbout_text={"Learn more"}
                                LearnMoreAbout_link={"#0"}
                              />
                              <PlansCard
                                product={"popular"}
                                product_alias={"MOST POPULAR"}
                                name={"Premium-"}
                                name_loc={"Dubai"}
                                badge={"Was Dubai Classic & Dubai Gourmet"}
                                price={"61.25"}
                                currency_period={"AED/month."}
                                saveprice={""}
                                saveprice_percent={""}
                                billed_annually={"735.00 AED"}
                                billed_annually_text={
                                  "billed annually (including VAT)"
                                }
                                subscribText={"Buy Now"}
                                subscribClass={""}
                                img={
                                  "https://b2cappassetscdn.theentertainerme.com/v7/premium/DXB-Premium--359x404.png"
                                }
                                LearnMoreAbout_text={"Learn more"}
                                LearnMoreAbout_link={"#0"}
                              />
                              <PlansCard
                                product={"normal"}
                                name={"Global"}
                                name_loc={""}
                                badge={"Has DXB + worldwide offers"}
                                price={"87.75"}
                                currency_period={"AED/month."}
                                saveprice={""}
                                saveprice_percent={""}
                                billed_annually={"1,050.00 AED"}
                                billed_annually_text={""}
                                subscribText={"Buy Now"}
                                subscribClass={""}
                                img={
                                  "https://b2cappassetscdn.theentertainerme.com/v7/Global/Global-359x404.png"
                                }
                                LearnMoreAbout_text={"Learn more"}
                                LearnMoreAbout_link={"#0"}
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Tab>
                  <Tab eventKey="tourist" title="Tourist">
                    <table
                      align="center"
                      border="0"
                      cellSpacing="0"
                      cellPadding="0"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <div className="cardrow">
                              <PlansCardSkel />
                              <PlansCard
                                product={"normal"}
                                name={"ENTERTAINER tourist-"}
                                name_loc={"UAE"}
                                badge={
                                  "Valid for 30-days from the date of purchase "
                                }
                                price={"204.75"}
                                currency_period={"AED"}
                                saveprice={""}
                                saveprice_percent={""}
                                billed_annually={""}
                                billed_annually_text={
                                  "One time payment (including VAT)"
                                }
                                subscribText={"Buy Now"}
                                subscribClass={""}
                                img={
                                  "https://s3-us-west-2.amazonaws.com/etsitecdn.theentertainerme.com/gallery/product2021/Tourist_Product_Details.png"
                                }
                                ptext={
                                  "Note: Some ENTERTAINER offers are not available in the ENTERTAINER tourist - UAE."
                                }
                                LearnMoreAbout_text={"Learn more"}
                                LearnMoreAbout_link={"#0"}
                              />
                              <PlansCard
                                product={"normal"}
                                name={"ENTERTAINER tourist-"}
                                name_loc={"UAE"}
                                badge={
                                  "Valid for 30-days from the date of purchase "
                                }
                                price={"204.75"}
                                currency_period={"AED"}
                                saveprice={""}
                                saveprice_percent={""}
                                billed_annually={""}
                                billed_annually_text={
                                  "One time payment (including VAT)"
                                }
                                subscribText={"Buy Now"}
                                subscribClass={""}
                                img={
                                  "https://s3-us-west-2.amazonaws.com/etsitecdn.theentertainerme.com/gallery/product2021/Tourist_Product_Details.png"
                                }
                                ptext={
                                  "Note: Some ENTERTAINER offers are not available in the ENTERTAINER tourist - UAE."
                                }
                                LearnMoreAbout_text={"Learn more"}
                                LearnMoreAbout_link={"#0"}
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Tab>
                  <Tab eventKey="soleil" title="Soleil">
                    <div id="soleil_videocontent">
                      <p>
                        Level up your lifestyle with our membership that gives
                        you unlimited access to hotel pools, beaches, and
                        fitness centers - perfect for sun-soaking, gym-hitting,
                        and VIP-level relaxing!
                      </p>
                      <div id="soleil-video-container">
                        <video
                          playsInline="playsnline"
                          controls="controls"
                          preload="metadata"
                          id="soleil-video"
                          loop="loop"
                          className="video-js desktop-video"
                        >
                          <source
                            src="https://b2cappassetscdn.theentertainerme.com/Cart2022Videos/Soleil+Video.mp4"
                            type="video/mp4"
                          />
                        </video>
                        <div id="soleil-loader"></div>
                      </div>
                      <a target="_blank" className="btn btn-primary" href="#0">
                        Discover More
                      </a>
                    </div>
                  </Tab>
                </Tabs>
              </Col>
              <Col md={12} className="ComparePlans">
              <a className="btn btn-secondary" href={siteUrl+"/plans"}>Compare plans </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Plans;
