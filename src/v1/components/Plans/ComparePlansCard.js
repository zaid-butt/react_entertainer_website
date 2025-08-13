import { React, useSelector } from "../../../services/centerServices";
import ProductBtn from "./ProductBtn";
function ComparePlansCard(props) {
  const {
    product,
    img,
    badge,
    name,
    nametext,
    ptext,
    saveprice,
    saveprice_percent,
    price,
    currency_period,
    billed_annually,
    billed_annually_text,
    subscribClass,
    subscribText
  } = props;
  const isAuth = useSelector((state) => state.auth);
  return (
    <>
      <div className={"cpcbox " + product}>
        <div className="product_img">
          <img src={img} alt=" " />
        </div>
        <div className="colorbox">
          <h3>
            {name}
            <span>{nametext}</span>
          </h3>
          <p>
            <span className="Earlybird_badge_tourist">{ptext}</span>
          </p>
          <div className="New_Product_Tiers_pricebox">
            {![null, "", undefined].includes(saveprice) ? (
              <div className="Earlybird_price">
                <del>{saveprice}</del>
                <span> {saveprice_percent}</span>
              </div>
            ) : (
              <></>
            )}

            <div className="New_Product_Tiers_price">
            {props.price < 1 ? "Free" : props.price}
              {props.price > 0 ? (
                <small> {props.currency_symbol}/{currency_period} </small>
              ) : (
                ""
              )}
              {/* {price}
              <small> {currency_period}</small> */}
            </div>
            <div className="New_Product_Tiers_priceannually">
              <strong>{billed_annually}</strong>
              <span>{billed_annually_text}</span>
            </div>
            <div className="TPP_plugin">
              <hr />
              <div class="TPP_plugin_devider">OR</div>
              <span>3 interest-free payment of AED 138.33</span>
            </div>
          </div>
        </div>

        {/* <a href="#0" className={"btn btn-primary Buynow " + subscribClass}>
          {subscribText}
        </a> */}
         
        <ProductBtn
          price={props.price}
          product_id={props.product_id}
          isSubscribed={props.isSubscribed}
          logedIn={isAuth?.isAuth}
        />
        <div className="bao">
          {props.BeneFitsData &&
            Object.values(props.BeneFitsData).map((item, index) => {
              return (
                <div key={index}>
                  <span>{item}</span>
                  {["true"].includes(item) ? (
                    <img
                      src="https://b2cappassetscdn.theentertainerme.com/website_images/bao-true.svg"
                      alt=" "
                    />
                  ) : (
                    <></>
                  )}
                  {["false"].includes(item) ? (
                    <img
                      src="https://b2cappassetscdn.theentertainerme.com/website_images/bao-false.svg"
                      alt=" "
                    />
                  ) : (
                    <></>
                  )}
                  {!["null", "true", "", "false"].includes(item) ? (
                    <p dangerouslySetInnerHTML={{__html:item}}></p>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ComparePlansCard;
