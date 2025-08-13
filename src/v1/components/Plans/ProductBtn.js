import { React } from "../../../services/centerServices";
import PopUpAlert from "../PopUp/PopUpAlert"

function ProductBtn(props) {
  const popupComp = ()=>{
     
            
    return <PopUpAlert popupTitle={"Want more vouchers?"} popupDesc={"You already own this product, if you wish to extend your range of offers, please view our other plans."} btnType={"icon"} btnText={"Got it"} btnTextClose="Ok"  btnClass={""}  />
    }
  const getBtnStatus = () => {
    if (
      props.isSubscribed != null &&
      props.isSubscribed.product_id === props.product_id
    ) {
      return (
        <a href="#0" className="btn Buynow subscribedProductsBtn">
          Active {popupComp()}
        </a>
      );
    } else if (props.price < 1 && props.logedIn) {
      return (
        <a href="#0" className="btn Buynow subscribedProductsBtn">
        Active {popupComp()}
      </a>
      );
    } else if (props.price < 1 || !props.logedIn) {
      return (
        <a href="#0" className="btn Buynow">
          Try it now
        </a>
      );
    } else {
      return (
        <a href=" " className="btn Buynow">
          Buy Now
        </a>
      );
    }
  };
  return <>{getBtnStatus()}</>;
}

export default ProductBtn;
