import {React } from "../../../services/centerServices";
import "./Mcard.css";

import { default as merchant_img } from "../../../../src/assets/images/merchant_img.png";
import { default as merchant_logo } from "../../../../src/assets/images/merchant_logo.png";

function Mcard(props) {
  //const { t } = useTranslation();
  return (
    <>
     <div className="MCard">
              <div className="MCard-imgbox">
                <img className="MCard-img" src={merchant_img} alt="dummy" />
                <div className="MCard-logobox">
                  <img src={merchant_logo} alt="dummy" />
                </div>
              </div>
              <div className="MCard-content">
                <div className="MCard-rating">4.5</div>
                <h5 className="MCard-title">Deniz Cafe & Restaurant</h5>
                <p className="MCard-price">Est. Savings AED 100 </p>
                <div className="MCard-tags">
                  <span className="tags tag1">Buy one get one free</span>
                  <span className="tags tag2">25% off</span>
                </div>
                <div className="MCard-included">
                  Included in:
                  <ul>
                    <li>
                      <a href="#0">Standard</a>
                    </li>
                    <li>
                      <a href="#0">Premium</a>
                    </li>
                    <li>
                      <a href="#0">Global</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    </>
  );
}

export default Mcard;
