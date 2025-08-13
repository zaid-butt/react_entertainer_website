import { React } from "../../../services/centerServices";
import PopUpAlert from "../PopUp/PopUpAlert"
function PlansCard(props) {
  return (
    <>
      <div id="" className={ "probox " + ( props.product )}>
      <div className="popular_tag d-d">{props.product_alias} </div>
        <div className="product_img">
          <img src={props.img}  alt=" " />
        </div>
        <div className="colorbox">
          <span className="badge">{props.badge}</span>
          <h3>
            {props.name}<span>{props.name_loc}</span>
          </h3>
          <p>
            <span className="Earlybird_badge_tourist">{props.ptext}</span>
          </p>
          <div className="New_Product_Tiers_pricebox">
          
          {![null,'',undefined].includes(props.saveprice) ? <div
                className="Earlybird_price"
              >
                <del>{props.saveprice}</del>
                <span> {props.saveprice_percent}</span>
              </div> : <></>
              }

            <div className="New_Product_Tiers_price">
              {props.price}
              <small> {props.currency_period}</small>
            </div>
            <div className="New_Product_Tiers_priceannually">
              <strong>{props.billed_annually}</strong>
              <span>{props.billed_annually_text}</span>
            </div>
          </div>
          <div className="member_learnmore">
           
              <PopUpAlert popupTitle={"Membership terms"} popupDesc="waooo" btnType={"icon"} btnText={"Membership terms"} btnClass={"MembershipTerms"} btnTextClose="Ok" />
            
            <a
              href={props.LearnMoreAbout_link}
              className="LearnMoreAbout"
            >
              {props.LearnMoreAbout_text}
            </a>
          </div>
        </div>

        <div className="Includes d-d">
          <ul>
            <li>
              Estimated savings <span>AED 40,000+</span>
            </li>
            <li>
              Number of offers <span>3,000+</span>
            </li>
            <li>
              Number of places <span>1,200+</span>
            </li>
          </ul>
        </div>
        <a href="#0" className={ "btn btn-primary Buynow " + ( props.subscribClass )}>
          {props.subscribText}
        </a>
      </div>
    </>
  );
}

export default PlansCard;
