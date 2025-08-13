import img from "assets/images/pro_img2.png";
import card_offer1 from "assets/images/card_offer1.svg";
import card_offer3 from "assets/images/card_offer3.svg";

import "./MstartSaving.css";

function MstartSaving() {
  return (
    <>
      <div className="col-md-12 MstartSaving">
        <div className="row">
          <div className="col-md-6">
            <div className="SSCard">
              <div className="SSCard_content">
                <div className="SSCard_left">
                  <img src={img} alt=" " />
                </div>
                <div className="SSCard_right">
                  <div className="SSCard_name">
                    <div className="SSCard_title">Standard-Dubai</div>
                    <div className="SSCard_subtitle">
                      Previously Dubai Classic
                    </div>
                  </div>
                  <div className="New_Product_Tiers_pricebox">
                    <div className="New_Product_Tiers_price">
                      61.25
                      <small>
                        AED <span>/month</span>
                      </small>
                    </div>
                    <div className="New_Product_Tiers_priceannually">
                      <strong>735.00 AED </strong>
                      <span>billed annually (including VAT)</span>
                    </div>
                    <div className="SSCard_plugin">
                    <hr/>
                      <div className="SSCard_plugin_devider">
                        OR
                        </div>
                        3 interest-free payment of AED 138.33
                    </div>
                  </div>
                </div>
              </div>
              <div className="SSCard_bottom">
                <button className="btn btn-primary">Buy now</button>
                <a href=" ">Explore benefits</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 card_offers">
            <span>Available offers </span>
            <img
              src={card_offer1}
              alt="Offer"
            />
            <img
              src={card_offer3}
              alt="Offer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MstartSaving;
