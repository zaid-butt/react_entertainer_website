import {
  React,
  useSelector,
  siteUrl,
  useParams,
} from "../../../services/centerServices";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container, Row, Col } from "reactstrap";

import "./plans.css";
import PlansCard from "./PlansCard";

function Plans() {
  const state = useSelector((state) => state.plans);
  let plans = state.data?.data;
  if (state.isLoading) {
    return <p>Loading...</p>;
  } else {
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
                                {plans?.entertainer &&
                                  plans.entertainer.map((product) => (
                                    <PlansCard
                                      key={product.product_id}
                                      product_id={product.product_id}
                                      product_type={"lite"}
                                      name={product.title}
                                      // name_loc={product.country}
                                      badge={"WEnjoy free offers"}
                                      price={product.monthly_price_label}
                                      currency_symbol={product.currency}
                                      currency_period={"month"}
                                      saveprice={""}
                                      saveprice_percent={""}
                                      billed_annually={""}
                                      billed_annually_text={""}
                                      subscribText={"Active"}
                                      subscribClass={"subscribedProductsBtn"}
                                      img={product.thumb}
                                      LearnMoreAbout_text={"Learn more"}
                                      LearnMoreAbout_link={product.digital_slug}
                                      id={product.product_id}
                                      desc={product.digital_description}
                                      isSubscribed={
                                        plans.user_subscribed_products
                                      }
                                    />
                                  ))}
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
                                {plans?.tourist &&
                                  plans.tourist.map((product) => (
                                    <PlansCard
                                      key={product.product_id}
                                      product_id={product.product_id}
                                      product={"lite"}
                                      name={product.title}
                                      name_loc={product.country}
                                      badge={"WEnjoy free offers"}
                                      price={product.digital_price}
                                      currency_symbol={product.currency}
                                      currency_period={"month"}
                                      saveprice={""}
                                      saveprice_percent={""}
                                      billed_annually={""}
                                      billed_annually_text={""}
                                      subscribText={"Active"}
                                      subscribClass={"subscribedProductsBtn"}
                                      img={product.thumb}
                                      LearnMoreAbout_text={"Learn more"}
                                      LearnMoreAbout_link={"#0"}
                                      id={product.product_id}
                                      desc={product.digital_description}
                                    />
                                  ))}
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
                          fitness centers - perfect for sun-soaking,
                          gym-hitting, and VIP-level relaxing!
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
                        <a
                          target="_blank"
                          className="btn btn-primary"
                          href="#0"
                        >
                          Discover More
                        </a>
                      </div>
                    </Tab>
                  </Tabs>
                </Col>
                <Col md={12} className="ComparePlans">
                  <a className="btn btn-secondary" href={siteUrl + "/plans"}>
                    Compare plans
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default Plans;
