import { React, useSelector } from "../../../services/centerServices";
import ProductBtn from "./ProductBtn";
import PopUpAlert from "../PopUp/PopUpAlert"
function PlansCard(props) {
  const isAuth = useSelector((state) => state.auth);
  const popupText = ()=>{
  return <ul><li>12-month membership from the day of purchase.</li>
  <li>Membership will auto-renew at the end of 12 months at the then-applicable renewal price until cancelled. Auto-renewal can be switched off at any time within the app's settings.</li>
  <li>Offers are valid during the period mentioned in the app's offer pages.</li>
  </ul>
  }
  return (
    <>
    
      <div
        id={props.product_id}
        className={"probox " + `${props.price < 1 ? props.product_type : ""}`}
      >
        <div className="popular_tag d-d">{props.product_alias} </div>
        <div className="product_img">
          <img src={props.img} alt=" " />
        </div>
        <div className="colorbox">
          <span className="badge">{props.badge}</span>
          <h3>
            {props.name}
            {/* -
            <span>{props.name_loc}</span> */}
          </h3>
          <p>
            <span className="Earlybird_badge_tourist">{props.ptext}</span>
          </p>
          <div className="New_Product_Tiers_pricebox">
            {![null, "", undefined].includes(props.saveprice) ? (
              <div className="Earlybird_price">
                <del>{props.saveprice}</del>
                <span> {props.saveprice_percent}</span>
              </div>
            ) : (
              <></>
            )}

            <div className="New_Product_Tiers_price">
              {props.price < 1 ? "Free" : props.price}
              {props.price > 0 ? (
                <small>{props.currency_symbol}/{props.currency_period}</small>
              ) : (
                ""
              )}
            </div>
            <div className="New_Product_Tiers_priceannually">
              <strong>{props.billed_annually}</strong>
              <span>{props.billed_annually_text}</span>
            </div>
          </div>
          <div className="member_learnmore">
            <PopUpAlert popupTitle={"Membership terms"} popupDesc={popupText()} poupSize={"lg"} btnType={"icon"} btnText={"Membership terms"} btnClass={"MembershipTerms"} btnTextClose="Ok" />
            
            <a href={props.LearnMoreAbout_link} className="LearnMoreAbout">
              {props.LearnMoreAbout_text}
            </a>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.desc }}></div>
         
        <ProductBtn
          price={props.price}
          product_id={props.product_id}
          isSubscribed={props.isSubscribed}
          logedIn={isAuth?.isAuth}
        />
        

      </div>
    </>
  );
}

export default PlansCard;
