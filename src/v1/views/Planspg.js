import {
  React,
  Helmet,
  useParams,
  useState,
  //useSelector,
} from "../../services/centerServices";
import { Header, Footer } from "../components/commonCponts";
import Testimonials from "../components/Home/Testimonials";
import Faqs from "../components/Home/Faqs";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container, Row, Col } from "reactstrap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../components/Plans/plans.css";
import "../components/Plans/planspg.css";
import ComparePlansCard from "../components/Plans/ComparePlansCard";

function Plans() {
  const { location, city } = useParams();

  const TfoData = [
    {
      id: 1,
      product: "",
      product_alias: "",
      name: "Standard",
      nametext: "Best for fine & casual dining",
      badge: "Was Dubai Classic & Dubai Gourmet",
      price: "43.75",
      currency_period: "AED/month.",
      saveprice: "173.42 AED/mo.",
      saveprice_percent: "Save 69%",
      billed_annually: "525 AED",
      billed_annually_text: " billed annually (including VAT)",
      subscribText: "Buy Now",
      subscribClass: "",
      img: "https://b2cappassetscdn.theentertainerme.com/v7/standard/DXB-Standard-359x404.png",
      LearnMoreAbout_text: "Learn more",
      LearnMoreAbout_link: "#0",
      BeneFits: [
        { BFname: "Family Members", BFvalue: 3, },
        { BFname: "Number of Offers", BFvalue: "4000+" },
        { BFname: "Number of Places", BFvalue: "1,000+", BFlinkText: "View all Places", BFlink: "home",},
        { BFname: "Estimated Savings", BFvalue: "AED 40,000 +" },
        { BFname: "Redeem in peak hours", BFvalue: false },
        { BFname: "Food & Beverages", BFvalue: false },
        { BFname: "Attractions & Leisure", BFvalue: false },
        { BFname: "Everyday services", BFvalue: true },
        { BFname: "Beauty & Fitness ",BFvalue: false },
        { BFname: "Food delivery  ", BFvalue: true },
        { BFname: "5* Hotel stay  ", BFvalue: true },
        { BFname: "Gourmet and Fine Dining ", BFvalue: false },
        { BFname: "Valid in Dubai and N. Emirates ", BFvalue: true },
        { BFname: "Valid in Abu Dhabi and Al Ain", BFvalue: true },
        { BFname: "Worldwide access", BFvalue: null },
        { BFname: "Lite access", BFvalue: "" },
      ],
    },
    {
      id: 2,
      product: "popular",
      product_alias: "MOST POPULAR",
      name: "Premium",
      nametext: "Best for casual dining",
      badge: "Was Dubai Classic",
      price: "61.25",
      currency_period: "AED/month.",
      saveprice: "",
      saveprice_percent: "",
      billed_annually: "735 AED",
      billed_annually_text: " billed annually (including VAT)",
      subscribText: "Buy Now",
      subscribClass: "",
      img: "https://b2cappassetscdn.theentertainerme.com/v7/premium/DXB-Premium--359x404.png",
      LearnMoreAbout_text: "Learn more",
      LearnMoreAbout_link: "#0",
      BeneFits: [
        { BFname: "Family Members", BFvalue: 2, },
        { BFname: "Number of Offers", BFvalue: "4000+" },
        { BFname: "Number of Places", BFvalue: "1,000+", BFlinkText: " View all Places", BFlink: "home",},
        { BFname: "Estimated Savings", BFvalue: "AED 40,000 +" },
        { BFname: "Redeem in peak hours", BFvalue: false },
        { BFname: "Food & Beverages", BFvalue: true },
        { BFname: "Attractions & Leisure", BFvalue: true },
        { BFname: "Everyday services", BFvalue: true },
        { BFname: "Beauty & Fitness ",BFvalue: true },
        { BFname: "Food delivery  ", BFvalue: true },
        { BFname: "5* Hotel stay  ", BFvalue: false },
        { BFname: "Gourmet and Fine Dining ", BFvalue: false },
        { BFname: "Valid in Dubai and N. Emirates ", BFvalue: true },
        { BFname: "Valid in Abu Dhabi and Al Ain", BFvalue: true },
        { BFname: "Worldwide access", BFvalue: true },
        { BFname: "Lite access", BFvalue: true },
      ],
    },
    {
      id: 3,
      product: "",
      name: "Global",
      nametext: "All Inclusive without boundries",
      badge: "Has DXB + worldwide offers",
      price: "87.75",
      currency_period: "AED/month.",
      saveprice: "",
      saveprice_percent: "",
      billed_annually: "1,050 AED",
      billed_annually_text: " billed annually (including VAT)",
      subscribText: "Buy Now",
      subscribClass: "",
      img: "https://b2cappassetscdn.theentertainerme.com/v7/Global/Global-359x404.png",
      LearnMoreAbout_text: "Learn more",
      LearnMoreAbout_link: "#0",
      BeneFits: [
        { BFname: "Family Members", BFvalue: 2, },
        { BFname: "Number of Offers", BFvalue: "4000+" },
        { BFname: "Number of Places", BFvalue: "1,000+", BFlinkText: " View all Places", BFlink: "home",},
        { BFname: "Estimated Savings", BFvalue: "AED 40,000 +" },
        { BFname: "Redeem in peak hours", BFvalue: true },
        { BFname: "Food & Beverages", BFvalue: false },
        { BFname: "Attractions & Leisure", BFvalue: true },
        { BFname: "Everyday services", BFvalue: true },
        { BFname: "Beauty & Fitness ",BFvalue: false },
        { BFname: "Food delivery  ", BFvalue: true },
        { BFname: "5* Hotel stay  ", BFvalue: true },
        { BFname: "Gourmet and Fine Dining ", BFvalue: false },
        { BFname: "Valid in Dubai and N. Emirates ", BFvalue: true },
        { BFname: "Valid in Abu Dhabi and Al Ain", BFvalue: false },
        { BFname: "Worldwide access", BFvalue: true },
        { BFname: "Lite access", BFvalue: true },
      ],
    },
    {
      id: 4,
      product: "lite",
      name: "Lite",
      nametext: "Get the taste of the ENTERTAINER",
      badge: "WEnjoy free offers",
      price: "Free",
      currency_period: "",
      saveprice: "",
      saveprice_percent: "",
      billed_annually: "",
      billed_annually_text: "",
      subscribText: "Active",
      subscribClass: "subscribedProductsBtn",
      img: "https://b2cappassetscdn.theentertainerme.com/v7/lite/DXB-Lite--359x404.png",
      LearnMoreAbout_text: "Learn more",
      LearnMoreAbout_link: "#0",
      BeneFits: [
        { BFname: "Family Members", BFvalue: 2, },
        { BFname: "Number of Offers", BFvalue: "4000+" },
        { BFname: "Number of Places", BFvalue: "1,000+", BFlinkText: " View all Places", BFlink: "home",},
        { BFname: "Estimated Savings", BFvalue: "AED 40,000 +" },
        { BFname: "Redeem in peak hours", BFvalue: true },
        { BFname: "Food & Beverages", BFvalue: true },
        { BFname: "Attractions & Leisure", BFvalue: false },
        { BFname: "Everyday services", BFvalue: true },
        { BFname: "Beauty & Fitness ",BFvalue: false },
        { BFname: "Food delivery  ", BFvalue: false },
        { BFname: "5* Hotel stay  ", BFvalue: true },
        { BFname: "Gourmet and Fine Dining ", BFvalue: false },
        { BFname: "Valid in Dubai and N. Emirates ", BFvalue: false },
        { BFname: "Valid in Abu Dhabi and Al Ain", BFvalue: true },
        { BFname: "Worldwide access", BFvalue: false },
        { BFname: "Lite access", BFvalue: true },
      ],
    },
  ];
  const TouristData = [
    {
      id: 1,
      product: "",
      product_alias: "",
      name: "Standard",
      nametext: "Best for fine & casual dining",
      badge: "Was Dubai Classic & Dubai Gourmet",
      price: "43.75",
      currency_period: "AED/month.",
      saveprice: "173.42 AED/mo.",
      saveprice_percent: "Save 69%",
      billed_annually: "525 AED",
      billed_annually_text: " billed annually (including VAT)",
      subscribText: "Buy Now",
      subscribClass: "",
      img: "https://b2cappassetscdn.theentertainerme.com/v7/standard/DXB-Standard-359x404.png",
      LearnMoreAbout_text: "Learn more",
      LearnMoreAbout_link: "#0",
      BeneFits: [
        { BFname: "Family Members", BFvalue: 3, },
        { BFname: "Number of Offers", BFvalue: "4000+" },
        { BFname: "Number of Places", BFvalue: "1,000+", BFlinkText: "View all Places", BFlink: "home",},
        { BFname: "Estimated Savings", BFvalue: "AED 40,000 +" },
        { BFname: "Redeem in peak hours", BFvalue: false },
        { BFname: "Food & Beverages", BFvalue: false },
      ],
    },
  ];

  const [TfoactiveLinkId, setTfoActiveLinkId] = useState(TfoData[0].id);
  const [Tfoactivebox, setTfoActivebox] = useState(TfoData[0].id);
  const TfohandleLinkClick = (id) => {
    setTfoActiveLinkId(id);
    setTfoActivebox(id);
  };
  const [TouristactiveLinkId, setTouristActiveLinkId] = useState(TouristData[0].id);
  const [Touristactivebox, setTouristActivebox] = useState(TouristData[0].id);
  const TouristhandleLinkClick = (id) => {
    setTouristActiveLinkId(id);
    setTouristActivebox(id);
  };
 

  return (
    <>
      <div></div>
      {<Header />}
      <div id="planspg" className="wrapper">
        <div id="plans" className="padtop padbot">
          <Container>
            <Row>
              <Col md={12} className="New_Product_Tiers_title">
                <h2>Choose your plan </h2>
                <p> See more, do more, save more with our different plans</p>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Tabs defaultActiveKey="entertainer" id="planstabs">
                  <Tab eventKey="entertainer" title="the ENTERTAINER">
                  {TfoData.length > 1 ? <div className="mobtab">
                      {TfoData.map((link) => (
                        <div
                          key={link.id}
                          className={`mobtab_item ${
                           TfoactiveLinkId === link.id ? "active" : ""
                          }`}
                          onClick={() => TfohandleLinkClick(link.id)}
                        >
                          {link.name}
                        </div>
                      ))}
                    </div>
                    : <></>
                  }
                    <div className="planspg_warp">
                      <div className="baobox">
                        <div className="baoboxtext">
                          <h2>Benefits and offers </h2>
                        </div>
                        <div className="bao">
                        {TfoData[0]?.BeneFits.map((item, index) => {
                           return (
                            <div key={index}>
                            {item.BFname}
                          </div>
                      );
                    })}
                    </div>
                      </div>
                     
                      {TfoData.map((TFO, index) => (
                        <ComparePlansCard key={index}
                          product={
                            TFO.product +
                            ` ${Tfoactivebox === TFO.id ? "active" : ""}`
                          }
                          name={TFO.name}
                          nametext={TFO.nametext}
                          badge={TFO.badge}
                          price={TFO.price}
                          currency_period={TFO.currency_period}
                          saveprice={TFO.saveprice}
                          saveprice_percent={TFO.saveprice_percent}
                          billed_annually={TFO.billed_annually}
                          billed_annually_text={TFO.billed_annually_text}
                          subscribText={TFO.subscribText}
                          subscribClass={TFO.subscribClass}
                          img={TFO.img}
                          LearnMoreAbout_text={TFO.LearnMoreAbout_text}
                          LearnMoreAbout_link={TFO.LearnMoreAbout_link}
                          BeneFitsData={TFO.BeneFits}
                        />
                      ))}
                    </div>
                  </Tab>
                  <Tab eventKey="tourist" title="Tourist">
                  {TouristData.length > 1 ? <div className="mobtab">
                      {TouristData.map((link) => (
                        <div
                          key={link.id}
                          className={`mobtab_item ${
                            TouristactiveLinkId === link.id ? "active" : ""
                          }`}
                          onClick={() => TouristhandleLinkClick(link.id)}
                        >
                          {link.name}
                        </div>
                      ))}
                    </div>
                    : <></>
                  }
                    <div className="planspg_warp">
                    <div className="baobox">
                        <div className="baoboxtext">
                          <h2>Benefits and offers </h2>
                        </div>
                        <div className="bao">
                        {TouristData[0]?.BeneFits.map((item, index) => {
                           return (
                            <div key={index}>
                            {item.BFname}
                          </div>
                      );
                    })}
                    </div>
                      </div>

                    {TouristData.map((Tourist) => (
                        <ComparePlansCard
                          product={
                            Tourist.product +
                            ` ${Touristactivebox === Tourist.id ? "active" : ""}`
                          }
                          name={Tourist.name}
                          nametext={Tourist.nametext}
                          badge={Tourist.badge}
                          price={Tourist.price}
                          currency_period={Tourist.currency_period}
                          saveprice={Tourist.saveprice}
                          saveprice_percent={Tourist.saveprice_percent}
                          billed_annually={Tourist.billed_annually}
                          billed_annually_text={Tourist.billed_annually_text}
                          subscribText={Tourist.subscribText}
                          subscribClass={Tourist.subscribClass}
                          img={Tourist.img}
                          LearnMoreAbout_text={Tourist.LearnMoreAbout_text}
                          LearnMoreAbout_link={Tourist.LearnMoreAbout_link}
                          BeneFitsData={Tourist.BeneFits}
                        />
                      ))}
                    </div>
                  </Tab>
                  <Tab eventKey="soleil" title="Soleil">
                    <div className="planspg_warp">Soleil</div>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Testimonials />
      <Faqs />
      <Footer />
      <Helmet>
        <body className={"pgplans " + location + " " + city} />
        <meta name="description" content={city + " plans meta"} />
      </Helmet>
    </>
  );
}
export default Plans;
